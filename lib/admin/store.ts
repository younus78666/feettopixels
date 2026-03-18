import { AdminConfig, AdminConfigSection } from "./types"
import fs from "fs/promises"
import path from "path"

const CONFIG_PATH = path.join(process.cwd(), "data", "admin-config.json")

// Default config used as fallback
const defaultConfig: AdminConfig = {
  tracking: {
    googleAnalyticsId: null,
    googleAdsConversionId: null,
    googleAdsConversionLabel: null,
    facebookPixelId: null,
    customScripts: [],
  },
  social: {
    instagramEmbed: { enabled: false, url: "" },
    twitterEmbed: { enabled: false, handle: "" },
    facebookEmbed: { enabled: false, pageUrl: "" },
    whatsappWidget: { enabled: false, number: "", message: "Hi! I'd like to know more about your services." },
    tawktoWidget: { enabled: false, propertyId: "" },
  },
  apiKeys: {
    googleMapsApiKey: null,
    googleSearchConsoleVerification: null,
    customKeys: [],
  },
  headerScripts: [],
  siteSettings: {
    name: "",
    description: "",
    url: "",
    phone: "",
    email: "",
    address: { street: "", city: "", state: "", zip: "", country: "" },
    social: {},
    hours: "",
    tagline: "",
  },
  csp: {
    additionalScriptSources: [],
    additionalFrameSources: [],
    additionalConnectSources: [],
    additionalImgSources: [],
  },
}

interface ConfigStore {
  getConfig(): Promise<AdminConfig>
  updateSection<K extends AdminConfigSection>(
    section: K,
    data: AdminConfig[K]
  ): Promise<void>
  updateConfig(config: AdminConfig): Promise<void>
}

// JSON file-based store for local/VPS hosting
class JsonFileStore implements ConfigStore {
  async getConfig(): Promise<AdminConfig> {
    try {
      const raw = await fs.readFile(CONFIG_PATH, "utf-8")
      const parsed = JSON.parse(raw)
      // Merge with defaults to handle missing fields
      return deepMerge(defaultConfig, parsed) as AdminConfig
    } catch {
      return { ...defaultConfig }
    }
  }

  async updateSection<K extends AdminConfigSection>(
    section: K,
    data: AdminConfig[K]
  ): Promise<void> {
    const config = await this.getConfig()
    config[section] = data
    await this.writeConfig(config)
  }

  async updateConfig(config: AdminConfig): Promise<void> {
    await this.writeConfig(config)
  }

  private async writeConfig(config: AdminConfig): Promise<void> {
    const dir = path.dirname(CONFIG_PATH)
    await fs.mkdir(dir, { recursive: true })
    // Write to temp file then rename for atomicity
    const tempPath = CONFIG_PATH + ".tmp"
    await fs.writeFile(tempPath, JSON.stringify(config, null, 2), "utf-8")
    await fs.rename(tempPath, CONFIG_PATH)
  }
}

// Vercel Blob store for serverless hosting
class VercelBlobStore implements ConfigStore {
  private blobKey = "admin-config.json"

  async getConfig(): Promise<AdminConfig> {
    try {
      // Dynamic import to avoid errors when @vercel/blob isn't installed
      const { list, } = await import(/* webpackIgnore: true */ "@vercel/blob" as string)
      const blobs = await list({ prefix: this.blobKey })
      if (blobs.blobs.length === 0) return { ...defaultConfig }

      const response = await fetch(blobs.blobs[0].url)
      const parsed = await response.json()
      return deepMerge(defaultConfig, parsed) as AdminConfig
    } catch {
      return { ...defaultConfig }
    }
  }

  async updateSection<K extends AdminConfigSection>(
    section: K,
    data: AdminConfig[K]
  ): Promise<void> {
    const config = await this.getConfig()
    config[section] = data
    await this.updateConfig(config)
  }

  async updateConfig(config: AdminConfig): Promise<void> {
    try {
      const { put } = await import(/* webpackIgnore: true */ "@vercel/blob" as string)
      await put(this.blobKey, JSON.stringify(config, null, 2), {
        access: "private",
        addRandomSuffix: false,
      })
    } catch (error) {
      console.error("Failed to write to Vercel Blob:", error)
      throw error
    }
  }
}

// Auto-detect environment and return appropriate store
function createStore(): ConfigStore {
  if (process.env.VERCEL && process.env.BLOB_READ_WRITE_TOKEN) {
    return new VercelBlobStore()
  }
  return new JsonFileStore()
}

// Singleton store instance
let storeInstance: ConfigStore | null = null

export function getStore(): ConfigStore {
  if (!storeInstance) {
    storeInstance = createStore()
  }
  return storeInstance
}

// Convenience functions
export async function getAdminConfig(): Promise<AdminConfig> {
  return getStore().getConfig()
}

export async function updateAdminSection<K extends AdminConfigSection>(
  section: K,
  data: AdminConfig[K]
): Promise<void> {
  return getStore().updateSection(section, data)
}

// Deep merge utility
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepMerge(target: any, source: any): any {
  const output = { ...target }
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === "object" &&
      !Array.isArray(target[key])
    ) {
      output[key] = deepMerge(target[key], source[key])
    } else {
      output[key] = source[key]
    }
  }
  return output
}

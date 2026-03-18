export interface CustomScript {
  id: string
  name: string
  code: string
  location: "head" | "body-start" | "body-end"
  enabled: boolean
}

export interface HeaderScript {
  id: string
  name: string
  content: string
  enabled: boolean
}

export interface CustomApiKey {
  id: string
  name: string
  value: string
}

export interface AdminConfig {
  tracking: {
    googleAnalyticsId: string | null
    googleAdsConversionId: string | null
    googleAdsConversionLabel: string | null
    facebookPixelId: string | null
    customScripts: CustomScript[]
  }
  social: {
    instagramEmbed: { enabled: boolean; url: string }
    twitterEmbed: { enabled: boolean; handle: string }
    facebookEmbed: { enabled: boolean; pageUrl: string }
    whatsappWidget: { enabled: boolean; number: string; message: string }
    tawktoWidget: { enabled: boolean; propertyId: string }
  }
  apiKeys: {
    googleMapsApiKey: string | null
    googleSearchConsoleVerification: string | null
    customKeys: CustomApiKey[]
  }
  headerScripts: HeaderScript[]
  siteSettings: {
    name: string
    description: string
    url: string
    phone: string
    email: string
    address: {
      street: string
      city: string
      state: string
      zip: string
      country: string
    }
    social: Record<string, string>
    hours: string
    tagline: string
  }
  csp: {
    additionalScriptSources: string[]
    additionalFrameSources: string[]
    additionalConnectSources: string[]
    additionalImgSources: string[]
  }
}

export type AdminConfigSection = keyof AdminConfig

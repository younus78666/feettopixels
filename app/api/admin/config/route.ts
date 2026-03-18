import { NextRequest, NextResponse } from "next/server"
import { getAdminConfig, updateAdminSection } from "@/lib/admin/store"
import { getSessionFromCookies } from "@/lib/admin/auth"
import { AdminConfigSection } from "@/lib/admin/types"
import { revalidatePath } from "next/cache"

// Sanitize string to prevent script injection in stored config
function sanitizeString(str: unknown): string {
  if (typeof str !== "string") return ""
  return str.slice(0, 5000) // Max length
}

// Validate tracking section
function validateTracking(data: Record<string, unknown>): boolean {
  if (data.googleAnalyticsId && typeof data.googleAnalyticsId === "string") {
    if (!/^G-[A-Z0-9]+$/i.test(data.googleAnalyticsId)) return false
  }
  if (data.facebookPixelId && typeof data.facebookPixelId === "string") {
    if (!/^\d+$/.test(data.facebookPixelId)) return false
  }
  return true
}

// Validate CSP sources — prevent dangerous values
function validateCspSources(sources: unknown[]): boolean {
  if (!Array.isArray(sources)) return false
  const dangerous = ["*", "data:", "blob:", "'unsafe-inline'", "'unsafe-eval'"]
  for (const source of sources) {
    if (typeof source !== "string") return false
    if (dangerous.includes(source)) return false
    if (source.length > 200) return false
  }
  return true
}

export async function GET() {
  const isAuthed = await getSessionFromCookies()
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const config = await getAdminConfig()
    return NextResponse.json(config)
  } catch (error) {
    console.error("Config read error:", error)
    return NextResponse.json(
      { error: "Failed to read configuration" },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  const isAuthed = await getSessionFromCookies()
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { section, data } = body

    if (!section || !data) {
      return NextResponse.json(
        { error: "Section and data are required" },
        { status: 400 }
      )
    }

    const validSections: AdminConfigSection[] = [
      "tracking", "social", "apiKeys", "headerScripts", "siteSettings", "csp"
    ]

    if (!validSections.includes(section)) {
      return NextResponse.json(
        { error: `Invalid section. Must be one of: ${validSections.join(", ")}` },
        { status: 400 }
      )
    }

    // Section-specific validation
    if (section === "tracking" && !validateTracking(data)) {
      return NextResponse.json(
        { error: "Invalid tracking data. Check GA ID format (G-XXXXX) and Pixel ID (numeric)." },
        { status: 400 }
      )
    }

    if (section === "csp") {
      const cspData = data as Record<string, unknown>
      for (const key of ["additionalScriptSources", "additionalFrameSources", "additionalConnectSources", "additionalImgSources"]) {
        if (cspData[key] && !validateCspSources(cspData[key] as unknown[])) {
          return NextResponse.json(
            { error: `Invalid CSP sources in ${key}. Wildcards (*) and unsafe directives are not allowed.` },
            { status: 400 }
          )
        }
      }
    }

    // Sanitize string fields in siteSettings
    if (section === "siteSettings") {
      const settings = data as Record<string, unknown>
      for (const key of Object.keys(settings)) {
        if (typeof settings[key] === "string") {
          settings[key] = sanitizeString(settings[key])
        }
      }
    }

    await updateAdminSection(section, data)

    // Revalidate the entire site so changes take effect
    revalidatePath("/", "layout")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Config update error:", error)
    return NextResponse.json(
      { error: "Failed to update configuration" },
      { status: 500 }
    )
  }
}

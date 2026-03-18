import { AdminConfig } from "./types"

// Known CSP mappings for popular services
const SERVICE_CSP_MAP: Record<string, { script?: string[]; connect?: string[]; frame?: string[]; img?: string[] }> = {
  googleAnalytics: {
    script: ["https://www.googletagmanager.com", "https://www.google-analytics.com"],
    connect: ["https://www.google-analytics.com", "https://analytics.google.com"],
    img: ["https://www.google-analytics.com"],
  },
  googleAds: {
    script: ["https://www.googletagmanager.com", "https://googleads.g.doubleclick.net", "https://www.google.com"],
    connect: ["https://googleads.g.doubleclick.net"],
    frame: ["https://www.google.com", "https://bid.g.doubleclick.net"],
    img: ["https://www.google.com", "https://googleads.g.doubleclick.net"],
  },
  facebookPixel: {
    script: ["https://connect.facebook.net"],
    connect: ["https://www.facebook.com", "https://connect.facebook.net"],
    img: ["https://www.facebook.com"],
  },
  instagram: {
    script: ["https://www.instagram.com"],
    frame: ["https://www.instagram.com"],
  },
  twitter: {
    script: ["https://platform.twitter.com", "https://syndication.twitter.com"],
    frame: ["https://platform.twitter.com", "https://syndication.twitter.com"],
  },
  facebook: {
    script: ["https://connect.facebook.net"],
    frame: ["https://www.facebook.com"],
  },
  tawkto: {
    script: ["https://embed.tawk.to"],
    connect: ["https://va.tawk.to", "wss://va.tawk.to"],
    frame: ["https://tawk.to"],
    img: ["https://tawk.to"],
  },
}

export function buildCSP(config: AdminConfig): string {
  const scriptSrc = new Set([
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
  ])
  const connectSrc = new Set(["'self'", "https://vitals.vercel-insights.com"])
  const frameSrc = new Set(["'self'", "https://www.google.com", "https://maps.google.com"])
  const imgSrc = new Set(["'self'", "data:", "https:", "blob:"])
  const styleSrc = new Set(["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"])
  const fontSrc = new Set(["'self'", "https://fonts.gstatic.com"])

  // Add sources based on active tracking services
  if (config.tracking.googleAnalyticsId) {
    addServiceSources("googleAnalytics", scriptSrc, connectSrc, frameSrc, imgSrc)
  }
  if (config.tracking.googleAdsConversionId) {
    addServiceSources("googleAds", scriptSrc, connectSrc, frameSrc, imgSrc)
  }
  if (config.tracking.facebookPixelId) {
    addServiceSources("facebookPixel", scriptSrc, connectSrc, frameSrc, imgSrc)
  }

  // Social embeds
  if (config.social.instagramEmbed.enabled) {
    addServiceSources("instagram", scriptSrc, connectSrc, frameSrc, imgSrc)
  }
  if (config.social.twitterEmbed.enabled) {
    addServiceSources("twitter", scriptSrc, connectSrc, frameSrc, imgSrc)
  }
  if (config.social.facebookEmbed.enabled) {
    addServiceSources("facebook", scriptSrc, connectSrc, frameSrc, imgSrc)
  }
  if (config.social.tawktoWidget.enabled) {
    addServiceSources("tawkto", scriptSrc, connectSrc, frameSrc, imgSrc)
  }

  // Custom CSP additions from admin config
  config.csp.additionalScriptSources.forEach((s) => scriptSrc.add(s))
  config.csp.additionalFrameSources.forEach((s) => frameSrc.add(s))
  config.csp.additionalConnectSources.forEach((s) => connectSrc.add(s))
  config.csp.additionalImgSources.forEach((s) => imgSrc.add(s))

  return [
    `default-src 'self'`,
    `script-src ${[...scriptSrc].join(" ")}`,
    `style-src ${[...styleSrc].join(" ")}`,
    `font-src ${[...fontSrc].join(" ")}`,
    `img-src ${[...imgSrc].join(" ")}`,
    `frame-src ${[...frameSrc].join(" ")}`,
    `connect-src ${[...connectSrc].join(" ")}`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
  ].join("; ")
}

function addServiceSources(
  service: string,
  scriptSrc: Set<string>,
  connectSrc: Set<string>,
  frameSrc: Set<string>,
  imgSrc: Set<string>
) {
  const mapping = SERVICE_CSP_MAP[service]
  if (!mapping) return
  mapping.script?.forEach((s) => scriptSrc.add(s))
  mapping.connect?.forEach((s) => connectSrc.add(s))
  mapping.frame?.forEach((s) => frameSrc.add(s))
  mapping.img?.forEach((s) => imgSrc.add(s))
}

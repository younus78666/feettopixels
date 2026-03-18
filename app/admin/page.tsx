import Link from "next/link"
import { getAdminConfig } from "@/lib/admin/store"

export default async function AdminDashboardPage() {
  const config = await getAdminConfig()

  // Count configured tracking pixels
  const trackingCount = [
    config.tracking.googleAnalyticsId,
    config.tracking.googleAdsConversionId,
    config.tracking.facebookPixelId,
  ].filter(Boolean).length

  // Count custom scripts
  const scriptsCount = config.tracking.customScripts.length + config.headerScripts.length

  // Count enabled social embeds
  const socialCount = [
    config.social.instagramEmbed.enabled,
    config.social.twitterEmbed.enabled,
    config.social.facebookEmbed.enabled,
    config.social.whatsappWidget.enabled,
    config.social.tawktoWidget.enabled,
  ].filter(Boolean).length

  // Check if site settings are configured
  const siteConfigured = !!(config.siteSettings.name && config.siteSettings.url)

  const totalConfigured = trackingCount + scriptsCount + socialCount + (siteConfigured ? 1 : 0)

  const cards = [
    {
      label: "Tracking Pixels",
      count: trackingCount,
      href: "/admin/tracking",
      color: "bg-primary-50 text-primary-600",
      iconBg: "bg-primary-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      label: "Custom Scripts",
      count: scriptsCount,
      href: "/admin/scripts",
      color: "bg-accent-50 text-accent-600",
      iconBg: "bg-accent-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      label: "Social Embeds",
      count: socialCount,
      href: "/admin/social",
      color: "bg-green-50 text-green-600",
      iconBg: "bg-green-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
      ),
    },
    {
      label: "Site Status",
      count: siteConfigured ? 1 : 0,
      countLabel: siteConfigured ? "Configured" : "Not Set",
      href: "/admin/settings",
      color: siteConfigured ? "bg-primary-50 text-primary-600" : "bg-amber-50 text-amber-600",
      iconBg: siteConfigured ? "bg-primary-100" : "bg-amber-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  const checklist = [
    { label: "Configure site settings", done: siteConfigured, href: "/admin/settings" },
    { label: "Set up tracking pixels", done: trackingCount > 0, href: "/admin/tracking" },
    { label: "Add custom scripts", done: scriptsCount > 0, href: "/admin/scripts" },
    { label: "Configure social embeds", done: socialCount > 0, href: "/admin/social" },
    { label: "Add API keys", done: !!(config.apiKeys.googleMapsApiKey || config.apiKeys.customKeys.length > 0), href: "/admin/api-keys" },
  ]

  const completedSteps = checklist.filter(item => item.done).length

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome header */}
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">Welcome back</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Here is an overview of your site configuration.
        </p>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-primary-200 transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className={`p-2.5 rounded-lg ${card.iconBg}`}>
                <span className={card.color}>{card.icon}</span>
              </div>
              <svg className="w-5 h-5 text-secondary-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-heading font-bold text-foreground">
                {"countLabel" in card ? card.countLabel : card.count}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">{card.label}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick setup checklist */}
      {totalConfigured < 5 && (
        <div className="bg-white rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">Quick Setup</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Complete these steps to fully configure your site.
              </p>
            </div>
            <span className="text-sm font-medium text-primary px-3 py-1 bg-primary-50 rounded-full">
              {completedSteps}/{checklist.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-secondary-100 rounded-full mb-5 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps / checklist.length) * 100}%` }}
            />
          </div>

          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary-50 transition-colors group"
                >
                  {item.done ? (
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-secondary-300 flex-shrink-0 group-hover:border-primary transition-colors" />
                  )}
                  <span className={`text-sm font-medium ${item.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                    {item.label}
                  </span>
                  <svg className="w-4 h-4 text-secondary-300 ml-auto group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* All configured state */}
      {totalConfigured >= 5 && (
        <div className="bg-white rounded-xl border border-border p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground">All set!</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Your site is fully configured. Use the sidebar to manage individual sections.
          </p>
        </div>
      )}
    </div>
  )
}

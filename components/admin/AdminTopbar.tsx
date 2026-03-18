"use client"

import { usePathname } from "next/navigation"

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/tracking": "Tracking Pixels",
  "/admin/scripts": "Custom Scripts",
  "/admin/social": "Social Media",
  "/admin/settings": "Site Settings",
  "/admin/api-keys": "API Keys",
}

export function AdminTopbar() {
  const pathname = usePathname()

  const title = pageTitles[pathname] || "Admin"

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left: spacer for mobile hamburger + page title */}
        <div className="flex items-center gap-4">
          {/* Spacer for the fixed mobile hamburger button */}
          <div className="w-9 h-9 lg:hidden" aria-hidden="true" />
          <div>
            <h1 className="text-lg font-heading font-semibold text-foreground">{title}</h1>
          </div>
        </div>

        {/* Right: View Site button (desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            View Site
          </a>
        </div>
      </div>
    </header>
  )
}

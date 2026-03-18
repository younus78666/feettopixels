"use client"

import { useState, useEffect, useCallback } from "react"
import {
  AdminCard,
  AdminInput,
  ToggleSwitch,
  SaveButton,
  Toast,
  useToast,
} from "@/components/admin/AdminFormComponents"

interface TrackingConfig {
  ga4: {
    enabled: boolean
    measurementId: string
  }
  googleAds: {
    enabled: boolean
    conversionId: string
    conversionLabel: string
  }
  facebookPixel: {
    enabled: boolean
    pixelId: string
  }
}

const defaultConfig: TrackingConfig = {
  ga4: { enabled: false, measurementId: "" },
  googleAds: { enabled: false, conversionId: "", conversionLabel: "" },
  facebookPixel: { enabled: false, pixelId: "" },
}

export default function TrackingPage() {
  const [config, setConfig] = useState<TrackingConfig>(defaultConfig)
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast, showToast, clearToast } = useToast()

  // Load existing config on mount
  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/api/admin/config")
        if (res.ok) {
          const data = await res.json()
          if (data.tracking) {
            setConfig((prev) => ({
              ga4: { ...prev.ga4, ...data.tracking.ga4 },
              googleAds: { ...prev.googleAds, ...data.tracking.googleAds },
              facebookPixel: { ...prev.facebookPixel, ...data.tracking.facebookPixel },
            }))
          }
        }
      } catch {
        showToast("Failed to load tracking configuration.", "error")
      } finally {
        setInitialLoading(false)
      }
    }
    loadConfig()
  }, [showToast])

  // Validation
  const validate = useCallback((): boolean => {
    const newErrors: Record<string, string> = {}

    if (config.ga4.enabled && config.ga4.measurementId) {
      if (!/^G-[A-Z0-9]+$/.test(config.ga4.measurementId)) {
        newErrors.measurementId = "Must match format G-XXXXXXXXXX (uppercase letters and numbers)."
      }
    }

    if (config.googleAds.enabled && config.googleAds.conversionId) {
      if (!/^AW-\d+$/.test(config.googleAds.conversionId)) {
        newErrors.conversionId = "Must match format AW-XXXXXXXXX (digits only after AW-)."
      }
    }

    if (config.facebookPixel.enabled && config.facebookPixel.pixelId) {
      if (!/^\d+$/.test(config.facebookPixel.pixelId)) {
        newErrors.pixelId = "Pixel ID must contain only digits."
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [config])

  const handleSave = async () => {
    if (!validate()) {
      showToast("Please fix the validation errors before saving.", "error")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/admin/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: "tracking", data: config }),
      })

      if (res.ok) {
        showToast("Tracking configuration saved successfully.", "success")
      } else {
        const data = await res.json()
        showToast(data.error || "Failed to save configuration.", "error")
      }
    } catch {
      showToast("An unexpected error occurred while saving.", "error")
    } finally {
      setLoading(false)
    }
  }

  const updateGA4 = (field: keyof TrackingConfig["ga4"], value: string | boolean) => {
    setConfig((prev) => ({ ...prev, ga4: { ...prev.ga4, [field]: value } }))
    if (typeof value === "string") setErrors((prev) => ({ ...prev, measurementId: "" }))
  }

  const updateGoogleAds = (field: keyof TrackingConfig["googleAds"], value: string | boolean) => {
    setConfig((prev) => ({ ...prev, googleAds: { ...prev.googleAds, [field]: value } }))
    if (typeof value === "string") setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const updateFacebookPixel = (field: keyof TrackingConfig["facebookPixel"], value: string | boolean) => {
    setConfig((prev) => ({ ...prev, facebookPixel: { ...prev.facebookPixel, [field]: value } }))
    if (typeof value === "string") setErrors((prev) => ({ ...prev, pixelId: "" }))
  }

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="animate-spin w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {toast && <Toast message={toast.message} type={toast.type} onClose={clearToast} />}

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">Tracking &amp; Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Configure analytics and conversion tracking for your website.
        </p>
      </div>

      {/* Google Analytics 4 */}
      <AdminCard
        title="Google Analytics 4"
        description="Track website traffic and user behavior with GA4."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        }
      >
        <ToggleSwitch
          label="Enable Google Analytics 4"
          enabled={config.ga4.enabled}
          onChange={(val) => updateGA4("enabled", val)}
        />
        <AdminInput
          label="GA4 Measurement ID"
          placeholder="G-XXXXXXXXXX"
          value={config.ga4.measurementId}
          onChange={(e) => updateGA4("measurementId", e.target.value.toUpperCase())}
          error={errors.measurementId}
          disabled={!config.ga4.enabled}
          helperText="Found in your GA4 property settings under Data Streams."
        />
      </AdminCard>

      {/* Google Ads */}
      <AdminCard
        title="Google Ads"
        description="Track conversions from your Google Ads campaigns."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        }
      >
        <ToggleSwitch
          label="Enable Google Ads Tracking"
          enabled={config.googleAds.enabled}
          onChange={(val) => updateGoogleAds("enabled", val)}
        />
        <AdminInput
          label="Conversion ID"
          placeholder="AW-XXXXXXXXX"
          value={config.googleAds.conversionId}
          onChange={(e) => updateGoogleAds("conversionId", e.target.value.toUpperCase())}
          error={errors.conversionId}
          disabled={!config.googleAds.enabled}
          helperText="Found in your Google Ads conversion action settings."
        />
        <AdminInput
          label="Conversion Label"
          placeholder="Enter conversion label"
          value={config.googleAds.conversionLabel}
          onChange={(e) => updateGoogleAds("conversionLabel", e.target.value)}
          disabled={!config.googleAds.enabled}
          helperText="Optional label to identify this specific conversion action."
        />
      </AdminCard>

      {/* Facebook Pixel */}
      <AdminCard
        title="Facebook Pixel"
        description="Track conversions and build audiences for Facebook Ads."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        }
      >
        <ToggleSwitch
          label="Enable Facebook Pixel"
          enabled={config.facebookPixel.enabled}
          onChange={(val) => updateFacebookPixel("enabled", val)}
        />
        <AdminInput
          label="Pixel ID"
          placeholder="123456789012345"
          value={config.facebookPixel.pixelId}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "")
            updateFacebookPixel("pixelId", value)
          }}
          error={errors.pixelId}
          disabled={!config.facebookPixel.enabled}
          helperText="Found in Facebook Events Manager under your pixel settings."
          inputMode="numeric"
        />
      </AdminCard>

      {/* Save */}
      <SaveButton onClick={handleSave} loading={loading} />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { AdminCard, AdminInput, SaveButton, Toast, useToast } from "@/components/admin/AdminFormComponents"

interface CustomApiKey {
  id: string
  name: string
  value: string
}

interface ApiKeysConfig {
  googleMapsApiKey: string
  googleSearchConsole: string
  customKeys: CustomApiKey[]
}

const defaultConfig: ApiKeysConfig = {
  googleMapsApiKey: "",
  googleSearchConsole: "",
  customKeys: [],
}

function generateId(): string {
  return crypto.randomUUID().slice(0, 12)
}

function maskValue(value: string): string {
  if (!value || value.length <= 4) return value
  return "*".repeat(value.length - 4) + value.slice(-4)
}

export default function ApiKeysPage() {
  const [config, setConfig] = useState<ApiKeysConfig>(defaultConfig)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { toast, showToast, clearToast } = useToast()

  // Track which fields are currently being edited (show full value)
  const [editingMaps, setEditingMaps] = useState(false)
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set())
  // Store the original saved values for masking
  const [savedMapsKey, setSavedMapsKey] = useState("")

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/config")
        if (res.ok) {
          const data = await res.json()
          if (data.apiKeys) {
            const loaded = { ...defaultConfig, ...data.apiKeys }
            if (data.apiKeys.customKeys) {
              loaded.customKeys = data.apiKeys.customKeys
            }
            setConfig(loaded)
            setSavedMapsKey(loaded.googleMapsApiKey)
          }
        }
      } catch {
        showToast("Failed to load API keys configuration", "error")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [showToast])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch("/api/admin/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: "apiKeys", data: config }),
      })
      if (res.ok) {
        setSavedMapsKey(config.googleMapsApiKey)
        setEditingMaps(false)
        setVisibleKeys(new Set())
        showToast("API keys saved successfully", "success")
      } else {
        showToast("Failed to save API keys", "error")
      }
    } catch {
      showToast("An error occurred while saving", "error")
    } finally {
      setSaving(false)
    }
  }

  const addCustomKey = () => {
    const newKey: CustomApiKey = { id: generateId(), name: "", value: "" }
    setConfig((prev) => ({
      ...prev,
      customKeys: [...prev.customKeys, newKey],
    }))
    setVisibleKeys((prev) => new Set(prev).add(newKey.id))
  }

  const updateCustomKey = (id: string, field: "name" | "value", value: string) => {
    setConfig((prev) => ({
      ...prev,
      customKeys: prev.customKeys.map((k) => (k.id === id ? { ...k, [field]: value } : k)),
    }))
  }

  const deleteCustomKey = (id: string) => {
    setConfig((prev) => ({
      ...prev,
      customKeys: prev.customKeys.filter((k) => k.id !== id),
    }))
    setVisibleKeys((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <svg className="animate-spin w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {toast && <Toast message={toast.message} type={toast.type} onClose={clearToast} />}

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">API Keys</h1>
        <p className="text-muted-foreground mt-1">Manage your API keys and integrations securely.</p>
      </div>

      {/* Security Notice */}
      <div className="flex items-start gap-3 bg-warning/10 border border-warning/30 rounded-xl px-5 py-4">
        <svg className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <div>
          <p className="text-sm font-medium text-foreground">Security Notice</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            API keys are stored securely. Never share these values. Keys are masked after saving for your protection.
          </p>
        </div>
      </div>

      {/* Google Maps API Key */}
      <AdminCard
        title="Google Maps API Key"
        description="Required for displaying Google Maps on your website."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        }
      >
        <div className="relative">
          <AdminInput
            label="API Key"
            placeholder="AIzaSy..."
            type={editingMaps ? "text" : "password"}
            value={editingMaps ? config.googleMapsApiKey : (savedMapsKey ? maskValue(savedMapsKey) : config.googleMapsApiKey)}
            onChange={(e) => {
              if (!editingMaps) setEditingMaps(true)
              setConfig((prev) => ({ ...prev, googleMapsApiKey: e.target.value }))
            }}
            onFocus={() => {
              if (!editingMaps) {
                setEditingMaps(true)
                // Show the actual value when editing starts
              }
            }}
            onBlur={() => {
              // Keep editing mode if value changed
            }}
          />
          {savedMapsKey && (
            <button
              type="button"
              onClick={() => setEditingMaps(!editingMaps)}
              className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={editingMaps ? "Hide API key" : "Show API key"}
            >
              {editingMaps ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </AdminCard>

      {/* Google Search Console */}
      <AdminCard
        title="Google Search Console"
        description="Verify your site ownership with Google Search Console."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <AdminInput
          label="Verification Code"
          placeholder="google-site-verification=..."
          helperText="Paste the meta tag content value from Google Search Console"
          value={config.googleSearchConsole}
          onChange={(e) => setConfig((prev) => ({ ...prev, googleSearchConsole: e.target.value }))}
        />
      </AdminCard>

      {/* Custom API Keys */}
      <AdminCard
        title="Custom API Keys"
        description="Store additional API keys for third-party services."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        }
      >
        {config.customKeys.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            No custom API keys added yet. Click the button below to add one.
          </p>
        )}

        <div className="space-y-4">
          {config.customKeys.map((key) => (
            <div key={key.id} className="border border-border rounded-xl p-4 space-y-3 bg-muted/30">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-3">
                  <AdminInput
                    label="Key Name"
                    placeholder="e.g. Stripe, SendGrid, Mailchimp"
                    value={key.name}
                    onChange={(e) => updateCustomKey(key.id, "name", e.target.value)}
                  />
                  <div className="relative">
                    <AdminInput
                      label="Key Value"
                      placeholder="Enter API key value"
                      type={visibleKeys.has(key.id) ? "text" : "password"}
                      value={key.value}
                      onChange={(e) => updateCustomKey(key.id, "value", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => toggleKeyVisibility(key.id)}
                      className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={visibleKeys.has(key.id) ? "Hide key value" : "Show key value"}
                    >
                      {visibleKeys.has(key.id) ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => deleteCustomKey(key.id)}
                  className="mt-7 p-2 text-error/70 hover:text-error hover:bg-error/10 rounded-lg transition-colors"
                  aria-label={`Delete ${key.name || "custom"} API key`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addCustomKey}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-border text-sm font-medium text-muted-foreground hover:text-primary-600 hover:border-primary-300 transition-colors w-full justify-center"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add New API Key
        </button>
      </AdminCard>

      <SaveButton onClick={handleSave} loading={saving} />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import {
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminSelect,
  ToggleSwitch,
  SaveButton,
  Toast,
  ConfirmModal,
  useToast,
} from "@/components/admin/AdminFormComponents"

interface HeaderScript {
  id: string
  name: string
  content: string
  enabled: boolean
}

interface CustomTrackingScript {
  id: string
  name: string
  code: string
  location: "head" | "body-start" | "body-end"
  enabled: boolean
}

const LOCATION_OPTIONS = [
  { value: "head", label: "Head (<head>)" },
  { value: "body-start", label: "Body Start (after <body>)" },
  { value: "body-end", label: "Body End (before </body>)" },
]

export default function ScriptsPage() {
  const [headerScripts, setHeaderScripts] = useState<HeaderScript[]>([])
  const [customScripts, setCustomScripts] = useState<CustomTrackingScript[]>([])
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [deleteTarget, setDeleteTarget] = useState<{ type: "header" | "custom"; id: string; name: string } | null>(null)
  const { toast, showToast, clearToast } = useToast()

  // Load existing config
  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/api/admin/config")
        if (res.ok) {
          const data = await res.json()
          if (data.headerScripts) {
            setHeaderScripts(data.headerScripts)
          }
          if (data.tracking?.customScripts) {
            setCustomScripts(data.tracking.customScripts)
          }
        }
      } catch {
        showToast("Failed to load scripts configuration.", "error")
      } finally {
        setInitialLoading(false)
      }
    }
    loadConfig()
  }, [showToast])

  // --- Header Scripts CRUD ---
  const addHeaderScript = () => {
    setHeaderScripts((prev) => [
      ...prev,
      { id: nanoid(), name: "", content: "", enabled: true },
    ])
  }

  const updateHeaderScript = (id: string, field: keyof HeaderScript, value: string | boolean) => {
    setHeaderScripts((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    )
  }

  const removeHeaderScript = (id: string) => {
    setHeaderScripts((prev) => prev.filter((s) => s.id !== id))
    setDeleteTarget(null)
  }

  // --- Custom Tracking Scripts CRUD ---
  const addCustomScript = () => {
    setCustomScripts((prev) => [
      ...prev,
      { id: nanoid(), name: "", code: "", location: "head", enabled: true },
    ])
  }

  const updateCustomScript = (id: string, field: keyof CustomTrackingScript, value: string | boolean) => {
    setCustomScripts((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    )
  }

  const removeCustomScript = (id: string) => {
    setCustomScripts((prev) => prev.filter((s) => s.id !== id))
    setDeleteTarget(null)
  }

  // --- Save ---
  const handleSave = async () => {
    setLoading(true)
    try {
      // Save headerScripts section
      const res1 = await fetch("/api/admin/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: "headerScripts", data: headerScripts }),
      })

      // Save tracking.customScripts section
      const res2 = await fetch("/api/admin/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: "tracking", data: { customScripts: customScripts } }),
      })

      if (res1.ok && res2.ok) {
        showToast("Scripts saved successfully.", "success")
      } else {
        showToast("Failed to save one or more script sections.", "error")
      }
    } catch {
      showToast("An unexpected error occurred while saving.", "error")
    } finally {
      setLoading(false)
    }
  }

  // --- Confirm delete handler ---
  const handleConfirmDelete = () => {
    if (!deleteTarget) return
    if (deleteTarget.type === "header") {
      removeHeaderScript(deleteTarget.id)
    } else {
      removeCustomScript(deleteTarget.id)
    }
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
      <ConfirmModal
        open={!!deleteTarget}
        title="Delete Script"
        message={`Are you sure you want to delete "${deleteTarget?.name || "this script"}"? This action cannot be undone.`}
        confirmLabel="Delete"
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">Custom Scripts</h1>
        <p className="text-muted-foreground mt-1">
          Manage custom scripts injected into your website pages.
        </p>
      </div>

      {/* Warning Banner */}
      <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-warning/10 border border-warning/30" role="alert">
        <svg className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <div>
          <p className="text-sm font-medium text-foreground">Proceed with caution</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            Custom scripts run on every page. Only add trusted code. Malicious or broken scripts can affect site performance and security.
          </p>
        </div>
      </div>

      {/* Header Scripts Section */}
      <AdminCard
        title="Header Scripts"
        description="Scripts injected into the <head> section of every page."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        }
      >
        {headerScripts.length === 0 && (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No header scripts added yet. Click the button below to add one.
          </p>
        )}

        <div className="space-y-6">
          {headerScripts.map((script, index) => (
            <div
              key={script.id}
              className="p-4 rounded-xl border border-border bg-muted/30 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Script {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setDeleteTarget({ type: "header", id: script.id, name: script.name || `Script ${index + 1}` })
                  }
                  className="inline-flex items-center gap-1 text-xs text-error hover:text-error/80 transition-colors"
                  aria-label={`Delete header script ${script.name || index + 1}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
              <AdminInput
                label="Script Name"
                placeholder="e.g., Hotjar, Intercom"
                value={script.name}
                onChange={(e) => updateHeaderScript(script.id, "name", e.target.value)}
              />
              <AdminTextarea
                label="Script Content"
                placeholder={"<script>\n  // Your script here\n</script>"}
                value={script.content}
                onChange={(e) => updateHeaderScript(script.id, "content", e.target.value)}
                monospace
                rows={5}
              />
              <ToggleSwitch
                label="Enabled"
                enabled={script.enabled}
                onChange={(val) => updateHeaderScript(script.id, "enabled", val)}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addHeaderScript}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-border text-sm font-medium text-muted-foreground hover:border-primary-400 hover:text-primary-600 transition-colors w-full justify-center mt-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Header Script
        </button>
      </AdminCard>

      {/* Custom Tracking Scripts Section */}
      <AdminCard
        title="Custom Tracking Scripts"
        description="Scripts that can be placed in different locations on the page."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        }
      >
        {customScripts.length === 0 && (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No custom tracking scripts added yet. Click the button below to add one.
          </p>
        )}

        <div className="space-y-6">
          {customScripts.map((script, index) => (
            <div
              key={script.id}
              className="p-4 rounded-xl border border-border bg-muted/30 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Tracking Script {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setDeleteTarget({ type: "custom", id: script.id, name: script.name || `Tracking Script ${index + 1}` })
                  }
                  className="inline-flex items-center gap-1 text-xs text-error hover:text-error/80 transition-colors"
                  aria-label={`Delete tracking script ${script.name || index + 1}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
              <AdminInput
                label="Script Name"
                placeholder="e.g., Conversion Tracking, Retargeting"
                value={script.name}
                onChange={(e) => updateCustomScript(script.id, "name", e.target.value)}
              />
              <AdminTextarea
                label="Script Code"
                placeholder={"<script>\n  // Your tracking code here\n</script>"}
                value={script.code}
                onChange={(e) => updateCustomScript(script.id, "code", e.target.value)}
                monospace
                rows={5}
              />
              <AdminSelect
                label="Injection Location"
                value={script.location}
                onChange={(e) => updateCustomScript(script.id, "location", e.target.value)}
                options={LOCATION_OPTIONS}
              />
              <ToggleSwitch
                label="Enabled"
                enabled={script.enabled}
                onChange={(val) => updateCustomScript(script.id, "enabled", val)}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addCustomScript}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-border text-sm font-medium text-muted-foreground hover:border-primary-400 hover:text-primary-600 transition-colors w-full justify-center mt-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Tracking Script
        </button>
      </AdminCard>

      {/* Save */}
      <SaveButton onClick={handleSave} loading={loading} />
    </div>
  )
}

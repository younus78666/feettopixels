"use client"

import { useState, useEffect, useCallback, type ReactNode, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react"

// ---------------------------------------------------------------------------
// Toast
// ---------------------------------------------------------------------------
interface ToastProps {
  message: string
  type: "success" | "error"
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-sm font-medium animate-slide-in-right ${
        type === "success"
          ? "bg-success text-white"
          : "bg-error text-white"
      }`}
      role="alert"
    >
      {type === "success" ? (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 transition-opacity" aria-label="Close notification">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// useToast hook
// ---------------------------------------------------------------------------
export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type })
  }, [])
  const clearToast = useCallback(() => setToast(null), [])
  return { toast, showToast, clearToast }
}

// ---------------------------------------------------------------------------
// AdminCard
// ---------------------------------------------------------------------------
interface AdminCardProps {
  title: string
  description?: string
  icon?: ReactNode
  children: ReactNode
}

export function AdminCard({ title, description, icon, children }: AdminCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-border p-6 transition-shadow hover:shadow-lg">
      <div className="flex items-start gap-4 mb-5">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground">{title}</h3>
          {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// AdminInput
// ---------------------------------------------------------------------------
interface AdminInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  helperText?: string
  error?: string
}

export function AdminInput({ label, helperText, error, id, className, ...props }: AdminInputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-")
  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-2.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm ${error ? "border-error" : "border-border"} ${className || ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="text-xs text-error mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-muted-foreground mt-1">{helperText}</p>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// AdminTextarea
// ---------------------------------------------------------------------------
interface AdminTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  helperText?: string
  monospace?: boolean
}

export function AdminTextarea({ label, helperText, monospace, id, className, ...props }: AdminTextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-")
  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={3}
        className={`w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm resize-y ${monospace ? "font-mono text-xs" : ""} ${className || ""}`}
        {...props}
      />
      {helperText && <p className="text-xs text-muted-foreground mt-1">{helperText}</p>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ToggleSwitch
// ---------------------------------------------------------------------------
interface ToggleSwitchProps {
  label: string
  enabled: boolean
  onChange: (enabled: boolean) => void
}

export function ToggleSwitch({ label, enabled, onChange }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={label}
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
          enabled ? "bg-primary-600" : "bg-secondary-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// SaveButton
// ---------------------------------------------------------------------------
interface SaveButtonProps {
  onClick: () => void
  loading?: boolean
  label?: string
}

export function SaveButton({ onClick, loading = false, label = "Save Changes" }: SaveButtonProps) {
  return (
    <div className="flex justify-end pt-4">
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-primary"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Saving...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {label}
          </>
        )}
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// AdminSelect
// ---------------------------------------------------------------------------
interface AdminSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  helperText?: string
  options: { value: string; label: string }[]
}

export function AdminSelect({ label, helperText, options, id, className, ...props }: AdminSelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-")
  return (
    <div>
      <label htmlFor={selectId} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      <select
        id={selectId}
        className={`w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm ${className || ""}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helperText && <p className="text-xs text-muted-foreground mt-1">{helperText}</p>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ConfirmModal
// ---------------------------------------------------------------------------
interface ConfirmModalProps {
  open: boolean
  title: string
  message: string
  confirmLabel?: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({ open, title, message, confirmLabel = "Delete", onConfirm, onCancel }: ConfirmModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onCancel} aria-hidden="true" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl border border-border p-6 w-full max-w-md mx-4 animate-scale-in"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-error/10 text-error flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 id="confirm-title" className="text-lg font-heading font-semibold text-foreground">{title}</h3>
        </div>
        <p id="confirm-message" className="text-sm text-muted-foreground mb-6 ml-[52px]">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-error text-white text-sm font-medium hover:bg-error/90 transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

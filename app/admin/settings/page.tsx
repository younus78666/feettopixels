"use client"

import { useState, useEffect } from "react"
import { AdminCard, AdminInput, AdminTextarea, SaveButton, Toast, useToast } from "@/components/admin/AdminFormComponents"

interface SiteSettings {
  basic: {
    businessName: string
    tagline: string
    description: string
    websiteUrl: string
  }
  contact: {
    phone: string
    email: string
  }
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  businessHours: string
  socialLinks: {
    linkedin: string
    twitter: string
    facebook: string
    github: string
    instagram: string
    youtube: string
  }
}

const defaultSettings: SiteSettings = {
  basic: { businessName: "", tagline: "", description: "", websiteUrl: "" },
  contact: { phone: "", email: "" },
  address: { street: "", city: "", state: "", zip: "", country: "" },
  businessHours: "",
  socialLinks: { linkedin: "", twitter: "", facebook: "", github: "", instagram: "", youtube: "" },
}

const socialPlatforms: { key: keyof SiteSettings["socialLinks"]; label: string; placeholder: string }[] = [
  { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/company/yourbusiness" },
  { key: "twitter", label: "Twitter / X", placeholder: "https://twitter.com/yourbusiness" },
  { key: "facebook", label: "Facebook", placeholder: "https://facebook.com/yourbusiness" },
  { key: "github", label: "GitHub", placeholder: "https://github.com/yourbusiness" },
  { key: "instagram", label: "Instagram", placeholder: "https://instagram.com/yourbusiness" },
  { key: "youtube", label: "YouTube", placeholder: "https://youtube.com/@yourbusiness" },
]

export default function SiteSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { toast, showToast, clearToast } = useToast()

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/config")
        if (res.ok) {
          const data = await res.json()
          if (data.settings) {
            setSettings((prev) => ({
              basic: { ...prev.basic, ...data.settings.basic },
              contact: { ...prev.contact, ...data.settings.contact },
              address: { ...prev.address, ...data.settings.address },
              businessHours: data.settings.businessHours || "",
              socialLinks: { ...prev.socialLinks, ...data.settings.socialLinks },
            }))
          }
        }
      } catch {
        showToast("Failed to load settings", "error")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [showToast])

  const updateBasic = (field: keyof SiteSettings["basic"], value: string) => {
    setSettings((prev) => ({ ...prev, basic: { ...prev.basic, [field]: value } }))
  }

  const updateContact = (field: keyof SiteSettings["contact"], value: string) => {
    setSettings((prev) => ({ ...prev, contact: { ...prev.contact, [field]: value } }))
  }

  const updateAddress = (field: keyof SiteSettings["address"], value: string) => {
    setSettings((prev) => ({ ...prev, address: { ...prev.address, [field]: value } }))
  }

  const updateSocial = (field: keyof SiteSettings["socialLinks"], value: string) => {
    setSettings((prev) => ({ ...prev, socialLinks: { ...prev.socialLinks, [field]: value } }))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch("/api/admin/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: "settings", data: settings }),
      })
      if (res.ok) {
        showToast("Site settings saved successfully", "success")
      } else {
        showToast("Failed to save settings", "error")
      }
    } catch {
      showToast("An error occurred while saving", "error")
    } finally {
      setSaving(false)
    }
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
        <h1 className="text-2xl font-heading font-bold text-foreground">Site Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your site&apos;s core information. These settings override the default values in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">content/site-config.ts</code>.
        </p>
      </div>

      {/* Basic Info */}
      <AdminCard
        title="Basic Information"
        description="Your business identity and branding details."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        }
      >
        <AdminInput
          label="Business Name"
          placeholder="Your Business Name"
          value={settings.basic.businessName}
          onChange={(e) => updateBasic("businessName", e.target.value)}
        />
        <AdminInput
          label="Tagline"
          placeholder="A short tagline for your business"
          value={settings.basic.tagline}
          onChange={(e) => updateBasic("tagline", e.target.value)}
        />
        <AdminTextarea
          label="Description"
          placeholder="Describe your business in a few sentences..."
          value={settings.basic.description}
          onChange={(e) => updateBasic("description", e.target.value)}
        />
        <AdminInput
          label="Website URL"
          placeholder="https://www.yourbusiness.com"
          type="url"
          value={settings.basic.websiteUrl}
          onChange={(e) => updateBasic("websiteUrl", e.target.value)}
        />
      </AdminCard>

      {/* Contact */}
      <AdminCard
        title="Contact Information"
        description="How customers can reach you."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        }
      >
        <AdminInput
          label="Phone Number"
          placeholder="+1 (555) 123-4567"
          type="tel"
          value={settings.contact.phone}
          onChange={(e) => updateContact("phone", e.target.value)}
        />
        <AdminInput
          label="Email Address"
          placeholder="contact@yourbusiness.com"
          type="email"
          value={settings.contact.email}
          onChange={(e) => updateContact("email", e.target.value)}
        />
      </AdminCard>

      {/* Address */}
      <AdminCard
        title="Address"
        description="Your physical business location."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      >
        <AdminInput
          label="Street Address"
          placeholder="123 Main Street"
          value={settings.address.street}
          onChange={(e) => updateAddress("street", e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <AdminInput
            label="City"
            placeholder="New York"
            value={settings.address.city}
            onChange={(e) => updateAddress("city", e.target.value)}
          />
          <AdminInput
            label="State / Province"
            placeholder="NY"
            value={settings.address.state}
            onChange={(e) => updateAddress("state", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AdminInput
            label="Zip / Postal Code"
            placeholder="10001"
            value={settings.address.zip}
            onChange={(e) => updateAddress("zip", e.target.value)}
          />
          <AdminInput
            label="Country"
            placeholder="United States"
            value={settings.address.country}
            onChange={(e) => updateAddress("country", e.target.value)}
          />
        </div>
      </AdminCard>

      {/* Business Hours */}
      <AdminCard
        title="Business Hours"
        description="When your business is open for customers."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        <AdminInput
          label="Hours"
          placeholder="Mon-Fri: 9AM-5PM, Sat: 10AM-2PM"
          helperText="Enter your business hours in any readable format"
          value={settings.businessHours}
          onChange={(e) => setSettings((prev) => ({ ...prev, businessHours: e.target.value }))}
        />
      </AdminCard>

      {/* Social Links */}
      <AdminCard
        title="Social Links"
        description="Links to your social media profiles displayed on the website."
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        }
      >
        {socialPlatforms.map(({ key, label, placeholder }) => (
          <AdminInput
            key={key}
            label={label}
            placeholder={placeholder}
            type="url"
            value={settings.socialLinks[key]}
            onChange={(e) => updateSocial(key, e.target.value)}
          />
        ))}
      </AdminCard>

      <SaveButton onClick={handleSave} loading={saving} />
    </div>
  )
}

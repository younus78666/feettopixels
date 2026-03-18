import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { AdminTopbar } from "@/components/admin/AdminTopbar"

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin Dashboard",
  },
  description: "FeetToPixels Admin Dashboard",
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-secondary-50 font-body">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="lg:pl-64">
        <AdminTopbar />
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

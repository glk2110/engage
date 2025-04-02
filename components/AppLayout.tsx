"use client"

import { LeftNavigation } from "./LeftNavigation"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftNavigation />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
} 
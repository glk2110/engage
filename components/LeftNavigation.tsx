"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  Heart,
  Users,
  TrendingUp,
  Award,
  Settings,
  Home,
  FileText,
  LayoutTemplate,
  UsersRound,
  Shield
} from "lucide-react"
import Image from "next/image"

export function LeftNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Engagement",
      href: "/engagement",
      icon: Heart,
    },
    {
      name: "Performance",
      href: "/performance",
      icon: TrendingUp,
    },
    {
      name: "Recognition",
      href: "/recognition",
      icon: Award,
    },
    {
      name: "Leadership",
      href: "/leadership",
      icon: Shield,
    },
    {
      name: "Teams",
      href: "/teams",
      icon: UsersRound,
    },
  ]

  return (
    <div className="h-full w-64 border-r flex flex-col bg-background/80 backdrop-blur">
      <div className="h-16 flex items-center px-4 border-b">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image src="/icon.png" alt="Pulse Logo" width={24} height={24} className="h-6 w-6" />
          <span className="font-bold text-xl text-gradient">Pulse</span>
        </Link>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-all ${pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted"
                  }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-foreground/60 hover:text-foreground hover:bg-muted transition-all cursor-pointer">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}
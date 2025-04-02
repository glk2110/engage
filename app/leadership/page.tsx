"use client"

import AppLayout from "@/components/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Users, Activity, BarChart4, ArrowUp, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LeadershipPage() {
  const leadershipOptions = [
    {
      title: "Upward Feedback",
      description: "Provide structured feedback to your manager and leadership team",
      icon: ArrowUp,
      href: "#",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "360 Review",
      description: "Comprehensive feedback from peers, direct reports, and managers",
      icon: RefreshCw,
      href: "#",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Skip Level Feedback",
      description: "Connect with your manager's manager for direct feedback and insights",
      icon: Users,
      href: "#",
      color: "bg-green-500/10 text-green-500"
    }
  ]

  return (
    <AppLayout>
      <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <header className="border-b px-6 py-4 bg-background/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Leadership Development</h1>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-8">
              Our leadership tools help managers and leaders at all levels grow and develop through structured feedback and review processes.
            </p>

            <div className="grid gap-6">
              {leadershipOptions.map((option) => (
                <Link href={option.href} key={option.title} className="block">
                  <Card className="transition-all hover:shadow-md hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${option.color}`}>
                          <option.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{option.title}</h3>
                          <p className="text-muted-foreground">{option.description}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground self-center" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  )
} 
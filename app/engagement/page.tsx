"use client"

import AppLayout from "@/components/AppLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileQuestion,
  Zap,
  MessageSquare,
  Activity,
  Users,
  LogOut,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface EngagementTile {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  status?: string;
  statusColor?: string;
}

export default function EngagementPage() {
  const engagementTiles: EngagementTile[] = [
    {
      title: "Deep Dive",
      description: "Long form, deep-dive engagement surveys based on best practices",
      icon: <FileQuestion className="h-5 w-5 text-primary" />,
      href: "/engagement/create",
      status: "Last run: 3 weeks ago",
    },
    {
      title: "Pulse",
      description: "Ask questions & follow up over time to track trends",
      icon: <Activity className="h-5 w-5 text-primary" />,
      href: "/engagement/create",
      status: "Next check: Tomorrow",
      statusColor: "bg-primary",
    },
    {
      title: "Anonymous Suggestion Box",
      description: "Safe space for employees to share feedback and ideas",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      href: "/engagement/create",
      status: "4 new submissions",
      statusColor: "bg-yellow-500",
    },
    {
      title: "Workload & Burnout Audits",
      description: "Identify teams with high workload and burnout risk",
      icon: <Activity className="h-5 w-5 text-primary" />,
      href: "/engagement/create",
      status: "2 teams at risk",
      statusColor: "bg-red-500",
    },
    {
      title: "New Hire Surveys",
      description: "Gather feedback from recent hires on their onboarding experience",
      icon: <Users className="h-5 w-5 text-primary" />,
      href: "/engagement/create",
      status: "3 pending responses",
    },
    {
      title: "Exit Interviews / Surveys",
      description: "Learn why employees leave and how to improve retention",
      icon: <LogOut className="h-5 w-5 text-primary" />,
      href: "/engagement/create",
      status: "Last exit: 2 days ago",
    },
  ]

  return (
    <AppLayout>
      <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <header className="border-b px-6 py-4 bg-background/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Engagement</h1>
            <div className="flex items-center gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 transition-all">
                <Zap className="h-4 w-4 mr-2" />
                Create New Survey
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">Measure and track employee engagement through various survey tools and feedback mechanisms.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engagementTiles.map((tile, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      {tile.icon}
                    </div>
                    {tile.status && (
                      <Badge className={`${tile.statusColor ? tile.statusColor : 'bg-muted'} text-white`}>
                        {tile.status}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4">{tile.title}</CardTitle>
                  <CardDescription>{tile.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={tile.href} className="w-full">
                    <Button variant="outline" className="w-full justify-between hover:bg-primary/10 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </AppLayout>
  )
} 
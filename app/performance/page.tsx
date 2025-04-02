"use client"

import AppLayout from "@/components/AppLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Briefcase,
  TrendingUp,
  MessageSquare,
  Star,
  Users,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PerformanceTile {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  status?: string;
  statusColor?: string;
}

export default function PerformancePage() {
  const performanceTiles: PerformanceTile[] = [
    {
      title: "Performance Reviews",
      description: "Comprehensive review process for evaluating employee performance",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      href: "/performance/reviews",
      status: "Q2 review cycle: Active",
      statusColor: "bg-primary",
    },
    {
      title: "360 Review",
      description: "Gather feedback from peers, managers, and direct reports",
      icon: <Users className="h-5 w-5 text-primary" />,
      href: "/performance/360-review",
      status: "67% Complete",
      statusColor: "bg-yellow-500",
    },
    {
      title: "Micro Feedback",
      description: "Quick, targeted feedback for continuous improvement",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      href: "/performance/micro-feedback",
      status: "24 this week",
    },
    {
      title: "Leadership",
      description: "Assess and develop leadership capabilities within your organization",
      icon: <Star className="h-5 w-5 text-primary" />,
      href: "/performance/leadership",
      status: "12 leaders assessed",
    },
    {
      title: "Upward Feedback",
      description: "Collect feedback from team members about their managers",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      href: "/performance/upward-feedback",
      status: "Next round: 2 weeks",
      statusColor: "bg-blue-500",
    },
    {
      title: "Skip Level Feedback",
      description: "Connect executives with employees beyond direct reports",
      icon: <Users className="h-5 w-5 text-primary" />,
      href: "/performance/skip-level",
      status: "3 sessions scheduled",
    },
  ]

  return (
    <AppLayout>
      <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <header className="border-b px-6 py-4 bg-background/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Performance</h1>
            <div className="flex items-center gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 transition-all">
                <TrendingUp className="h-4 w-4 mr-2" />
                Start Review Cycle
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">Track and improve employee performance through structured reviews and feedback systems.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {performanceTiles.map((tile, index) => (
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
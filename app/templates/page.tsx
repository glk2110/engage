"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Copy, Plus, Star,
  Sparkles, Users, Wand2, Zap, Clock,
  Award
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TemplatesPage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Used for staggered animations
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <header className="sticky top-0 z-40 w-full border-b backdrop-blur bg-background/50">
        <div className="container flex h-16 items-center px-4 md:px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-semibold group">
            <Image src="/icon.png" alt="Pulse Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-gradient text-xl font-bold">Pulse</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/surveys" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
              Surveys
            </Link>
            <Link href="/templates" className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors">
              Templates
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
              Teams
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-8 lg:py-12 relative">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-slideInUp">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Survey Templates</h1>
                <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
            <Button className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 animate-pulse">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Plus className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">Create Template</span>
            </Button>
          </div>

          <div className="flex justify-between items-center animate-slideInUp mb-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-background/50 backdrop-blur">
                <Sparkles className="h-3 w-3 text-primary mr-1" />
                <span>Quick start</span>
              </Badge>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              className={`border-primary border-2 card-hover relative overflow-hidden animate-slideInUp ${mounted ? 'opacity-100' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredCard('engagement')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <CardTitle>Employee Engagement Survey</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <CardDescription>Our recommended engagement survey based on proven research</CardDescription>
                <Badge className="w-fit mt-2 animate-pulse bg-primary text-primary-foreground">Recommended</Badge>
              </CardHeader>
              <CardContent className="pb-3 relative">
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <p>6 questions • 2-3 min to complete</p>
                  </div>
                  <p className="mt-2">
                    Measures role clarity, recognition, collaboration, manager support, growth opportunities, and
                    overall satisfaction.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0 relative mt-auto">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all">
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </Button>
                <Link href="/surveys/create">
                  <Button size="sm" className="bg-primary hover:bg-primary/80 transition-all">Use Template</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card
              className={`card-hover relative overflow-hidden animate-slideInUp ${mounted ? 'opacity-100' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredCard('manager')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <CardTitle>Manager Effectiveness</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <CardDescription>Evaluate manager performance and leadership skills</CardDescription>
              </CardHeader>
              <CardContent className="pb-3 relative">
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <p>8 questions • 3-4 min to complete</p>
                  </div>
                  <p className="mt-2">
                    Measures communication, feedback quality, support, development opportunities, and leadership.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0 relative mt-auto">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all">
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-primary/10 hover:border-primary transition-all">
                  Use Template
                </Button>
              </CardFooter>
            </Card>

            <Card
              className={`card-hover relative overflow-hidden animate-slideInUp ${mounted ? 'opacity-100' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredCard('pulse')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-3 relative">
                <div className="flex items-center justify-between">
                  <CardTitle>Pulse Check</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <CardDescription>Quick weekly check-in on team morale and workload</CardDescription>
              </CardHeader>
              <CardContent className="pb-3 relative">
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <p>3 questions • 1 min to complete</p>
                  </div>
                  <p className="mt-2">Measures current workload, team morale, and blockers.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0 relative mt-auto">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all">
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-primary/10 hover:border-primary transition-all">
                  Use Template
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/20 via-primary/5 to-accent/10 p-6 rounded-xl backdrop-blur-sm border border-primary/20 animate-slideInUp bg-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1 space-y-2">
                <Badge variant="outline" className="bg-background/50 backdrop-blur">
                  <Award className="h-3 w-3 text-primary mr-1" />
                  <span>Pro Feature</span>
                </Badge>
                <h3 className="text-xl font-bold">Custom Template Builder</h3>
                <p className="text-muted-foreground">Create your own survey templates tailored to your organization's specific needs.</p>
              </div>
              <Button size="lg" className="animate-pulse">
                Try Template Builder
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 
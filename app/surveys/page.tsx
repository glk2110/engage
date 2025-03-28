"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft, Calendar, Clock, Copy, Edit, MessageSquare, Plus, Trash2,
  Sparkles, Star, TrendingUp, Award, LineChart, BarChart, CheckCircle2,
  Users, Wand2, Zap
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SurveysPage() {
  const [activeTab, setActiveTab] = useState("templates")
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
            <MessageSquare className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-gradient">Pulse</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
              Dashboard
            </Link>
            <Link href="/surveys" className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors">
              Surveys
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
              Teams
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-8 lg:py-12 relative">
        {/* Decorative background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-slideInUp">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10 transition-all">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Surveys</h1>
                <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 animate-pulse">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
            {activeTab === "active" && (
              <Link href="/surveys/create">
                <Button className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 animate-pulse">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Plus className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">New Survey</span>
                </Button>
              </Link>
            )}
            {activeTab === "templates" && (
              <Button className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 animate-pulse">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Plus className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Create Template</span>
              </Button>
            )}
          </div>

          <Tabs defaultValue="templates" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8 animate-glow glass overflow-hidden">
              <TabsTrigger value="templates" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <div className="flex items-center gap-2">
                  <Wand2 className="h-4 w-4" />
                  <span>Templates</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="active" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Active Surveys</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="completed" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Completed</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="templates" className="space-y-6">
              <div className="flex justify-between items-center animate-slideInUp">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Survey Templates</h2>
                  <Badge variant="outline" className="bg-background/50 backdrop-blur">
                    <Sparkles className="h-3 w-3 text-primary mr-1" />
                    <span>Quick start</span>
                  </Badge>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card
                  className={`card-hover glass border-2 border-primary/50 relative overflow-hidden animate-slideInUp ${mounted ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: "0.1s", transitionDelay: "0.1s" }}
                  onMouseEnter={() => setHoveredCard('engagement')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transition-opacity duration-500 ${hoveredCard === 'engagement' ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>

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
                  <CardFooter className="flex justify-between pt-0 relative">
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
                  className={`card-hover glass relative overflow-hidden animate-slideInUp ${mounted ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}
                  onMouseEnter={() => setHoveredCard('manager')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transition-opacity duration-500 ${hoveredCard === 'manager' ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>

                  <CardHeader className="pb-3 relative">
                    <div className="flex items-center justify-between">
                      <CardTitle>Manager Effectiveness</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-float">
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
                  <CardFooter className="flex justify-between pt-0 relative">
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
                  className={`card-hover glass relative overflow-hidden animate-slideInUp ${mounted ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: "0.3s", transitionDelay: "0.3s" }}
                  onMouseEnter={() => setHoveredCard('pulse')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transition-opacity duration-500 ${hoveredCard === 'pulse' ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>

                  <CardHeader className="pb-3 relative">
                    <div className="flex items-center justify-between">
                      <CardTitle>Pulse Check</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-slow">
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
                  <CardFooter className="flex justify-between pt-0 relative">
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

              <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-6 rounded-xl backdrop-blur-sm border border-primary/20 animate-slideInUp">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1 space-y-2">
                    <Badge variant="outline" className="bg-background/50 backdrop-blur">
                      <Award className="h-3 w-3 text-primary mr-1" />
                      <span>Pro Feature</span>
                    </Badge>
                    <h3 className="text-xl font-bold">Custom Template Builder</h3>
                    <p className="text-muted-foreground">Create your own survey templates tailored to your organization's specific needs.</p>
                  </div>
                  <Button variant="gradient" size="lg" className="animate-pulse">
                    Try Template Builder
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-6">
              <div className="flex justify-between items-center animate-slideInUp">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Active Surveys</h2>
                  <Badge variant="outline" className="bg-background/50 backdrop-blur">
                    <Sparkles className="h-3 w-3 text-primary mr-1" />
                    <span>In progress</span>
                  </Badge>
                </div>
              </div>

              <Card className="card-hover glass animate-slideInUp relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CardTitle>Q2 Engagement Survey</CardTitle>
                      <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                        <TrendingUp className="h-3 w-3 text-primary" />
                      </div>
                    </div>
                    <Badge className="bg-green-500/80 backdrop-blur animate-pulse">Active</Badge>
                  </div>
                  <CardDescription>Engineering and Product teams</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 text-sm">
                      <div className="flex items-center px-3 py-2 rounded-md bg-background/50 backdrop-blur">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>Started: June 1, 2023</span>
                      </div>
                      <div className="flex items-center px-3 py-2 rounded-md bg-background/50 backdrop-blur">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        <span>Due: June 15, 2023</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Participation Rate</span>
                        <span className="font-medium text-gradient">68%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "68%" }}></div>
                      </div>
                      <div className="text-xs text-muted-foreground">17 of 25 participants completed</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                        <Users className="h-3 w-3 mr-1 text-primary" />
                        <span>Engineering</span>
                      </div>
                      <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                        <Users className="h-3 w-3 mr-1 text-primary" />
                        <span>Product</span>
                      </div>
                      <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1 text-primary" />
                        <span>6 questions</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 transition-all">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Link href="/dashboard">
                    <Button size="sm" className="bg-primary hover:bg-primary/80 transition-all">View Results</Button>
                  </Link>
                </CardFooter>
              </Card>

              <div className="text-center py-8 animate-slideInUp">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-background/50 mb-4 animate-float">
                  <Plus className="h-10 w-10 text-primary/70" />
                </div>
                <h3 className="text-xl font-medium mb-2">Start a New Survey</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Launch a new survey to gather valuable feedback from your team and drive impactful decisions.
                </p>
                <Link href="/surveys/create">
                  <Button variant="gradient" size="lg" className="animate-pulse">Create New Survey</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="flex justify-between items-center animate-slideInUp">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Completed Surveys</h2>
                  <Badge variant="outline" className="bg-background/50 backdrop-blur">
                    <CheckCircle2 className="h-3 w-3 text-primary mr-1" />
                    <span>Past results</span>
                  </Badge>
                </div>
              </div>

              <Card className="card-hover glass animate-slideInUp relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CardTitle>Q1 Engagement Survey</CardTitle>
                      <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                        <LineChart className="h-3 w-3 text-primary" />
                      </div>
                    </div>
                    <Badge variant="outline" className="backdrop-blur">Completed</Badge>
                  </div>
                  <CardDescription>All departments</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 text-sm">
                      <div className="flex items-center px-3 py-2 rounded-md bg-background/50 backdrop-blur">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>March 1 - March 15, 2023</span>
                      </div>
                      <div className="flex items-center px-3 py-2 rounded-md bg-background/50 backdrop-blur">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        <span className="font-medium">92% participation</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                        <Users className="h-3 w-3 mr-1 text-primary" />
                        <span>All teams</span>
                      </div>
                      <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                        <BarChart className="h-3 w-3 mr-1 text-primary" />
                        <span>Full analysis available</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div className="bg-background/50 p-3 rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Engagement</div>
                        <div className="text-xl font-bold text-gradient">3.8</div>
                        <div className="text-xs text-muted-foreground mt-1">+0.2</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Responses</div>
                        <div className="text-xl font-bold text-gradient">46</div>
                        <div className="text-xs text-muted-foreground mt-1">92%</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Questions</div>
                        <div className="text-xl font-bold text-gradient">6</div>
                        <div className="text-xs text-muted-foreground mt-1">Standard</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" className="hover:bg-destructive/10 hover:text-destructive transition-all">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <Link href="/dashboard">
                    <Button size="sm" className="bg-primary hover:bg-primary/80 transition-all">View Results</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}


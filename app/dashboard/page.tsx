"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Calendar, ChevronDown, Download, MessageSquare, Users, Sparkles, Star, TrendingUp } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"

export default function DashboardPage() {
  const [date, setDate] = useState<Date>()
  const [mounted, setMounted] = useState(false)

  // Used for staggered animations
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b backdrop-blur bg-background/50">
        <div className="container flex h-16 items-center px-4 md:px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-semibold group">
            <MessageSquare className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-gradient">Pulse</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors">
              Dashboard
            </Link>
            <Link href="/surveys" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
              Surveys
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
              Teams
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-8 lg:py-12 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-slideInUp">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10 transition-all">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Q2 Engagement Survey Results</h1>
                <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 animate-pulse">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[240px] justify-start text-left font-normal hover:bg-primary/10 transition-all">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    {date ? date.toDateString() : "June 1 - June 15, 2023"}
                    <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 glass" align="end">
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-all">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download report</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className={`card-hover animate-slideInUp glass ${mounted ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.1s", transitionDelay: "0.1s" }}>
              <CardHeader className="pb-2">
                <CardDescription>Participation Rate</CardDescription>
                <CardTitle className="text-3xl">
                  <span className="text-gradient">68%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">17 of 25 participants completed</div>
                <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "68%" }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className={`card-hover animate-slideInUp glass ${mounted ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.2s", transitionDelay: "0.2s" }}>
              <CardHeader className="pb-2">
                <CardDescription>Overall Satisfaction</CardDescription>
                <CardTitle className="text-3xl">
                  <span className="text-gradient">3.8/5</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+0.3 from previous survey</div>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-2 w-full bg-primary rounded-full"></div>
                  ))}
                  <div className="h-2 w-full bg-primary/40 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
            <Card className={`card-hover animate-slideInUp glass ${mounted ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.3s", transitionDelay: "0.3s" }}>
              <CardHeader className="pb-2">
                <CardDescription>Manager Support</CardDescription>
                <CardTitle className="text-3xl">
                  <span className="text-gradient">4.2/5</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+0.5 from previous survey</div>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-2 w-full bg-primary rounded-full"></div>
                  ))}
                  <div className="h-2 w-full bg-primary/60 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
            <Card className={`card-hover animate-slideInUp glass ${mounted ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.4s", transitionDelay: "0.4s" }}>
              <CardHeader className="pb-2">
                <CardDescription>Role Clarity</CardDescription>
                <CardTitle className="text-3xl">
                  <span className="text-gradient">3.5/5</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">-0.2 from previous survey</div>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 w-full bg-primary rounded-full"></div>
                  ))}
                  <div className="h-2 w-full bg-primary/50 rounded-full"></div>
                  <div className="h-2 w-full bg-muted rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 animate-glow glass overflow-hidden">
              <TabsTrigger value="overview" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Overview</TabsTrigger>
              <TabsTrigger value="insights" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Insights</TabsTrigger>
              <TabsTrigger value="actions" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Action Items</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="card-hover glass animate-slideInLeft">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Engagement Trends</CardTitle>
                        <CardDescription>Overall engagement score over time</CardDescription>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      className="aspect-[4/3]"
                      data={[
                        { name: "Jan", value: 3.2 },
                        { name: "Feb", value: 3.4 },
                        { name: "Mar", value: 3.5 },
                        { name: "Apr", value: 3.6 },
                        { name: "May", value: 3.5 },
                        { name: "Jun", value: 3.8 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["var(--primary)"]}
                      valueFormatter={(value) => `${value}/5`}
                      showLegend={false}
                      showXAxis
                      showYAxis
                      showGridLines
                      showAnimation
                    />
                  </CardContent>
                </Card>

                <Card className="card-hover glass animate-slideInRight">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Question Breakdown</CardTitle>
                        <CardDescription>Average score by question category</CardDescription>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-float">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      className="aspect-[4/3]"
                      data={[
                        { name: "Role Clarity", value: 3.5 },
                        { name: "Recognition", value: 3.7 },
                        { name: "Collaboration", value: 4.0 },
                        { name: "Manager Support", value: 4.2 },
                        { name: "Growth", value: 3.4 },
                        { name: "Satisfaction", value: 3.8 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["var(--primary)"]}
                      valueFormatter={(value) => `${value}/5`}
                      showLegend={false}
                      showXAxis
                      showYAxis
                      showGridLines
                      showAnimation
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="card-hover glass animate-slideInUp">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recognition Distribution</CardTitle>
                      <CardDescription>
                        Have you received meaningful recognition for your work in the past week?
                      </CardDescription>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-slow">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-[300px]">
                    <PieChart
                      className="aspect-square"
                      data={[
                        { name: "Yes", value: 11 },
                        { name: "No", value: 6 },
                      ]}
                      category="value"
                      index="name"
                      colors={["var(--primary)", "var(--muted)"]}
                      valueFormatter={(value) => `${value} responses`}
                      showAnimation
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover glass animate-slideInUp">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Team Comparison</CardTitle>
                      <CardDescription>Average engagement score by team</CardDescription>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <BarChart
                    className="aspect-[16/9]"
                    data={[
                      { name: "Engineering", value: 3.9 },
                      { name: "Product", value: 3.7 },
                      { name: "Design", value: 4.1 },
                      { name: "Marketing", value: 3.5 },
                      { name: "Sales", value: 3.8 },
                    ]}
                    categories={["value"]}
                    index="name"
                    colors={["var(--primary)"]}
                    valueFormatter={(value) => `${value}/5`}
                    showLegend={false}
                    showXAxis
                    showYAxis
                    showGridLines
                    showAnimation
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>AI-generated insights based on survey responses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Role Clarity Needs Improvement</h3>
                    <p className="text-muted-foreground">
                      Role clarity scores have decreased by 0.2 points since the last survey. 65% of respondents
                      mentioned that priorities shift frequently without clear communication.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Strong Manager Support</h3>
                    <p className="text-muted-foreground">
                      Manager support scores are high at 4.2/5, with 82% of respondents feeling their manager is
                      accessible and helpful. This is a 0.5 point improvement from the previous survey.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Growth Opportunities Gap</h3>
                    <p className="text-muted-foreground">
                      Only 58% of employees feel they have opportunities to learn and grow in their current role. This
                      is particularly pronounced in the Marketing team (3.1/5).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Analysis</CardTitle>
                  <CardDescription>Analysis of open-ended responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Positive Themes</h3>
                        <span className="text-sm text-green-500">64%</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          Team collaboration
                        </div>
                        <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          Supportive management
                        </div>
                        <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          Work-life balance
                        </div>
                        <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          Company culture
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Negative Themes</h3>
                        <span className="text-sm text-red-500">36%</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">Unclear priorities</div>
                        <div className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                          Limited career growth
                        </div>
                        <div className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">Communication gaps</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                  <CardDescription>AI-generated action items based on survey results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        1
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Improve Role Clarity</h3>
                        <p className="text-sm text-muted-foreground">
                          Schedule team meetings to review and clarify roles, responsibilities, and priorities. Create a
                          shared document outlining key responsibilities for each role.
                        </p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm">
                            Add to Action Plan
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        2
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Enhance Growth Opportunities</h3>
                        <p className="text-sm text-muted-foreground">
                          Implement a learning and development program with dedicated time for skill development. Create
                          a mentorship program to connect employees with senior team members.
                        </p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm">
                            Add to Action Plan
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        3
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Strengthen Recognition Practices</h3>
                        <p className="text-sm text-muted-foreground">
                          Implement a peer recognition program to encourage team members to acknowledge each other's
                          contributions. Schedule regular 1:1s focused on providing meaningful feedback.
                        </p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm">
                            Add to Action Plan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Action Plan</CardTitle>
                  <CardDescription>Track progress on your action items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-6">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">No actions added yet</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Add recommended actions or create your own to start building your action plan.
                    </p>
                    <Button className="mt-4">Create Custom Action</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Link href="/surveys">
                  <Button>
                    Back to Surveys
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}


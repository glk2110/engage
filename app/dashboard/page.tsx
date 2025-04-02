"use client"

import AppLayout from "@/components/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  BarChart,
  Heart,
  TrendingDown,
  TrendingUp,
  Users,
  Sparkles,
  Star,
  Zap,
  Calendar,
  Clock,
  Copy,
  Edit,
  Plus,
  Trash2,
  CheckCircle2,
  Wand2,
  SendHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart as BarChartComponent, LineChart, PieChart } from "@/components/ui/chart"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("summary")
  const [surveysTab, setSurveysTab] = useState("active")
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Used for staggered animations and setting tab from URL
  useEffect(() => {
    setMounted(true)

    // Check if the URL has a tab parameter and set the active tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam && ['summary', 'sparkline', 'surveys'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [])

  const chartData = {
    data: [
      { name: "Jan", value: 65 },
      { name: "Feb", value: 63 },
      { name: "Mar", value: 68 },
      { name: "Apr", value: 72 },
      { name: "May", value: 75 },
      { name: "Jun", value: 78 },
    ],
    categories: ["value"],
    index: "name",
  }

  const deptChartData = {
    data: [
      { name: "Engineering", value: 82 },
      { name: "Product", value: 78 },
      { name: "Design", value: 85 },
      { name: "Marketing", value: 72 },
      { name: "Sales", value: 68 },
      { name: "Support", value: 76 },
    ],
    categories: ["value"],
    index: "name",
  }

  const turnoverData = {
    data: [
      { name: "Voluntary", value: 8 },
      { name: "Involuntary", value: 3 },
    ],
    category: "value",
    index: "name",
  }

  return (
    <AppLayout>
      <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <header className="border-b px-6 py-4 bg-background/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              {activeTab === "surveys" && (
                <Link href="/engagement/create">
                  <Button className="bg-primary text-white hover:bg-primary/90 transition-all">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Survey
                  </Button>
                </Link>
              )}
              <Button className="bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                <Heart className="h-4 w-4 mr-2" />
                Last Updated: Today, 9:45 AM
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-md flex items-center">
                  <Heart className="h-4 w-4 text-primary mr-2" />
                  eNPS Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gradient">+32</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  Up 8 points from Q1
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-md flex items-center">
                  <TrendingDown className="h-4 w-4 text-primary mr-2" />
                  Turnover Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gradient">11%</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
                  Down 3% from last year
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-md flex items-center">
                  <Users className="h-4 w-4 text-primary mr-2" />
                  Team Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gradient">4.1/5</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  Up 0.3 from last quarter
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-md flex items-center">
                  <Activity className="h-4 w-4 text-primary mr-2" />
                  Manager Effectiveness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gradient">3.9/5</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 text-yellow-500 mr-1" />
                  Up 0.1 from last quarter
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="summary" className="w-full mb-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4 overflow-hidden">
              <TabsTrigger value="summary" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Executive Summary
              </TabsTrigger>
              <TabsTrigger value="sparkline" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Engagement Sparkline
              </TabsTrigger>
              <TabsTrigger value="surveys" className="transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <div className="flex items-center gap-2">
                  <SendHorizontal className="h-4 w-4" />
                  <span>Surveys</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-primary" />
                        Engagement Trend
                      </CardTitle>
                    </div>
                    <CardDescription>Overall engagement score over time</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[250px] w-full">
                      <LineChart data={chartData.data} categories={chartData.categories} index={chartData.index} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-primary" />
                        Turnover Analysis
                      </CardTitle>
                    </div>
                    <CardDescription>Voluntary vs involuntary turnover breakdown</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[250px] w-full">
                      <PieChart data={turnoverData.data} category={turnoverData.category} index={turnoverData.index} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Engagement by Department
                    </CardTitle>
                  </div>
                  <CardDescription>How engaged are different teams within the organization</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-[250px] w-full">
                    <BarChartComponent data={deptChartData.data} categories={deptChartData.categories} index={deptChartData.index} />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Employee Satisfaction Breakdown</CardTitle>
                    <CardDescription>How happy are people with key aspects of their experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">Their Work</div>
                          <div className="text-sm">4.2/5</div>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full">
                          <div className="h-full bg-primary rounded-full" style={{ width: "84%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Employees feel their work is meaningful and impactful</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">Their Team</div>
                          <div className="text-sm">4.4/5</div>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full">
                          <div className="h-full bg-primary rounded-full" style={{ width: "88%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Strong team dynamics and collaboration</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">Their Manager</div>
                          <div className="text-sm">3.9/5</div>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Management effectiveness needs improvement</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">Their Prospects</div>
                          <div className="text-sm">3.7/5</div>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: "74%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Career growth opportunities could be clearer</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">Their Company</div>
                          <div className="text-sm">4.3/5</div>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full">
                          <div className="h-full bg-primary rounded-full" style={{ width: "86%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">Strong belief in company mission and direction</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Exit Interview Insights</CardTitle>
                    <CardDescription>Top reasons employees have left the organization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <span className="font-medium">Career Growth Opportunities</span>
                        </div>
                        <Badge>32%</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <span className="font-medium">Compensation</span>
                        </div>
                        <Badge>27%</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium">3</span>
                          </div>
                          <span className="font-medium">Work-Life Balance</span>
                        </div>
                        <Badge>18%</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium">4</span>
                          </div>
                          <span className="font-medium">Leadership & Management</span>
                        </div>
                        <Badge>15%</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium">5</span>
                          </div>
                          <span className="font-medium">Other Opportunities</span>
                        </div>
                        <Badge>8%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sparkline" className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Engagement Sparkline</CardTitle>
                  <CardDescription>Track engagement trends over time by team and initiative</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <LineChart data={chartData.data} categories={chartData.categories} index={chartData.index} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="surveys" className="space-y-6">
              <Tabs defaultValue="active" className="w-full" value={surveysTab} onValueChange={setSurveysTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8 pb-8.5 animate-glow glass overflow-hidden">
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
                    <CardHeader className="pb-2">
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
                    <CardContent className="py-2">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
                          <div className="flex items-center px-3 py-1.5 rounded-md bg-background/50 backdrop-blur">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>Started: June 1, 2023</span>
                          </div>
                          <div className="flex items-center px-3 py-1.5 rounded-md bg-background/50 backdrop-blur">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>Due: June 15, 2023</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Participation Rate</span>
                            <span className="font-medium">68%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: "68%" }}></div>
                          </div>
                          <div className="text-xs text-muted-foreground">17 of 25 participants completed</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex flex-wrap gap-2">
                            <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                              <Users className="h-3 w-3 mr-1 text-primary" />
                              <span>Engineering</span>
                            </div>
                            <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                              <Users className="h-3 w-3 mr-1 text-primary" />
                              <span>Product</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <div className="flex w-full justify-between">
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <div>
                          <Button variant="outline" size="sm" className="mr-2 hover:bg-primary/10 hover:border-primary transition-all">
                            Send Reminder
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary/80 transition-all">
                            View Results
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="completed" className="space-y-6">
                  <div className="flex justify-between items-center animate-slideInUp">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold">Completed Surveys</h2>
                      <Badge variant="outline" className="bg-background/50 backdrop-blur">
                        <CheckCircle2 className="h-3 w-3 text-primary mr-1" />
                        <span>Past surveys</span>
                      </Badge>
                    </div>
                  </div>

                  <Card className="card-hover glass animate-slideInUp relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CardTitle>Q1 Engagement Survey</CardTitle>
                          <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                            <TrendingUp className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <Badge className="bg-background backdrop-blur">Completed</Badge>
                      </div>
                      <CardDescription>All teams</CardDescription>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
                          <div className="flex items-center px-3 py-1.5 rounded-md bg-background/50 backdrop-blur">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>March 1 - March 15, 2023</span>
                          </div>
                          <div className="flex items-center px-3 py-1.5 rounded-md bg-background/50 backdrop-blur">
                            <Users className="mr-2 h-4 w-4 text-primary" />
                            <span>92% participation</span>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          <p>Overall engagement score: <span className="font-medium text-foreground">76/100</span></p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <div className="flex w-full justify-between">
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all">
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/80 transition-all">
                          View Report
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </AppLayout>
  )
} 
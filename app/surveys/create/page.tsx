"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft, Calendar, Check, ChevronDown, ChevronUp, MessageSquare,
  Plus, Trash2, Users, Sparkles, Star, Zap, FileSpreadsheet,
  MessageCircle, Settings, LucideWand2 as Wand2, Bell, SendHorizontal,
  Lightbulb, Award, CheckCircle2
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"

export default function CreateSurveyPage() {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [mounted, setMounted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = 4

  // Used for staggered animations
  useEffect(() => {
    setMounted(true)
  }, [])

  const questions = [
    {
      id: 1,
      text: "On a scale of 1 to 5, how clearly do you understand what's expected of you at work?",
      type: "scale",
      required: true,
    },
    {
      id: 2,
      text: "Have you received meaningful recognition for your work in the past week?",
      type: "yes/no",
      required: true,
    },
    {
      id: 3,
      text: "On a scale of 1 to 5, how would you rate your team's collaboration and support?",
      type: "scale",
      required: true,
    },
    {
      id: 4,
      text: "On a scale of 1 to 5, how supported do you feel by your manager?",
      type: "scale",
      required: true,
    },
    {
      id: 5,
      text: "Do you feel you have the opportunity to learn and grow in your current role?",
      type: "yes/no",
      required: true,
    },
    {
      id: 6,
      text: "On a scale of 1 to 5, how satisfied are you with your job overall?",
      type: "scale",
      required: true,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/surveys?tab=active")
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const steps = [
    { name: "Details", icon: <FileSpreadsheet className="h-4 w-4" /> },
    { name: "Questions", icon: <MessageCircle className="h-4 w-4" /> },
    { name: "Participants", icon: <Users className="h-4 w-4" /> },
    { name: "Settings", icon: <Settings className="h-4 w-4" /> }
  ]

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
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 animate-slideInUp">
            <div className="flex items-center gap-2">
              <Link href="/surveys">
                <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-primary/10 transition-all">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Create Engagement Survey</h1>
                <div className="hidden md:flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 animate-pulse">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
            <Badge variant="outline" className="w-fit md:ml-auto bg-background/50 backdrop-blur">
              <Wand2 className="h-3 w-3 text-primary mr-1" />
              <span>Engagement Template</span>
            </Badge>
          </div>

          {/* Progress Steps */}
          <div className="mb-8 animate-slideInUp" style={{ animationDelay: "0.1s" }}>
            <div className="grid grid-cols-4 gap-2 w-full glass p-1 rounded-lg">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-center justify-center py-3 rounded-md transition-all ${currentStep === index
                    ? 'bg-primary/20 text-primary'
                    : index < currentStep
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-accent/10'}`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className={`flex items-center justify-center rounded-full h-8 w-8 mb-1 transition-all ${currentStep > index
                    ? 'bg-primary text-primary-foreground'
                    : currentStep === index
                      ? 'bg-primary/20 text-primary animate-pulse'
                      : 'bg-accent/10'
                    }`}>
                    {currentStep > index ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="text-xs font-medium">{step.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep + 1) * 100 / totalSteps}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Survey Details */}
            {currentStep === 0 && (
              <div className="animate-fadeIn">
                <Card className="card-hover glass relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileSpreadsheet className="h-5 w-5 text-primary" />
                          Survey Details
                        </CardTitle>
                        <CardDescription>Configure the basic information for your survey</CardDescription>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 animate-pulse">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 animate-slideInUp" style={{ animationDelay: "0.1s" }}>
                      <div className="relative">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Survey Name <span className="text-sm text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Q2 Engagement Survey"
                          required
                          className="mt-1.5 bg-background/50 backdrop-blur border-primary/20 focus:border-primary transition-all"
                        />
                        <div className="text-xs text-muted-foreground mt-1">A descriptive name helps your team identify the survey purpose</div>
                      </div>
                    </div>

                    <div className="animate-slideInUp" style={{ animationDelay: "0.2s" }}>
                      <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Add a description to help participants understand the purpose of this survey"
                        defaultValue="This survey helps us understand how engaged you feel at work and identify areas where we can improve."
                        className="mt-1.5 min-h-[120px] bg-background/50 backdrop-blur border-primary/20 focus:border-primary transition-all"
                      />
                      <div className="text-xs text-muted-foreground mt-1">Provide context to ensure participants understand why their feedback matters</div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 animate-slideInUp" style={{ animationDelay: "0.3s" }}>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Design Tip</h4>
                          <p className="text-sm text-muted-foreground">Clear instructions and a friendly tone can increase response rates by up to 30%. Consider highlighting how this feedback will lead to concrete actions.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => router.push("/surveys")}
                      className="hover:bg-primary/10 hover:border-primary transition-all"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative z-10">Continue</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* Step 2: Questions */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <Card className="card-hover glass relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5 text-primary" />
                          Questions
                        </CardTitle>
                        <CardDescription>Review and customize your survey questions</CardDescription>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 animate-pulse">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-background/50 backdrop-blur p-3 rounded-lg border border-primary/20 mb-6 animate-slideInUp">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-primary/10">Template</Badge>
                          <span className="text-sm font-medium">Employee Engagement Survey</span>
                        </div>
                        <div className="text-sm text-muted-foreground">6 questions</div>
                      </div>
                    </div>

                    {questions.map((question, index) => (
                      <div
                        key={question.id}
                        className={`space-y-4 animate-slideInUp bg-background/50 backdrop-blur p-4 rounded-lg border border-primary/20 card-hover`}
                        style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
                                {index + 1}
                              </div>
                              <span className="font-medium">{question.required && <span className="text-sm text-red-500">*</span>}</span>
                            </div>
                            <p className="text-base">{question.text}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                                <span>Type: {question.type}</span>
                              </div>
                              {question.required && (
                                <div className="text-xs bg-background/50 px-2 py-1 rounded-full flex items-center">
                                  <span>Required</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" type="button" className="hover:bg-primary/10 transition-colors">
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" type="button" className="hover:bg-primary/10 transition-colors">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" type="button" className="hover:bg-destructive/10 hover:text-destructive transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full mt-4 animate-slideInUp hover:bg-primary/10 hover:border-primary transition-all" style={{ animationDelay: "0.7s" }} type="button">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Question
                    </Button>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={prevStep}
                      className="hover:bg-primary/10 hover:border-primary transition-all"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative z-10">Continue</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* Step 3: Participants */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <Card className="card-hover glass relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          Participants
                        </CardTitle>
                        <CardDescription>Select who should receive this survey</CardDescription>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 animate-pulse">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 animate-slideInUp" style={{ animationDelay: "0.1s" }}>
                      <div>
                        <Label htmlFor="teams" className="text-sm font-medium">Select Teams</Label>
                        <Select defaultValue="engineering">
                          <SelectTrigger id="teams" className="mt-1.5 bg-background/50 backdrop-blur border-primary/20 focus:border-primary transition-all">
                            <SelectValue placeholder="Select teams" />
                          </SelectTrigger>
                          <SelectContent className="bg-background/80 backdrop-blur border-primary/20">
                            <SelectItem value="all">All Teams</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="product">Product</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="text-xs text-muted-foreground mt-1">You can select multiple teams or specific departments</div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-background/50 backdrop-blur animate-slideInUp" style={{ animationDelay: "0.2s" }}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-medium">Participants Selected</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gradient font-bold">25</span>
                          <Button variant="outline" size="sm" type="button" className="hover:bg-primary/10 hover:border-primary transition-all">
                            View All
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="flex items-center p-2 rounded-md bg-background/50 backdrop-blur justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm">Engineering Team</span>
                          </div>
                          <Badge variant="outline">15 members</Badge>
                        </div>
                        <div className="flex items-center p-2 rounded-md bg-background/50 backdrop-blur justify-between animate-pulse">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm">Product Team</span>
                          </div>
                          <Badge variant="outline">10 members</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-primary/20 rounded-lg bg-primary/5 animate-slideInUp" style={{ animationDelay: "0.3s" }}>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Pro Tip</h4>
                          <p className="text-sm text-muted-foreground">For the most accurate results, include a diverse sampling of team members across different roles and tenures.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={prevStep}
                      className="hover:bg-primary/10 hover:border-primary transition-all"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative z-10">Continue</span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* Step 4: Settings */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <Card className="card-hover glass relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Settings className="h-5 w-5 text-primary" />
                          Settings & Schedule
                        </CardTitle>
                        <CardDescription>Configure survey timing and delivery options</CardDescription>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 animate-pulse">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2 animate-slideInUp" style={{ animationDelay: "0.1s" }}>
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal bg-background/50 backdrop-blur border-primary/20 hover:bg-primary/10 hover:border-primary transition-all">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {startDate ? format(startDate, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-background/80 backdrop-blur border-primary/20">
                            <CalendarComponent mode="single" selected={startDate} onSelect={setStartDate} initialFocus className="rounded-md shadow-lg" />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal bg-background/50 backdrop-blur border-primary/20 hover:bg-primary/10 hover:border-primary transition-all">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {endDate ? format(endDate, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-background/80 backdrop-blur border-primary/20">
                            <CalendarComponent mode="single" selected={endDate} onSelect={setEndDate} initialFocus className="rounded-md shadow-lg" />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-background/50 backdrop-blur space-y-4 animate-slideInUp" style={{ animationDelay: "0.2s" }}>
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        Reminders
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm">Send reminder to non-respondents</div>
                            <div className="text-xs text-muted-foreground">Automatically send a reminder halfway through the survey period</div>
                          </div>
                          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm">Send final reminder 24 hours before deadline</div>
                            <div className="text-xs text-muted-foreground">Encourage last-minute participation</div>
                          </div>
                          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-background/50 backdrop-blur space-y-4 animate-slideInUp" style={{ animationDelay: "0.3s" }}>
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <SendHorizontal className="h-4 w-4 text-primary" />
                        Delivery Options
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Slack Delivery</div>
                            <div className="text-xs text-muted-foreground">Send survey questions via Slack</div>
                          </div>
                          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Email Delivery</div>
                            <div className="text-xs text-muted-foreground">Send survey link via email</div>
                          </div>
                          <Switch className="data-[state=checked]:bg-primary" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Anonymous Responses</div>
                            <div className="text-xs text-muted-foreground">Hide respondent identities in results</div>
                          </div>
                          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        type="button"
                        onClick={prevStep}
                        className="hover:bg-primary/10 hover:border-primary transition-all"
                      >
                        Back
                      </Button>
                      <Button
                        variant="outline"
                        type="button"
                        onClick={() => router.push("/surveys")}
                        className="hover:bg-destructive/10 hover:text-destructive transition-all"
                      >
                        Cancel
                      </Button>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        type="button"
                        className="hover:bg-primary/10 hover:border-primary transition-all"
                      >
                        Save as Draft
                      </Button>
                      <Button
                        type="submit"
                        className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 animate-pulse"
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Check className="mr-2 h-4 w-4 relative z-10" />
                        <span className="relative z-10">Launch Survey</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}


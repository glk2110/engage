"use client"

import AppLayout from "@/components/AppLayout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Award,
  Star,
  ArrowRight,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface RecognitionTile {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  status?: string;
  statusColor?: string;
}

export default function RecognitionPage() {
  const recognitionTiles: RecognitionTile[] = [
    {
      title: "Praise",
      description: "Peer-to-peer recognition for everyday wins and contributions",
      icon: <Star className="h-5 w-5 text-primary" />,
      href: "/recognition/praise",
      status: "18 this week",
      statusColor: "bg-primary",
    },
    {
      title: "Employee Awards",
      description: "Formal recognition for exemplary performance and company values",
      icon: <Award className="h-5 w-5 text-primary" />,
      href: "/recognition/awards",
      status: "Quarterly awards: 2 weeks",
      statusColor: "bg-yellow-500",
    },
  ]

  return (
    <AppLayout>
      <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <header className="border-b px-6 py-4 bg-background/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Recognition & Rewards</h1>
            <div className="flex items-center gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 transition-all">
                <Send className="h-4 w-4 mr-2" />
                Send Recognition
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">Celebrate achievements and recognize the contributions of your team members.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {recognitionTiles.map((tile, index) => (
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

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Recent Recognition</h2>
            <div className="space-y-4">
              <Card className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sarah Chen</span>
                        <span className="text-xs text-muted-foreground">recognized</span>
                        <span className="font-medium">John Davis</span>
                      </div>
                      <p className="text-sm mt-1">
                        "Amazing work on the client presentation. Your insights really made a difference!"
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-muted-foreground">2 hours ago</div>
                        <Badge variant="outline">Client Success</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Mike Johnson</span>
                        <span className="text-xs text-muted-foreground">recognized</span>
                        <span className="font-medium">Lisa Wang</span>
                      </div>
                      <p className="text-sm mt-1">
                        "Your leadership during the system outage was exemplary. Thanks for staying calm under pressure."
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-muted-foreground">Yesterday</div>
                        <Badge variant="outline">Leadership</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Alex Rodriguez</span>
                        <span className="text-xs text-muted-foreground">received</span>
                        <span className="font-medium">Innovator Award</span>
                      </div>
                      <p className="text-sm mt-1">
                        "For developing a new approach to customer onboarding that reduced setup time by 30%"
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-muted-foreground">Last week</div>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                          Quarterly Award
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  )
} 
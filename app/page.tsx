import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, Sparkles, Zap, Star, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b backdrop-blur bg-background/50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-2 animate-pulse">
            <Image src="/icon.png" alt="Pulse Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-xl font-bold text-gradient">Pulse</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/surveys" className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-colors">
              Surveys
            </Link>
            <Link href="/templates" className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-colors">
              Templates
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-colors">
              Teams
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex hover:bg-primary/10 transition-all">
              Log In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/80 transition-all animate-pulse">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-30"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 backdrop-blur w-fit">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium">Redefining employee engagement</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Engagement that <span className="text-gradient p-1">works</span> where you do
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our conversational interface lives where people already work, powered by proven HR research, and
                    adapts seamlessly to each team's unique needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/surveys">
                    <Button size="lg" className="gap-1.5 bg-primary hover:bg-primary/80 shadow-lg animate-pulse">
                      See surveys
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/surveys/create">
                    <Button size="lg" variant="outline" className="transition-all hover:bg-primary/10 hover:border-primary">
                      Create a survey
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center animate-slideInRight">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl glass shadow-xl hover:shadow-2xl transition-all transform hover:-rotate-1">
                  <div className="p-4 h-full flex flex-col">
                    <Image src="/hero.png" alt="Pulse Hero" width={500} height={500} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 backdrop-blur w-fit animate-slideInUp">
                <Star className="h-4 w-4 text-accent animate-pulse" />
                <span className="text-sm font-medium">Key Features</span>
              </div>
              <div className="space-y-2 max-w-[800px] mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-slideInUp" style={{ animationDelay: "0.2s" }}>
                  Designed for <span className="text-gradient">real engagement</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slideInUp" style={{ animationDelay: "0.4s" }}>
                  Our platform fits into existing workflows, delivering real-time insights and continuous feedback
                  without adding complexity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 card-hover p-6 rounded-xl border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 animate-pulse">
                  <Image src="/icon.png" alt="Pulse Logo" width={24} height={24} className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Conversational Interface</h3>
                  <p className="text-muted-foreground">
                    Engage employees where they already work with a friendly, chat-based experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 card-hover p-6 rounded-xl border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 animate-float">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Intuitive Dashboard</h3>
                  <p className="text-muted-foreground">
                    Clear visualization of results with actionable insights for managers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 card-hover p-6 rounded-xl border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 animate-bounce-slow">
                  <Image src="/icon.png" alt="Pulse Logo" width={24} height={24} className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Ready-Made Templates</h3>
                  <p className="text-muted-foreground">
                    Start quickly with research-backed survey templates that get results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 mx-auto">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/icon.png" alt="Pulse Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-xl font-bold text-gradient">Pulse</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Engagement and performance software that works where you do.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-6 text-center text-sm text-muted-foreground mx-auto">
          &copy; {new Date().getFullYear()} Pulse. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


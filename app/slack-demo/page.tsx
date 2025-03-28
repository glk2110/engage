"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, User } from "lucide-react"

export default function SlackDemoPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi there! I'm Jessica from HR. We're running our quarterly engagement survey to understand how things are going. Do you have a moment to share your thoughts?",
      time: "10:02 AM",
    },
  ])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [input, setInput] = useState("")

  const questions = [
    "On a scale of 1 to 5, how clearly do you understand what's expected of you at work?",
    "Have you received meaningful recognition for your work in the past week?",
    "On a scale of 1 to 5, how would you rate your team's collaboration and support?",
    "On a scale of 1 to 5, how supported do you feel by your manager?",
    "Do you feel you have the opportunity to learn and grow in your current role?",
    "On a scale of 1 to 5, how satisfied are you with your job overall?",
  ]

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const newMessages = [
      ...messages,
      {
        id: messages.length + 1,
        sender: "user",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]

    setMessages(newMessages)
    setInput("")

    // Add bot response after a delay
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        setMessages([
          ...newMessages,
          {
            id: newMessages.length + 1,
            sender: "bot",
            text: questions[currentQuestion],
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])

        setCurrentQuestion(currentQuestion + 1)
      } else {
        setMessages([
          ...newMessages,
          {
            id: newMessages.length + 1,
            sender: "bot",
            text: "Thank you for completing the survey! Your feedback is valuable and will help us improve your work experience. Have a great day!",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="border-b">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Jessica (HR Consultant)</CardTitle>
              <CardDescription>Slack • Active now</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex gap-2 max-w-[80%]">
                  {message.sender === "bot" && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div>
                    <div
                      className={`rounded-lg p-3 ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{message.time}</div>
                  </div>
                  {message.sender === "user" && (
                    <div className="h-8 w-8 rounded-full bg-background border flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t p-3">
          <form
            className="flex w-full items-center space-x-2"
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
          >
            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!input.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}


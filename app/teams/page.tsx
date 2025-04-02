"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Plus, Search, Upload, Users } from "lucide-react"
import Image from "next/image"
import AppLayout from "@/components/AppLayout"

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const teams = [
    { id: 1, name: "Engineering", manager: "Sarah Johnson", members: 12, lastSurvey: "June 1, 2023" },
    { id: 2, name: "Product", manager: "Michael Chen", members: 8, lastSurvey: "June 1, 2023" },
    { id: 3, name: "Design", manager: "Emily Rodriguez", members: 5, lastSurvey: "June 1, 2023" },
    { id: 4, name: "Marketing", manager: "David Kim", members: 7, lastSurvey: "May 15, 2023" },
    { id: 5, name: "Sales", manager: "Jessica Lee", members: 10, lastSurvey: "May 15, 2023" },
    { id: 6, name: "Customer Support", manager: "Robert Taylor", members: 15, lastSurvey: "April 30, 2023" },
    { id: 7, name: "Finance", manager: "Amanda Wilson", members: 6, lastSurvey: "April 30, 2023" },
    { id: 8, name: "HR", manager: "Thomas Brown", members: 4, lastSurvey: "April 15, 2023" },
  ]

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.manager.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <AppLayout>
      <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <header className="border-b px-6 py-4 bg-background/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Teams</h1>
            <div className="flex items-center gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 transition-all">
                <Plus className="h-4 w-4 mr-2" />
                Add Team
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search teams or managers..."
                className="w-full pl-8 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Import HRIS Data
              </Button>
            </div>
          </div>

          <Card className="relative">
            <CardHeader>
              <CardTitle>Team Directory</CardTitle>
              <CardDescription>Manage your organization structure and team members</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team Name</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead className="text-center">Members</TableHead>
                    <TableHead>Last Survey</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell className="font-medium">{team.name}</TableCell>
                      <TableCell>{team.manager}</TableCell>
                      <TableCell className="text-center">{team.members}</TableCell>
                      <TableCell>{team.lastSurvey}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredTeams.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <div className="flex flex-col items-center justify-center">
                          <Users className="h-12 w-12 text-muted-foreground/50" />
                          <h3 className="mt-4 text-lg font-medium">No teams found</h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Try adjusting your search or import team data.
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <div className="text-sm text-muted-foreground">
                Showing {filteredTeams.length} of {teams.length} teams
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </AppLayout>
  )
}


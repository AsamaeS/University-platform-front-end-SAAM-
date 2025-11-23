import { Sidebar } from "@/components/sidebar"
import { PageHeader } from "@/components/page-header"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, BookOpen, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data - will be replaced with API calls
  const stats = [
    {
      title: "Total Étudiants",
      value: "2,847",
      icon: Users,
      trend: { value: "+12%", isPositive: true },
    },
    {
      title: "Total Enseignants",
      value: "156",
      icon: GraduationCap,
      trend: { value: "+3%", isPositive: true },
    },
    {
      title: "Cours Actifs",
      value: "89",
      icon: BookOpen,
      trend: { value: "+8%", isPositive: true },
    },
    {
      title: "Taux d'inscription",
      value: "94.2%",
      icon: TrendingUp,
      trend: { value: "+2.1%", isPositive: true },
    },
  ]

  const recentEnrollments = [
    { id: 1, student: "Sophie Martin", course: "Mathématiques Avancées", date: "2024-01-15" },
    { id: 2, student: "Thomas Dubois", course: "Programmation Web", date: "2024-01-15" },
    { id: 3, student: "Marie Laurent", course: "Base de données", date: "2024-01-14" },
    { id: 4, student: "Lucas Bernard", course: "Intelligence Artificielle", date: "2024-01-14" },
  ]

  const upcomingCourses = [
    { id: 1, name: "Algorithmes", teacher: "Prof. Durand", time: "Lundi 10:00", students: 45 },
    { id: 2, name: "Réseaux", teacher: "Prof. Lefebvre", time: "Mardi 14:00", students: 38 },
    { id: 3, name: "Sécurité", teacher: "Prof. Moreau", time: "Mercredi 09:00", students: 52 },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-64">
        <div className="p-6 md:p-8">
          <PageHeader title="Tableau de bord" description="Vue d'ensemble de la plateforme universitaire" />

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Enrollments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Inscriptions récentes</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/enrollments">
                    Voir tout
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEnrollments.map((enrollment) => (
                    <div
                      key={enrollment.id}
                      className="flex items-center justify-between border-b border-border last:border-0 pb-4 last:pb-0"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm truncate">{enrollment.student}</p>
                        <p className="text-sm text-muted-foreground truncate">{enrollment.course}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {new Date(enrollment.date).toLocaleDateString("fr-FR")}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Courses */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Cours à venir</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between border-b border-border last:border-0 pb-4 last:pb-0"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm truncate">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.teacher}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-xs font-medium whitespace-nowrap">{course.time}</p>
                        <p className="text-xs text-muted-foreground">{course.students} étudiants</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

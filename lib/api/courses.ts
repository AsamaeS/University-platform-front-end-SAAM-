// Mock API functions for courses - Replace with actual SOAP/REST calls

export interface Course {
  id: string
  code: string
  name: string
  description: string
  teacherId: string
  teacherName: string
  credits: number
  schedule: string
  capacity: number
  enrolled: number
  department: string
  semester: "Fall" | "Spring" | "Summer"
  year: number
  status: "active" | "archived" | "draft"
}

const mockCourses: Course[] = [
  {
    id: "1",
    code: "CS401",
    name: "Intelligence Artificielle",
    description: "Introduction aux concepts fondamentaux de l'IA, apprentissage automatique et réseaux de neurones.",
    teacherId: "1",
    teacherName: "Prof. Durand",
    credits: 6,
    schedule: "Lundi 10:00-12:00, Jeudi 14:00-16:00",
    capacity: 50,
    enrolled: 45,
    department: "Informatique",
    semester: "Fall",
    year: 2024,
    status: "active",
  },
  {
    id: "2",
    code: "CS301",
    name: "Réseaux et Sécurité",
    description: "Protocoles réseau, sécurité informatique et cryptographie.",
    teacherId: "2",
    teacherName: "Prof. Lefebvre",
    credits: 5,
    schedule: "Mardi 14:00-16:00, Vendredi 10:00-12:00",
    capacity: 40,
    enrolled: 38,
    department: "Informatique",
    semester: "Fall",
    year: 2024,
    status: "active",
  },
  {
    id: "3",
    code: "MATH201",
    name: "Analyse Numérique",
    description: "Méthodes numériques pour résoudre des problèmes mathématiques.",
    teacherId: "3",
    teacherName: "Prof. Moreau",
    credits: 4,
    schedule: "Mercredi 09:00-11:00, Vendredi 14:00-16:00",
    capacity: 60,
    enrolled: 52,
    department: "Mathématiques",
    semester: "Fall",
    year: 2024,
    status: "active",
  },
  {
    id: "4",
    code: "PHY301",
    name: "Mécanique Quantique",
    description: "Principes fondamentaux de la mécanique quantique.",
    teacherId: "4",
    teacherName: "Prof. Rousseau",
    credits: 6,
    schedule: "Lundi 14:00-16:00, Jeudi 10:00-12:00",
    capacity: 35,
    enrolled: 32,
    department: "Physique",
    semester: "Fall",
    year: 2024,
    status: "active",
  },
  {
    id: "5",
    code: "CS201",
    name: "Programmation Web",
    description: "Développement d'applications web modernes avec React et Node.js.",
    teacherId: "1",
    teacherName: "Prof. Durand",
    credits: 5,
    schedule: "Mardi 10:00-12:00, Jeudi 16:00-18:00",
    capacity: 45,
    enrolled: 42,
    department: "Informatique",
    semester: "Spring",
    year: 2024,
    status: "active",
  },
]

export async function getCourses(): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockCourses
}

export async function getCourse(id: string): Promise<Course | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockCourses.find((c) => c.id === id) || null
}

export async function createCourse(course: Omit<Course, "id" | "enrolled">): Promise<Course> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const newCourse = {
    ...course,
    id: String(mockCourses.length + 1),
    enrolled: 0,
  }
  mockCourses.push(newCourse)
  return newCourse
}

export async function updateCourse(id: string, course: Partial<Course>): Promise<Course> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockCourses.findIndex((c) => c.id === id)
  if (index !== -1) {
    mockCourses[index] = { ...mockCourses[index], ...course }
    return mockCourses[index]
  }
  throw new Error("Course not found")
}

export async function deleteCourse(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockCourses.findIndex((c) => c.id === id)
  if (index !== -1) {
    mockCourses.splice(index, 1)
  }
}

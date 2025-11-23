// Mock API functions for enrollments - Replace with actual SOAP/REST calls

export interface Enrollment {
  id: string
  studentId: string
  studentName: string
  studentEmail: string
  courseId: string
  courseCode: string
  courseName: string
  enrollmentDate: string
  status: "enrolled" | "pending" | "cancelled" | "completed"
  grade?: number
}

const mockEnrollments: Enrollment[] = [
  {
    id: "1",
    studentId: "1",
    studentName: "Sophie Martin",
    studentEmail: "sophie.martin@university.fr",
    courseId: "1",
    courseCode: "CS401",
    courseName: "Intelligence Artificielle",
    enrollmentDate: "2024-01-15",
    status: "enrolled",
  },
  {
    id: "2",
    studentId: "2",
    studentName: "Thomas Dubois",
    studentEmail: "thomas.dubois@university.fr",
    courseId: "5",
    courseCode: "CS201",
    courseName: "Programmation Web",
    enrollmentDate: "2024-01-15",
    status: "enrolled",
  },
  {
    id: "3",
    studentId: "3",
    studentName: "Marie Laurent",
    studentEmail: "marie.laurent@university.fr",
    courseId: "3",
    courseCode: "MATH201",
    courseName: "Analyse Numérique",
    enrollmentDate: "2024-01-14",
    status: "enrolled",
  },
  {
    id: "4",
    studentId: "4",
    studentName: "Lucas Bernard",
    studentEmail: "lucas.bernard@university.fr",
    courseId: "1",
    courseCode: "CS401",
    courseName: "Intelligence Artificielle",
    enrollmentDate: "2024-01-14",
    status: "enrolled",
  },
  {
    id: "5",
    studentId: "1",
    studentName: "Sophie Martin",
    studentEmail: "sophie.martin@university.fr",
    courseId: "2",
    courseCode: "CS301",
    courseName: "Réseaux et Sécurité",
    enrollmentDate: "2024-01-12",
    status: "enrolled",
  },
]

export async function getEnrollments(): Promise<Enrollment[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockEnrollments
}

export async function getEnrollmentsByStudent(studentId: string): Promise<Enrollment[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockEnrollments.filter((e) => e.studentId === studentId)
}

export async function getEnrollmentsByCourse(courseId: string): Promise<Enrollment[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockEnrollments.filter((e) => e.courseId === courseId)
}

export async function createEnrollment(enrollment: Omit<Enrollment, "id">): Promise<Enrollment> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const newEnrollment = {
    ...enrollment,
    id: String(mockEnrollments.length + 1),
  }
  mockEnrollments.push(newEnrollment)
  return newEnrollment
}

export async function updateEnrollment(id: string, enrollment: Partial<Enrollment>): Promise<Enrollment> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockEnrollments.findIndex((e) => e.id === id)
  if (index !== -1) {
    mockEnrollments[index] = { ...mockEnrollments[index], ...enrollment }
    return mockEnrollments[index]
  }
  throw new Error("Enrollment not found")
}

export async function cancelEnrollment(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockEnrollments.findIndex((e) => e.id === id)
  if (index !== -1) {
    mockEnrollments[index].status = "cancelled"
  }
}

export async function deleteEnrollment(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockEnrollments.findIndex((e) => e.id === id)
  if (index !== -1) {
    mockEnrollments.splice(index, 1)
  }
}

// Mock API functions - Replace with actual SOAP/REST calls

export interface Student {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  enrollmentDate: string
  major: string
  year: number
  gpa: number
  status: "active" | "inactive" | "graduated"
}

// Mock data
const mockStudents: Student[] = [
  {
    id: "1",
    firstName: "Sophie",
    lastName: "Martin",
    email: "sophie.martin@university.fr",
    phone: "+33 6 12 34 56 78",
    dateOfBirth: "2002-05-15",
    enrollmentDate: "2021-09-01",
    major: "Informatique",
    year: 3,
    gpa: 3.8,
    status: "active",
  },
  {
    id: "2",
    firstName: "Thomas",
    lastName: "Dubois",
    email: "thomas.dubois@university.fr",
    phone: "+33 6 23 45 67 89",
    dateOfBirth: "2003-08-22",
    enrollmentDate: "2022-09-01",
    major: "Mathématiques",
    year: 2,
    gpa: 3.5,
    status: "active",
  },
  {
    id: "3",
    firstName: "Marie",
    lastName: "Laurent",
    email: "marie.laurent@university.fr",
    phone: "+33 6 34 56 78 90",
    dateOfBirth: "2001-11-30",
    enrollmentDate: "2020-09-01",
    major: "Physique",
    year: 4,
    gpa: 3.9,
    status: "active",
  },
  {
    id: "4",
    firstName: "Lucas",
    lastName: "Bernard",
    email: "lucas.bernard@university.fr",
    phone: "+33 6 45 67 89 01",
    dateOfBirth: "2002-03-10",
    enrollmentDate: "2021-09-01",
    major: "Informatique",
    year: 3,
    gpa: 3.6,
    status: "active",
  },
  {
    id: "5",
    firstName: "Emma",
    lastName: "Petit",
    email: "emma.petit@university.fr",
    phone: "+33 6 56 78 90 12",
    dateOfBirth: "2003-07-18",
    enrollmentDate: "2022-09-01",
    major: "Chimie",
    year: 2,
    gpa: 3.7,
    status: "active",
  },
]

export async function getStudents(): Promise<Student[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockStudents
}

export async function getStudent(id: string): Promise<Student | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockStudents.find((s) => s.id === id) || null
}

export async function createStudent(student: Omit<Student, "id">): Promise<Student> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const newStudent = {
    ...student,
    id: String(mockStudents.length + 1),
  }
  mockStudents.push(newStudent)
  return newStudent
}

export async function updateStudent(id: string, student: Partial<Student>): Promise<Student> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockStudents.findIndex((s) => s.id === id)
  if (index !== -1) {
    mockStudents[index] = { ...mockStudents[index], ...student }
    return mockStudents[index]
  }
  throw new Error("Student not found")
}

export async function deleteStudent(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockStudents.findIndex((s) => s.id === id)
  if (index !== -1) {
    mockStudents.splice(index, 1)
  }
}

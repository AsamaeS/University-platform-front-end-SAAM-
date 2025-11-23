// Mock API functions for academic tracking - Replace with actual SOAP/REST calls

export interface AcademicRecord {
  studentId: string
  studentName: string
  major: string
  year: number
  gpa: number
  totalCredits: number
  courses: CourseRecord[]
  certificates: Certificate[]
}

export interface CourseRecord {
  courseId: string
  courseCode: string
  courseName: string
  credits: number
  grade: number
  letterGrade: string
  semester: string
  year: number
  status: "in-progress" | "completed" | "failed"
}

export interface Certificate {
  id: string
  name: string
  issuedDate: string
  type: "completion" | "excellence" | "participation"
}

const mockAcademicRecords: AcademicRecord[] = [
  {
    studentId: "1",
    studentName: "Sophie Martin",
    major: "Informatique",
    year: 3,
    gpa: 3.8,
    totalCredits: 120,
    courses: [
      {
        courseId: "1",
        courseCode: "CS401",
        courseName: "Intelligence Artificielle",
        credits: 6,
        grade: 18.5,
        letterGrade: "A",
        semester: "Fall",
        year: 2024,
        status: "in-progress",
      },
      {
        courseId: "2",
        courseCode: "CS301",
        courseName: "Réseaux et Sécurité",
        credits: 5,
        grade: 16.5,
        letterGrade: "B+",
        semester: "Fall",
        year: 2024,
        status: "in-progress",
      },
      {
        courseId: "5",
        courseCode: "CS201",
        courseName: "Programmation Web",
        credits: 5,
        grade: 19.0,
        letterGrade: "A+",
        semester: "Spring",
        year: 2023,
        status: "completed",
      },
    ],
    certificates: [
      {
        id: "1",
        name: "Excellence en Informatique",
        issuedDate: "2023-06-15",
        type: "excellence",
      },
      {
        id: "2",
        name: "Completion Année 2",
        issuedDate: "2023-06-30",
        type: "completion",
      },
    ],
  },
  {
    studentId: "2",
    studentName: "Thomas Dubois",
    major: "Mathématiques",
    year: 2,
    gpa: 3.5,
    totalCredits: 80,
    courses: [
      {
        courseId: "3",
        courseCode: "MATH201",
        courseName: "Analyse Numérique",
        credits: 4,
        grade: 17.0,
        letterGrade: "A-",
        semester: "Fall",
        year: 2024,
        status: "in-progress",
      },
    ],
    certificates: [
      {
        id: "3",
        name: "Completion Année 1",
        issuedDate: "2023-06-30",
        type: "completion",
      },
    ],
  },
]

export async function getAcademicRecord(studentId: string): Promise<AcademicRecord | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockAcademicRecords.find((r) => r.studentId === studentId) || null
}

export async function getAllAcademicRecords(): Promise<AcademicRecord[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockAcademicRecords
}

export async function updateGrade(studentId: string, courseId: string, grade: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const record = mockAcademicRecords.find((r) => r.studentId === studentId)
  if (record) {
    const course = record.courses.find((c) => c.courseId === courseId)
    if (course) {
      course.grade = grade
      course.letterGrade = calculateLetterGrade(grade)
    }
  }
}

function calculateLetterGrade(grade: number): string {
  if (grade >= 18) return "A+"
  if (grade >= 16) return "A"
  if (grade >= 14) return "B+"
  if (grade >= 12) return "B"
  if (grade >= 10) return "C"
  return "F"
}

// Mock API functions for teachers - Replace with actual SOAP/REST calls

export interface Teacher {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  department: string
  specialization: string
  hireDate: string
  officeHours: string
  status: "active" | "on-leave" | "retired"
}

const mockTeachers: Teacher[] = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Durand",
    email: "jean.durand@university.fr",
    phone: "+33 6 11 22 33 44",
    department: "Informatique",
    specialization: "Intelligence Artificielle",
    hireDate: "2015-09-01",
    officeHours: "Lundi 14h-16h, Mercredi 10h-12h",
    status: "active",
  },
  {
    id: "2",
    firstName: "Claire",
    lastName: "Lefebvre",
    email: "claire.lefebvre@university.fr",
    phone: "+33 6 22 33 44 55",
    department: "Informatique",
    specialization: "Réseaux et Sécurité",
    hireDate: "2018-09-01",
    officeHours: "Mardi 15h-17h, Jeudi 9h-11h",
    status: "active",
  },
  {
    id: "3",
    firstName: "Pierre",
    lastName: "Moreau",
    email: "pierre.moreau@university.fr",
    phone: "+33 6 33 44 55 66",
    department: "Mathématiques",
    specialization: "Analyse Numérique",
    hireDate: "2012-09-01",
    officeHours: "Lundi 10h-12h, Vendredi 14h-16h",
    status: "active",
  },
  {
    id: "4",
    firstName: "Anne",
    lastName: "Rousseau",
    email: "anne.rousseau@university.fr",
    phone: "+33 6 44 55 66 77",
    department: "Physique",
    specialization: "Mécanique Quantique",
    hireDate: "2010-09-01",
    officeHours: "Mercredi 14h-16h",
    status: "active",
  },
]

export async function getTeachers(): Promise<Teacher[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockTeachers
}

export async function getTeacher(id: string): Promise<Teacher | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockTeachers.find((t) => t.id === id) || null
}

export async function createTeacher(teacher: Omit<Teacher, "id">): Promise<Teacher> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const newTeacher = {
    ...teacher,
    id: String(mockTeachers.length + 1),
  }
  mockTeachers.push(newTeacher)
  return newTeacher
}

export async function updateTeacher(id: string, teacher: Partial<Teacher>): Promise<Teacher> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockTeachers.findIndex((t) => t.id === id)
  if (index !== -1) {
    mockTeachers[index] = { ...mockTeachers[index], ...teacher }
    return mockTeachers[index]
  }
  throw new Error("Teacher not found")
}

export async function deleteTeacher(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const index = mockTeachers.findIndex((t) => t.id === id)
  if (index !== -1) {
    mockTeachers.splice(index, 1)
  }
}

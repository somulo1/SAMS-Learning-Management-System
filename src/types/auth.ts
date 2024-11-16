export type UserRole = 'superadmin' | 'admin' | 'instructor' | 'student' | 'parent' | 'auditor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
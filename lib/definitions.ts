export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  createdAt?: string | Date | number; // ISO date string
  image?: string;
  genre?: string;
  technologies?: string;
  bio?: string;
  numero?: string;
};
export type Users = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  createdAt?: string | Date | number; // ISO date string
  image?: string;
  genre?: string;
  technologies?: string;
  bio?: string;
  numero?: string;
}[];

export type Project = {
  id: string;
  user_id: string;
  project_name: string;
};
export type UserWithProjects = User & {
  projects: Project[];
};

export type Comment = {
  id: string;
  user_id: string;
  comment: string;
  created_at: string | Date | number; // ISO date string
  name?: string;
  lastname?: string;
  email?: string;
};

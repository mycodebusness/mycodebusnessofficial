import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User, Project, UserWithProjects, Comment } from "../definitions";

// Fetch a single user by email
export async function fetchUserByEmail(email: string): Promise<User> {
  noStore();
  try {
    const data = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    return data.rows[0];
  } catch (error) {
    console.error("Failed to fetch user by email:", error);
    throw new Error("Failed to fetch user by email.");
  }
}

// Fetch all users
export async function fetchAllUsers(): Promise<User[]> {
  noStore();
  try {
    const data = await sql<User>`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error("Failed to fetch all users:", error);
    throw new Error("Failed to fetch all users.");
  }
}

// Fetch all projects related to a user
export async function fetchUserProjects(userId: string): Promise<Project[]> {
  noStore();
  try {
    const data =
      await sql<Project>`SELECT * FROM projects WHERE user_id = ${userId}`;
    return data.rows;
  } catch (error) {
    console.error("Failed to fetch projects for user:", error);
    throw new Error("Failed to fetch projects for user.");
  }
}

// Fetch a user with their projects
export async function fetchUserWithProjects(
  email: string
): Promise<UserWithProjects> {
  noStore();
  try {
    // Fetch user by email
    const userData =
      await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    const user = userData.rows[0];

    if (!user) {
      throw new Error("User not found");
    }

    // Fetch projects for the user
    const projectsData =
      await sql<Project>`SELECT * FROM projects WHERE user_id = ${user.id}`;
    const projects = projectsData.rows;

    return { ...user, projects };
  } catch (error) {
    console.error("Failed to fetch user with projects:", error);
    throw new Error("Failed to fetch user with projects.");
  }
}

// Fetch all comments made by a specific user
export async function fetchUserComments(userId: string): Promise<Comment[]> {
  noStore();
  try {
    const data =
      await sql<Comment>`SELECT * FROM comments WHERE user_id = ${userId} ORDER BY created_at DESC`;
    return data.rows;
  } catch (error) {
    console.error("Failed to fetch comments by user:", error);
    throw new Error("Failed to fetch comments by user.");
  }
}

// Fetch all comments
export async function fetchAllComments(): Promise<Comment[]> {
  noStore();
  try {
    const data =
      await sql<Comment>`SELECT comments.comment, users.name, users.lastname, users.email FROM comments JOIN users ON comments.user_id = users.id ORDER BY comments.created_at DESC;`;
    return data.rows;
  } catch (error) {
    console.error("Failed to fetch all comments:", error);
    throw new Error("Failed to fetch all comments.");
  }
}

// Fetch the five most recent users
export async function fetchRecentUsers(): Promise<User[]> {
  noStore();
  try {
    const data =
      await sql<User>`SELECT name,lastname,email,createdAt,image FROM users ORDER BY createdAt DESC LIMIT 5`;
    return data.rows;
  } catch (error) {
    console.error("Failed to fetch recent users:", error);
    throw new Error("Failed to fetch recent users.");
  }
}

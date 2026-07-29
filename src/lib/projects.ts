import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
const PROJECTS_PATH = path.join(process.cwd(), "src/content/projects");

/**
 * Get all projects from MDX files
 */
export function getProjects() {
  const files = fs.readdirSync(PROJECTS_PATH);

  const projects = files.map((fileName) => {
    const filePath = path.join(PROJECTS_PATH, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
      slug: data.slug || fileName.replace(".mdx", ""),
    };
  });

  // Optional: sort newest first if you add dates later
  return projects;
}

/**
 * Get only featured projects
 */
export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured === true);
}

/**
 * Get a single project by slug
 */
export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

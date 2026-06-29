import { featuredProjects, otherProjects } from "./content";

export function getSidebarNav() {
  return {
    main: [
      { label: "Home", path: "/" },
      { label: "Projects", path: "/projects" },
    ],

    projects: [
      ...featuredProjects.map((p) => ({
        label: p.title,
        path: `/projects/${p.id}`,
        featured: true,
      })),

      ...otherProjects.map((p) => ({
        label: p.title,
        path: `/projects/${p.id}`,
        featured: false,
      })),
    ],
  };
}

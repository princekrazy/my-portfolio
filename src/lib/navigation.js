import { featuredProjects, otherProjects } from "./content";

export function getSidebarNav() {
  return {
    main: [
      { label: "Home", path: "/" },
      { label: "Featured Projects", path: "/#featured" },
      { label: "Other Projects", path: "/#other" },
      { label: "Experience", path: "/#experience" },
      { label: "Skills", path: "/#skills" },
      { label: "Contact Me", path: "/#contact" },
      { label: "About Me", path: "/#about" },
      { label: "Filter Projects By Technologies", path: "/projects" },
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

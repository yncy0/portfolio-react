import ProjectsCard from "./ProjectsCard";
import { portfolioTechStack, monthsaryTechStack } from "@/utils/lists";
import type { Projects } from "@/utils/types";

export default function ProjectsList() {
  const projects: Projects[] = [
    {
      title: "Portfolio",
      description:
        "This project is to showcase my other projects and skills." +
        "It is made with Nuxt, Tailwind CSS, and Shadcn/Vue",
      githubUrl: "https://github.com/yncy0/portfolio",
      imageUrl: "/images/projects/portfolio/dark.png",
      projectUrl: "https://yncy0.nuxt.dev/",
      techstack: portfolioTechStack,
    },
    {
      title: "Monthsary Website",
      description:
        "A fun project dedicated to my girlfriend❤️. " +
        "This Project compose of Nuxt + Nuxt plugins and ecosystem, Tailwdind CSS, and Supabase as back-end",
      githubUrl: "https://github.com/yncy0/monthsary",
      imageUrl: "/images/projects/monthsary/hero-section.png",
      projectUrl: "https://monthsary-website.nuxt.dev/",
      techstack: monthsaryTechStack,
    },
  ];

  return (
    <section>
      <ul className="flex flex-col lg:basis-1/3 lg:flex-row gap-2">
        {projects.map((item, index) => (
          <li key={index}>
            <ProjectsCard
              title={item.title}
              description={item.description}
              github-url={item.githubUrl}
              image-url={item.imageUrl}
              project-url={item.projectUrl}
              techstack={item.techstack}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

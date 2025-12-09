import ProjectsCard from "./ProjectsCard";
import { portfolioTechStack, monthsaryTechStack } from "@/utils/lists";
import type { Projects } from "@/utils/types";
import portfolio from "@/assets/images/projects/portfolio/index.png"
import monthsary from "@/assets/images/projects/monthsary/hero-section.png"
import { useProjects } from "@/hooks/useProjects";


export default function ProjectsList() {
  const { data: projects, isLoading, error } = useProjects();
  
  // const projects: Projects[] = [
  //   {
  //     title: "Portfolio",
  //     description:
  //       "This project is to showcase my other projects and skills." +
  //       "It is made with Nuxt, Tailwind CSS, and Shadcn/Vue",
  //     githubUrl: "https://github.com/yncy0/portfolio",
  //     imageUrl: portfolio,
  //     projectUrl: "https://yncy0.nuxt.dev/",
  //     techstack: portfolioTechStack,
  //   },
  //   {
  //     title: "Monthsary Website",
  //     description:
  //       "A fun project dedicated to my girlfriend❤️. " +
  //       "This Project compose of Nuxt + Nuxt plugins and ecosystem, Tailwdind CSS, and Supabase as back-end",
  //     githubUrl: "https://github.com/yncy0/monthsary",
  //     imageUrl: monthsary,
  //     projectUrl: "https://monthsary-website.nuxt.dev/",
  //     techstack: monthsaryTechStack,
  //   },
  // ];

  return (
    <section>
      <ul className="flex flex-col lg:basis-1/3 lg:flex-row gap-2">
        {projects?.map((item) => (
          <li key={item.id}>
            <ProjectsCard
              id={item.id}
              title={item.title}
              description={item.description}
              github_url={item.github_url}
              image_url={item.image_url}
              project_url={item.project_url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

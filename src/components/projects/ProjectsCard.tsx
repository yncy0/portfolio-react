import { Icon } from "@iconify-icon/react"

import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import ProjectTechStack from "./ProjectTechStack";

import type { Projects } from "@/utils/types";

export default function ProjectsCard(props: Projects) {
  return (
    <Card className="bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text border shadow-none rounded-sm">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="text-cat-text">{
          props.description
        }</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <img src={props.imageUrl} alt="Image of Portfolio" className="w-full" />
        <ProjectTechStack list={props.techstack} />
      </CardContent>

      <CardFooter className="flex flex-row gap-5">
        <Button aria-label="Link to Project" className="dark:bg-ctp-green-200 bg-cat-text text-cat-base p-5">
          <a href={props.projectUrl}>View Project</a>
      </Button>
      <Button
        aria-label="Link to GitHub"
        className="bg-cat-base dark:text-ctp-green-200 text-cat-text 
              dark:border-ctp-green-200 border-cat-text border shadow-none p-5 items-center">
        <a href={props.githubUrl} className="flex flex-row items-center gap-2">
        <Icon icon="simple-icons:github" className="size-4" />
        GitHub
      </a>
    </Button>
    </CardFooter >
  </Card >
 
  )
}

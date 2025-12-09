import ProjectsList from "../projects/ProjectsList";

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg lg:text-xl dark:text-ctp-green-200">Projects</h2>
      <ProjectsList />
    </section>
  );
}

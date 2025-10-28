import AboutMe from "./AboutMeSection";
import ExperienceList from "../experience/ExperienceList";
import ProjectsList from "../projects/ProjectsList";
import TechnologyList from "../technologies/TechnologyList";
import EducationSection from "./EducationSection";
import HireMeButton from "../button/HireMeButton";
import { technologiesList } from "@/utils/lists";

export default function MainSection() {
  return (
    <section className="flex flex-col min-h-dvh w-full max-w-screen pt-20 gap-10">
      <section className="flex flex-col gap-5">
        <AboutMe />
      </section>

      <section className="flex flex-col gap-10">
        <ExperienceList />
        <ProjectsList />

        <h2 className="text-lg lg:text-xl">Technologies</h2>
        <TechnologyList lists={technologiesList} />

        <EducationSection />
      </section>

      <HireMeButton />
    </section>
  );
}

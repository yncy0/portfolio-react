import { createFileRoute } from "@tanstack/react-router";

import HeroSection from "@/components/hero/HeroSection";
import AboutMeSection from "@/components/section/AboutMeSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import ProjectSection from "@/components/section/ProjectSection";
import TechnologySection from "@/components/section/TechnologySection";
import EducationSection from "@/components/section/EducationSection";
import HireMeButton from "@/components/button/HireMeButton";

export const Route = createFileRoute("/_front/")({
  component: App,
});

function App() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectSection />
      <TechnologySection />
      <EducationSection />

      <HireMeButton />
    </>
  );
}

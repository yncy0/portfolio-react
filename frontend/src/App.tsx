import HeroSection from "./components/hero/HeroSection";
import AboutMeSection from "./components/section/AboutMeSection";
import ExperienceSection from "./components/section/ExperienceSection";
import ProjectSection from "./components/section/ProjectSection";
import TechnologySection from "./components/section/TechnologySection";
import EducationSection from "./components/section/EducationSection";
import HireMeButton from "./components/button/HireMeButton";

function App() {
  return (
    <main className="flex flex-col items-start justify-center w-full max-w-screen gap-10 px-5 md:px-44 lg:px-80">
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectSection />
      <TechnologySection />
      <EducationSection />

      <HireMeButton />
    </main>
  );
}

export default App;

import ExperienceList from "../experience/ExperienceList";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-2 w-full max-w-screen">
      <h2 className="text-lg lg:text-xl dark:text-ctp-green-200">Experiences</h2>
      <ExperienceList />
    </section>
  );
}

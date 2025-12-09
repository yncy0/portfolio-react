import TechnologyList from "../technologies/TechnologyList"

import { technologiesList } from "@/utils/lists"

export default function TechnologySection() {
  return (
    <section className="flex flex-col gap-2 w-full max-w-screen">
      <h2 className="text-lg lg:text-xl dark:text-ctp-green-200">Technologies</h2>
      <TechnologyList list={technologiesList} />
    </section>

  )
}

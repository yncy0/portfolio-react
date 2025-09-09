import type { Technologies } from "@/utils/types";

import TechnologyCard from "./TechnologyCard";

type Props = {
  list: Technologies[];
};

export default function TechnologyList({list}: Props) {
  return (
    <section id="technologies" className="flex flex-col gap-2">
      <ul className="flex flex-row flex-wrap gap-2">
        {list.map((item, index) => (
          <li key={index} className="flex-1 basis-1/3 lg:basis-0">
            <TechnologyCard
              name={item.name}
              icon={item.icon}
              size={item.size}
              color={item.color}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

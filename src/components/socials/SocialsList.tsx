import { Icon } from "@iconify-icon/react";

import type { Socials } from "@/utils/types";

export default function SocialsList() {
  const items: Socials[] = [
    {
      link: "https://github.com/yncy0",
      icon: "simple-icons:github",
      aria: "Link to GitHub",
    },
    {
      link: "mailto:yncyncy0@gmail.com",
      icon: "simple-icons:gmail",
      aria: "Link to Gmail",
    },
    {
      link: "https://x.com/yncynotdev",
      icon: "simple-icons:x",
      aria: "Link to X",
    },
  ];

  return (
    <ul className="flex flex-row gap-7">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link} aria-label={item.aria}>
            <Icon icon="item.icon" className="size-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}

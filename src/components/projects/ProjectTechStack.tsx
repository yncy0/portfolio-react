import { Icon } from "@iconify-icon/react";

import { Badge } from "../ui/badge";
import type { Technologies } from "@/utils/types";

export default function ProjectTechStack(list: Technologies[]) {
  return (
    <div className="flex flex-wrap gap-1">
      {list.map((item, index) => (
        <div key={index}>
          <Badge className="bg-cat-text text-cat-base rounded-md">
            <Icon icon={item.icon} className={item.color} />
            {item.name}
          </Badge>
        </div>
      ))}
    </div>
  );
}

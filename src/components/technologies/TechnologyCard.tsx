import { Icon } from "@iconify-icon/react"

import { Card, CardContent } from "../ui/card";
import type { Technologies } from "@/utils/types";

export default function TechnologyCard(props: Technologies) {
  return (
    <Card className="items-center shadow-none bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text border">
      <CardContent className="flex flex-col items-center">
        <Icon icon={props.icon} size={props.size} className={props.color}/>
        <h3>{ props.name }</h3>
      </CardContent>
    </Card>

  )
}

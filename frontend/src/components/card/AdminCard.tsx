import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

type Props = {
  title: string;
  children: ReactNode
}

export function AdminCard(props: Props) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2>{props.title}</h2>
        <span className="flex gap-2 py-2">
          <Button>Add</Button>
          <Button>Edit</Button>
        </span>
      </div>

      <Card className="bg-none dark:border-ctp-green-200 border-cat-text border p-20 rounded-sm flex items-center justify-center">
          {props.children}
      </Card>
    </div>
  );
}

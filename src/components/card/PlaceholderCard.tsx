import { Card, CardContent } from "../ui/card"

type Props = {
  label: string;
}

export default function PlaceholderCard({ label }: Props) {
  return (
    <Card
      className="bg-cat-base dark:border-ctp-green-200 border-cat-text border p-20 rounded-sm flex items-center justify-center">
      <CardContent>
        <p className="text-sm lg:text-md text-cat-text">{ label }</p>
      </CardContent>
    </Card>

  )
}

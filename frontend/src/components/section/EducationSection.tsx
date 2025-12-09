import EducationList from "../education/EducationList";
import { Card, CardContent } from "../ui/card";

export default function EducationSection() {
  return (
    <section id="education" className="flex flex-col gap-2 w-full max-w-screen">
      <h2 className="text-xl dark:text-ctp-green-200 text-cat-text">
        Education
      </h2>
      <Card className="bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text border shadow-none rounded-sm">
        <CardContent>
          <EducationList />
        </CardContent>
      </Card>
    </section>
  );
}

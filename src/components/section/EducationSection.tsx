import { Card, CardContent } from "../ui/card";
import type { Education } from "@/utils/types";

export default function EducationSection() {
  const education: Education[] = [
    {
      school: "La Consolacion University Philippines",
      course: "Bachelor of Science in Information Technology",
      year: "Undergrad",
    },
    {
      school: "La Consolacion University Philippines",
      course:
        "Technological Vocational Course - Information and Communications Technology",
      year: "2022",
    },
  ];
  return (
    <section id="education" className="flex flex-col gap-2 w-full max-w-screen">
      <h2 className="text-xl dark:text-ctp-green-200 text-cat-text">
        Education
      </h2>
      <Card className="bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text border shadow-none rounded-sm">
        <CardContent>
          <ul className="flex flex-col gap-5">
            {education.map((item, index) => (
              <li key={index}>
                <div>
                  <h3 className="dark:text-ctp-green-200">{item.school}</h3>
                  <pre className="whitespace-normal">{item.course}</pre>
                  <em>{item.year}</em>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

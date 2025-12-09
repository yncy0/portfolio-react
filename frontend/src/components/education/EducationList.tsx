import type { Education } from "@/utils/types";

export default function EducationList() {
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
  );
}

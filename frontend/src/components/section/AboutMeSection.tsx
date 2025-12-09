import AboutMe from "../about/AboutMe";
import { Card, CardContent } from "../ui/card";

export default function AboutMeSection() {
  return (
    <section className="flex flex-col gap-5 w-full pt-20 lg:pt-0">
      <h2 className="text-lg lg:text-xl dark:text-ctp-green-200">About me</h2>
      <Card className="max-w-screen w-full bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text shadow-none rounded-sm">
        <CardContent>
          <AboutMe />
        </CardContent>
      </Card>
    </section>
  );
}

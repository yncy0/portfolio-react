import { Card, CardContent } from "../ui/card";

export default function AboutMeSection() {
  return (
    <section className="flex flex-col gap-5 w-full pt-20 lg:pt-0">
      <h2 className="text-lg lg:text-xl dark:text-ctp-green-200">About me</h2>
      <Card className="max-w-screen w-full bg-cat-base text-cat-text dark:border-ctp-green-200 border-cat-text shadow-none rounded-sm">
        <CardContent>
          <p className="text-lg">
            Hello there! My name is Yancy. A front-end developer that focuses on
            building and collaboration among front-end projects specially
            Vue/Nuxt.
            <br />
            Driven by curiosity, I also venture into other technologies when I
            take a break doing front-end stuff such as back-end development,
            game development, and the Linux technology.
            <br />
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

import BadgesList from "../badges/BadgesList";
import CoffeeWithCat from "../visuals/CoffeeWithCat";
import "./HeroSection.css";
import { HeroTitle } from "./HeroTitle";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:items-center w-full max-w-screen">
      <section className="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-1/2 max-w-screen lg:pb-28">
        <HeroTitle
          name="Yancy"
          description="Your average programming enjoyer"
        />
        <BadgesList />
      </section>

      <CoffeeWithCat />
    </section>
  );
}

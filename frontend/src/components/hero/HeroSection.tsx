import { useHero } from "@/hooks/useHero";
import BadgesList from "../badges/BadgesList";
import CoffeeWithCat from "../visuals/CoffeeWithCat";
import { HeroTitle } from "./HeroTitle";

export default function HeroSection() {
  const { data: hero, isLoading, error } = useHero();

  return (
    <section className="flex flex-col-reverse lg:flex-row lg:items-center w-full max-w-screen">
      <section className="flex flex-col justify-center items-start gap-4 lg:gap-7 h-full w-1/2 max-w-screen lg:pb-28">
        {hero?.map((item) => (
          <HeroTitle
            name={item.name}
            description={item.description}
          />
        ))}
        <BadgesList />
      </section>

      <CoffeeWithCat />
    </section>
  );
}

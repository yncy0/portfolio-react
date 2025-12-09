import BadgesList from "@/components/badges/BadgesList";
import { AdminCard } from "@/components/card/AdminCard";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/hero")({
  component: RouteComponent,
  staticData: {
    title: "Hero",
  },
});

function RouteComponent() {
  return (
    <>
      <AdminCard title="Hero Title">
        <HeroTitle
          name="Yancy"
          description="You Averagre Programming Enjoyer"
        />
      </AdminCard>
      <AdminCard title="Badges">
        <BadgesList />
      </AdminCard>
    </>
  );
}

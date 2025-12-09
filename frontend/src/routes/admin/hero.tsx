import BadgesList from "@/components/badges/BadgesList";
import { AdminCard, AdminTitle } from "@/components/card/AdminCard";
import DialogEditBadges from "@/components/dialog/edit/DialogEditBadges";
import DialogEditHeroTitle from "@/components/dialog/edit/DialogEditHeroTitle";
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
      <div>
        <AdminTitle title="Hero Title">
          <DialogEditHeroTitle />
        </AdminTitle>
        <AdminCard>
          <HeroTitle
            name="Yancy"
            description="You Averagre Programming Enjoyer"
          />
        </AdminCard>
      </div>

      <div>
        <AdminTitle title="Badges">
          <DialogEditBadges />
        </AdminTitle>
        <AdminCard>
          <BadgesList />
        </AdminCard>
      </div>
    </>
  );
}

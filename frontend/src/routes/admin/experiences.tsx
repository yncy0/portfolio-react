import { AdminCard, AdminTitle } from "@/components/card/AdminCard";
import PlaceholderCard from "@/components/card/PlaceholderCard";
import DialogEditExperiences from "@/components/dialog/edit/DialogEditExperiences";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/experiences")({
  component: RouteComponent,
  staticData: {
    title: "Experiences",
  },
});

function RouteComponent() {
  return (
    <>
      <div>
        <AdminTitle title="Experiences">
          <DialogEditExperiences />
        </AdminTitle>
        <AdminCard>
          <PlaceholderCard label="No experience yet!" />
        </AdminCard>
      </div>
    </>
  );
}

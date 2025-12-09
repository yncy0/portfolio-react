import { AdminCard } from "@/components/card/AdminCard";
import EducationList from "@/components/education/EducationList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/education")({
  component: RouteComponent,
  staticData: {
    title: "Education",
  },
});

function RouteComponent() {
  return (
    <>
      <AdminCard title="Education">
        <EducationList />
      </AdminCard>
    </>
  );
}

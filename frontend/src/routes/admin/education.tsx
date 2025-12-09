import { AdminCard, AdminTitle } from "@/components/card/AdminCard";
import DialogEditEducation from "@/components/dialog/edit/DialogEditEducation";
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
      <div>
        <AdminTitle title="Education">
          <DialogEditEducation />
        </AdminTitle>
        <AdminCard>
          <EducationList />
        </AdminCard>
      </div>
    </>
  );
}

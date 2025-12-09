import { AdminCard, AdminTitle } from "@/components/card/AdminCard";
import DialogAddProjects from "@/components/dialog/add/DialogAddProjects";
import ProjectsList from "@/components/projects/ProjectsList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/projects")({
  component: RouteComponent,
  staticData: {
    title: "Projects",
  },
});

function RouteComponent() {
  return (
    <>
      <div>
        <AdminTitle title="Projects">
          <DialogAddProjects />
        </AdminTitle>
        <AdminCard>
          <ProjectsList />
        </AdminCard>
      </div>
    </>
  );
}

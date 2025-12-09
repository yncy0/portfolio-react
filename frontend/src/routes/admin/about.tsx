import AboutMe from "@/components/about/AboutMe";
import { AdminCard, AdminTitle } from "@/components/card/AdminCard";
import DialogEditAbout from "@/components/dialog/edit/DialogEditAbout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>
        <AdminTitle title="About Me">
          <DialogEditAbout />
        </AdminTitle>
        <AdminCard>
          <AboutMe />
        </AdminCard>
      </div>
    </>
  );
}

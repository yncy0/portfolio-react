import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/components")({
  component: RouteComponent,
  staticData: {
    title: "Components",
  },
});

function RouteComponent() {
  return <div>Hello "/admin/"!</div>;
}

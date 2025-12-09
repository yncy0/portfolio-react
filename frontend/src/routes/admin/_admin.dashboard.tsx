import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_admin/dashboard")({
  component: RouteComponent,
  staticData: {
    title: "Dashboard",
  },
});

function RouteComponent() {
  return <div>Hello "/admin/"!</div>;
}

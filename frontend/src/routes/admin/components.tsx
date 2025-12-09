import { AdminCard } from "@/components/card/AdminCard";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/components")({
  component: RouteComponent,
  staticData: {
    title: "Components",
  },
});

function RouteComponent() {
  return (
    <>
      <AdminCard title="Header">
        <Header />
      </AdminCard>

      <AdminCard title="Footer">
        <Footer />
      </AdminCard>
    </>
  )
}

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_front")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-start justify-center w-full max-w-screen gap-10 px-5 md:px-44 lg:px-80">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

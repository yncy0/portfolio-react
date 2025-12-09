import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin/education')({
  component: RouteComponent,
  staticData: {
    title: "Education",
  },
})

function RouteComponent() {
  return <div>Hello "/_admin/education"!</div>
}

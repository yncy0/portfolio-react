import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin/projects')({
  component: RouteComponent,
  staticData: {
    title: "Projects",
  },

})

function RouteComponent() {
  return <div>Hello "/_admin/projects"!</div>
}

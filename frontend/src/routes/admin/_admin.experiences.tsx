import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin/experiences')({
  component: RouteComponent,
  staticData: {
    title: "Experiences",
  },

})

function RouteComponent() {
  return <div>Hello "/_admin/experiences"!</div>
}

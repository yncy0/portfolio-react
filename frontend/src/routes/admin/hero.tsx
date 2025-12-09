import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/hero')({
  component: RouteComponent,
  staticData: {
    title: "Hero",
  },
  
})

function RouteComponent() {
  return <div>Hello "/_admin/hero"!</div>
}

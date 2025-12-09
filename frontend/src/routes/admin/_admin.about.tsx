import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/about"!</div>
}

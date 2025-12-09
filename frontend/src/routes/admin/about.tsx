import AboutMe from '@/components/about/AboutMe'
import { AdminCard } from '@/components/card/AdminCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AdminCard title='About Me'>
      <AboutMe />
    </AdminCard>
  )
}

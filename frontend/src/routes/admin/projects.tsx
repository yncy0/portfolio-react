import { AdminCard } from '@/components/card/AdminCard'
import ProjectsList from '@/components/projects/ProjectsList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/projects')({
  component: RouteComponent,
  staticData: {
    title: "Projects",
  },

})

function RouteComponent() {
  return (
    <>
      <AdminCard title='Projects'>
        <ProjectsList />
      </AdminCard>
    </>
  )
}

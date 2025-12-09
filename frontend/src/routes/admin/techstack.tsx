import { AdminCard } from '@/components/card/AdminCard'
import TechnologyList from '@/components/technologies/TechnologyList'
import { technologiesList } from '@/utils/lists'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/techstack')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <AdminCard title='Techstack'>
        <TechnologyList list={technologiesList}/>
      </AdminCard>
    </>
  )
}

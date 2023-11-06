import { redirect } from 'next/navigation'

const ProjectsPage = () => {

  redirect('/projects/all')

  return (
    <main className='h-screen'>
      Redirecting...
    </main>
  )
}

export default ProjectsPage
import { redirect } from 'next/navigation'
import React from 'react'

const ProjectsPage = () => {

  redirect('/projects/all')

  return (
    <main className='h-screen'>
      Redirecting...
    </main>
  )
}

export default ProjectsPage
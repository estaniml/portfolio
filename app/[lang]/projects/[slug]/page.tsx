import ProjectCard from '@/components/project-card'
import { Project } from '@/lib/interface'
import { getData } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'

const ProjectPage = async ( { params } : { params: { slug: string }}) => {

  const data = await getData() as Project[]
  
  const filteredList = params.slug === 'all' ? data : data.filter( project => project.tools.includes( params.slug ))
  
  return (
    <div className=''>
      <h2 className='text-3xl font-bold mb-4'>Recent Projects.</h2>

      <div className='grid grid-cols-2 gap-8'>
        {filteredList.length > 0 ? filteredList.map(project => (
          <ProjectCard key={project._id} project={project} />
        )) : (
          <p className='flex items-center gap-2'>
            <AlertTriangle size={16} />
            No projects found.
          </p>
        )}
      </div>

    </div>
  )
}

export default ProjectPage
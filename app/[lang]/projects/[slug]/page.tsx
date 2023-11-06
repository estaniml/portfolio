import ProjectCard from '@/components/project-card'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Project } from '@/lib/interface'
import { getData } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'

const CategoryPage = async ( { params } : { params: { slug: string, lang: Locale}}) => {
  
  const { projects } = await getDictionary(params.lang)

  const data = await getData( null ) as Project[]
  
  const filteredList = params.slug === 'all' ? data : data.filter( project => project.tools.includes( params.slug ))
  
  return (
    <div>
      <h2 className='text-3xl font-bold mb-4'>{projects.title}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {filteredList.length > 0 ? filteredList.map(project => (
          <ProjectCard key={project._id} project={project} lang={params.lang} />
        )) : (
          <p className='flex items-center gap-2'>
            <AlertTriangle size={16} />
            {projects.notFound}
          </p>
        )}
      </div>

    </div>
  )
}

export default CategoryPage
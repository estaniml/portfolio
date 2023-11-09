import ProjectCard from '@/components/project-card'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Project } from '@/lib/interface'
import { client } from '@/lib/sanity'
import groq from 'groq'
import { AlertTriangle } from 'lucide-react'
import { Suspense } from 'react'
import Loading from './loading'

export const revalidate = 60;

const CategoryPage = async ( { params } : { params: { slug: string, lang: Locale}}) => {
  
  const { projects } = await getDictionary(params.lang)

  const query = groq`*[_type == "project"]| order(_createdAt asc)`
  const data = await client.fetch(query)
  
  const filteredList = params.slug === 'all' ? data : data.filter( (project: Project) => project.tools.includes( params.slug ))
  
  return (
    <Suspense fallback={<Loading />}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {filteredList.length > 0 ? filteredList.map( (project: Project) => (
          <ProjectCard key={project._id} project={project} lang={params.lang} />
        )) : (
          <p className='flex items-center gap-2'>
            <AlertTriangle size={16} />
            {projects.notFound}
          </p>
        )}
      </div>
    </Suspense>
  )
}

export default CategoryPage
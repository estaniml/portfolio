'use client'

import Image from 'next/image'
import { Project } from '@/lib/interface'
import { urlFor} from '@/lib/utils'

const ProjectCard = ({ project, lang } : { project: Project, lang: string }) => {
    
  return (
        <a href={project.link} target='_blank' rel='noreferrer' className='relative p-2 w-full rounded-lg shadow border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 cursor-pointer hover:shadow-lg transition-all hover:after:absolute after:overflow-hidden after:left-1/2 after:-translate-x-1/2 after:top-0 after:z-10 after:h-px after:blur-sm after:w-1/2 after:bg-emerald-500 hover:before:absolute before:overflow-hidden before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:z-10 before:h-px before:blur-sm before:w-1/2 before:bg-emerald-500'>
            <div className='relative w-full h-52 bg-stone-100 dark:bg-stone-200 rounded-lg mb-4'>
                <Image 
                    src={urlFor(project.image).url()}
                    alt={`${project.title} - Desarrollado por Estanislao Martinez Lacabe, Web Developer`}
                    fill
                    className='object-contain p-1'
                />
            </div>

            <div>
                <h3 className='font-bold text-xl'>{project.title}</h3>
                <p className='text-sm font-light my-2'>{ lang === 'en' ? project.description : project.spanishDescription }</p>
                <ul className='mt-2 flex items-center flex-wrap gap-2 text-xs'>
                    { project.tools.map( (tool, index) => (
                        <li key={index} className='bg-stone-100 dark:bg-stone-800 dark:text-white p-1 rounded'>{tool}</li>
                    ) )}
                </ul>
            </div>
        </a>
  )
}

export default ProjectCard
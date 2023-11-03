'use client'

import Image from 'next/image'
import { Project } from '@/lib/interface'
import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { StaticImageData } from 'next/image'

const builder = imageUrlBuilder(client)

function urlFor(source : string | StaticImageData ) {
    return builder.image(source)
}

const ProjectCard = ({ project } : { project: Project }) => {
  return (
    <div className='p-2 w-full rounded-lg shadow border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-950 cursor-pointer hover:shadow-lg transition-all'>
        <div className='relative w-full h-44 bg-stone-100 dark:bg-stone-800 rounded-lg mb-4'>
            <Image 
                src={urlFor(project.image).url()}
                alt={`${project.title} - Desarrollado por Estanislao Martinez Lacabe, Web Developer`}
                fill
                className='object-contain p-1'
            />
        </div>

        <div>
            <h3 className='font-bold text-xl'>{project.title}</h3>
            <ul className='mt-2 flex items-center flex-wrap gap-2 text-xs'>
                { project.tools.map( (tool, index) => (
                    <li key={index} className='bg-stone-100 dark:bg-stone-800 dark:text-white p-1 rounded'>{tool}</li>
                ) )}
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard
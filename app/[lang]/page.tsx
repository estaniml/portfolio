import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/interface'
import { ChevronRight, Mail, FileDown, Linkedin  } from 'lucide-react'
import ProjectCard from '@/components/project-card'
import { client } from '@/lib/sanity'
import groq from 'groq'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import me from '@/public/chill.jpg'

export const revalidate = 60;

export default async function Home({
  params
}: {
  params: { lang: Locale }
}) {

  const { home } = await getDictionary(params.lang)

  const query = groq`*[_type == "project"] | order(_createdAt asc)`
  const data = await client.fetch(query)
  
  
  return (
    <main className="relative min-h-screen w-full md:w-3/6 md:mx-auto px-2 md:px-0 pt-12 mt-12 pb-10 bg-lines">

      <span className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-[0.5px] -z-10 bg-stone-200 dark:bg-stone-900'></span>

      <h1 className='text-5xl font-black'>Estanislao Martinez Lacabe</h1>
      <h3 className='mt-4 text-xl'>{home.subtitle}</h3>
      <p className='mt-8 text-lg font-light dark:text-stone-200'>{home.description}</p>
      <a 
        download='Estanislao Martinez Lacabe CV - Fullstack Developer'
        href='estanislaoMartinezLacabe-CV.pdf'
        className='mt-4 w-full flex justify-center items-center gap-2 hover:underline transition-all'
      ><FileDown size={20} /> {home.downloadCV}  </a>

      <div className='z-10 mt-8 relative w-full h-80 md:h-125 rounded-xl overflow-hidden shadow border border-stone-300'>
        <Image 
          src={me.src}
          blurDataURL={me.blurDataURL}
          placeholder='blur'
          alt='Estanislao Martinez Lacabe - FullStack developer'
          fill  
          className='object-cover object- top-20 '
        />
      </div>

      <div className='mt-16 pt-8'>
        <h2 className='text-3xl font-bold mb-4'>{home.mySkills}</h2>

        <ul className='grid grid-cols-2 md:grid-cols-4 space-y-4 mt-0 uppercase text-sm'>
          <li className='mt-4'>HTML</li>
          <li>CSS</li>
          <li>tailwindcss</li>
          <li>bootstrap</li>
          <li>material ui</li>
          <li>scss</li>
          <li>javascript</li>
          <li>typescript</li>
          <li>react</li>
          <li>vue</li>
          <li>next js</li>
          <li>prisma orm</li>
          <li>sanity</li>
          <li>node</li>
          <li>express</li>
          <li>vercel postgre</li>
        </ul>
      </div>

      <div className='mt-16 pt-8'>
        <h2 className='text-3xl font-bold mb-4'>{home.recentProjects}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {data.sort().slice(0,4).map( (project: Project) => (
            <ProjectCard key={project._id} project={project} lang={params.lang} />
          ))}
        </div>

        <Link className='mt-8 w-full flex justify-center items-center gap-1 hover:gap-2 transition-all' href='/projects/all'>{home.seeMore} <ChevronRight size={16} /> </Link>
      </div>

      <div className='mt-16 pt-8'>
        <h2 className='text-3xl font-bold mb-4'>{home.contact}</h2>

        <div className='grid grid-cols-2'>
          <div className='w-[90%]'>
            <h3 className='text-lg md:text-xl text-stone-600 dark:text-stone-400 font-light'>{home.contactSubtitle}</h3>
          </div>

          <div className='grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2'>
            <a href='https:/linkedin.com/emartinezlacabe' target='_blank' rel='noreferrer' className='flex justify-center items-center gap-2 bg-stone-800 text-white w-[90%] mx-auto rounded-lg border border-stone-900 hover:opacity-90 transition-all shadow font-medium'>
              <Linkedin sizd={16} />
              LinkedIn 
            </a>
            <a href='mailto:emartinezlacabe@gmail.com' target='_blank' rel='noreferrer' className='flex justify-center items-center gap-2 bg-stone-50 text-black w-[90%] mx-auto rounded-lg border border-stone-300 hover:bg-stone-100 transition-all shadow font-medium'>
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        
      </div>

    </main>
  )
}

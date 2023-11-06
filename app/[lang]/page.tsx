import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/interface'
import { ChevronRight, Mail, FileDown } from 'lucide-react'
import ProjectCard from '@/components/project-card'
import { getData } from '@/lib/utils'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'


export default async function Home({
  params
}: {
  params: { lang: Locale }
}) {

  const { navigation } = await getDictionary(params.lang)

  const data = await getData() as Project[]
  
  return (
    <main className="relative min-h-screen w-full md:w-3/6 md:mx-auto pt-12 mt-12 pb-10 after:absolute after:left-0 after:top-0 after:h-full after:w-[189.6px] after:border-x after:-z-10 before:absolute before:border-stone-200 after:border-stone-200 dark:before:border-stone-900 dark:after:border-stone-800 before:right-0 before:top-0 before:h-full before:w-[189.6px] before:border-x before:-z-10">

      <span className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-[0.5px] -z-10 bg-stone-200 dark:bg-stone-900'></span>

      <h1 className='text-5xl font-black'>Estanislao Martinez Lacabe</h1>
      <h3 className='mt-4 text-xl'>I&apos;m <b>Full Stack Developer</b> from Argentina.</h3>
      <p className='mt-8 text-lg font-light dark:text-stone-200'>After 4 years studying Architecture and Design, I decided to change my way and I&apos;m proud it. I found the <b>passion</b> in Business Administration and Programming and thats what I enjoy for living right now.</p>
      <a href='' className='mt-4 w-full flex justify-center items-center gap-2 hover:underline transition-all'><FileDown size={20} /> Download CV  </a>
      <div className='z-10 mt-8 relative w-full h-150 rounded-xl overflow-hidden shadow border border-stone-300'>
        <Image 
          src={'/me.jpg'}
          alt='Estanislao Martinez Lacabe - FullStack developer'
          fill  
          className='object-cover'
        />
        {/* <p className='absolute bottom-1 right-1 p-1 text-white bg-black/10 rounded backdrop-blur-sm text-xs'>Glaciar Perito Moreno, Argentina.</p> */}
      </div>

      <div className='mt-16 pt-8'>
        <h2 className='text-3xl font-bold mb-4'>My Skills.</h2>

        <ul className='grid grid-cols-4 space-y-4 mt-0 uppercase text-sm'>
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
        <h2 className='text-3xl font-bold mb-4'>Recent Projects.</h2>

        <div className='grid grid-cols-2 gap-8'>
          {data.slice(0,4).map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        <Link className='mt-8 w-full flex justify-center items-center gap-1 hover:gap-2 transition-all' href='/projects/all'>See More <ChevronRight size={16} /> </Link>
      </div>

      <div className='mt-16 pt-8'>
        <h2 className='text-3xl font-bold mb-4'>Contact Me.</h2>

        <div className='grid grid-cols-2'>
          <div className='w-[90%]'>
            <h3 className='text-xl font- text-stone-600 dark:text-stone-400 font-light'>Got a question or proposal. Go a head →</h3>
            
          </div>

          <div className='grid grid-cols-2'>
            <a href='https://wa.me/5493434653960' target='_blank' rel='noreferrer' className='flex justify-center items-center gap-2 bg-stone-800 text-white w-[90%] mx-auto rounded-lg border border-stone-900 hover:opacity-90 transition-all shadow font-medium'>
              <Image src={'/whatsapp.svg'} alt='' width={22} height={22} />
              Whatsapp
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

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const filters = [
  {
    name: 'All',
    href: '/all'
  },
  {
    name: 'Javascript',
    href: '/javascript',
  },
  {
    name: 'Typescript',
    href: '/typescript',
  },
  {
    name: 'Next JS',
    href: '/next',
  },
  {
    name: 'Real websites',
    href: '/real',
  },
  {
    name: 'Practise websites',
    href: '/practise',
  },
]


export default function ProjectsLayout({ 
    children ,
    params
} : { 
    children: ReactNode ,
    params: { slug: string }
}) {
    
  return (
    <div className='relative min-h-screen w-full md:w-3/6 md:mx-auto py-10 mt-10 after:absolute after:left-0 after:top-0 after:h-full after:w-[189.6px] after:border-x after:-z-10 before:absolute before:border-stone-200 after:border-stone-200 dark:before:border-stone-900 dark:after:border-stone-800 before:right-0 before:top-0 before:h-full before:w-[189.6px] before:border-x before:-z-10'>
      <span className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-[0.5px] -z-10 bg-stone-200 dark:bg-stone-900'></span>
      <div className='w-full overflow-x-auto flex items-center gap-4 mb-10'>
        { filters.map( ( filter, index) => (
          <Link 
            href={`/projects/${filter.href}`} 
            key={ index } 
            className={cn('text-sm font-bold text-gray-700 dark:text-gray-300 px-2 py-1 bg-stone-100 dark:bg-stone-900 rounded-lg hover:bg-stone-200 active:scale-95 dark:hover:bg-stone-800 transition-all',
              `/${params.slug}` === filter.href && 'bg-stone-800 dark:bg-stone-600 text-white hover:bg-stone-700 dark:hover:bg-stone-500'
            )}
          >
            {filter.name }
          </Link>
        ))}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
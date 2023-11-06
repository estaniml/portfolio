'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import ModeSwitcher from './mode-switcher'
import LocaleSwitcher from './locale-switcher'



interface Props {
    content: {
        home: string
        about: string
        contact: string
        projects: string
    }
}
const Navbar = ({ content } : Props) => {

    const segment = useSelectedLayoutSegment()
    
    const navLinks = [
        {
            name: content.home,
            href: '/',
            value: null
        },
        {
            name: content.projects,
            href: '/projects/all',
            value: 'projects'
        },
        // {
        //     name: 'Contact',
        //     href: '/contact'
        // },
    ]

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm text-black dark:text-white h-12 px-2 md:px-[25%] flex items-center justify-between">
        <div className='flex items-center gap-2'>
            {/* <Sun size={16} /> */}
            <Link href={'/'} className='font-bold text-xl'>EML</Link>
        </div>

        <div className='flex items-center gap-4 text-sm'>
            { navLinks.map( (navLink, index) => (
                <Link 
                    href={navLink.href}
                    key={index}
                    className={ segment === navLink.value ? 'font-bold border-b-[1px] border-emerald-300' : 'border-b border-transparent' }
                >{navLink.name}</Link>
            ))}
        </div>

        {/* <div className='flex items-center gap-2 text-xs'>
            <Link href={'/en'}>EN</Link>
            <span className='w-px h-4 bg-black'></span>
            <Link href={'/es'}>ES</Link>
        </div> */}
        <div className='flex items-center gap-4'>
            <ModeSwitcher />
            <LocaleSwitcher />
        </div>
    </nav>
  )
}

export default Navbar
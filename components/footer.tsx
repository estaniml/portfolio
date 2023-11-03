import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const links = [
    {
        name: 'About',
        href: '/'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
]

const Footer = () => {
  return (
    <footer className='border-t border-stone-300 dark:border-stone-700 w-full md:w-3/6 md:mx-auto py-8 mt-12 flex items-center justify-between text-sm font-light'>
        {/* <div className='flex flex-col gap-4 text-sm'>
            { links.map( (link, index) => (
                <Link href={link.href} key={index}>{link.name}</Link>
            ))}
        </div> */}
        <div>
            <p>Website built with <b>Next JS</b>, <b>Taiwlind</b> and <b>Sanity</b></p>
        </div>

        <div className='flex items-center gap-6 text-stone-700 dark:text-stone-300'>
            <a target='_blank' rel='noreferrer' href="https://github.com/estaniml"className='p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-all'>
                <Github size={18} />
            </a>
            <a target='_blank' rel='noreferrer' href="https://linkedin.com/estaniml" className='p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-all'>
                <Linkedin size={18} />
            </a>
            <a target='_blank' rel='noreferrer' href="https://x.com" className='p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-all'>
                <Twitter size={18} />
            </a>
        </div>
    </footer>
  )
}

export default Footer
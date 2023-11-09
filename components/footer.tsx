
import { Github, Linkedin, Twitter, SquareCode } from 'lucide-react'


const Footer = ({ content } : { content: { footer: string }}) => {
  return (
    <footer className='border-t border-stone-300 dark:border-stone-700 w-full md:w-3/6 md:mx-auto py-6 mt-12 flex flex-col gap-4 md:flex-row items-center justify-between text-sm font-light'>
        <p className='text-xs w-full md:w-1/2 text-center md:text-left'>{content.footer}</p>

        <div className='flex items-center gap-4 text-stone-700 dark:text-stone-300'>
            <a target='_blank' rel='noreferrer' href="https://github.com/estaniml/portfolio"className='p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-all'>
                <SquareCode size={18} />
            </a>
            <a target='_blank' rel='noreferrer' href="https://github.com/estaniml"className='p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-all'>
                <Github size={18} />
            </a>
            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/emartinezlacabe/" className='p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-all'>
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
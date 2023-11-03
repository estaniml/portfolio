'use client'
import { cn } from '@/lib/utils'
import { Moon, PcCase, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ModeSwitcher = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }

  return (
    <div className='flex items-center border-stone-700 dark:border-stone-300 w-6 h-6'>
        <button  
            onClick={() => setTheme("dark")} 
            className={cn('hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg p-1 active:scale-90 transition-all', theme === 'system' ? 'flex opacity-100' : 'hidden opacity-0')}
        ><PcCase size={16} /></button>
        <button 
            onClick={() => setTheme("dark")} 
            className={cn('hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg p-1 active:scale-90 transition-all', theme === 'light' ? 'flex opacity-100' : 'hidden opacity-0')}
        ><Sun size={16} /></button>
        <button 
            onClick={() => setTheme("light")}
            className={cn('hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg p-1 active:scale-90 transition-all', theme === 'dark' ? 'flex opacity-100' : 'hidden opacity-0')}
        ><Moon size={16} /></button>
    </div>
  )
}

export default ModeSwitcher
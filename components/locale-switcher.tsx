'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale  
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-2 font-cal text-sm uppercase'>
      {i18n.locales.map(locale =>  {
        if( pathName.includes(locale) ) return
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={ pathName === `/${locale}` || pathName.includes(locale) ? 'hidden opacity-0' : ' hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg p-1 active:scale-90 transition-all'}
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
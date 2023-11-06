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
    <ul className='flex gap-x-2 font-cal text-xs uppercase'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={ pathName === `/${locale}` || pathName.includes(locale) ? 'p-1.5 bg-stone-100 dark:bg-stone-900 pt-2' : ' p-1.5 bg-stone-100 dark:bg-stone-900 pt-2 text-stone-500'}
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
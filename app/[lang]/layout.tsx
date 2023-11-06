import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans, GeistMono } from 'geist/font'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Web Developer - Estanislao Martinez Lacabe",
  description: "I'm Fullstack web developer from Argentina :) . I love to build websites with Next.JS and Tailwind CSS",
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {
    lang: Locale
  }
}) {

  const { navigation } = await getDictionary(params.lang)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable} bg-white dark:bg-stone-950 text-black dark:text-white`}>
        <ThemeProvider>
          <Navbar content={navigation} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

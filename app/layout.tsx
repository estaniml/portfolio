import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans, GeistMono } from 'geist/font'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Web Developer - Estanislao Martinez Lacabe",
  description: "I'm Fullstack web developer from Argentina :) . I love to build websites with Next.JS and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable} bg-white dark:bg-stone-950 text-black dark:text-white`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

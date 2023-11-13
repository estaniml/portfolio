import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

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
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

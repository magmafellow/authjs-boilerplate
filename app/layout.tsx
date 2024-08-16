import type { Metadata } from 'next'
import { Providers } from './ui/providers'
import { Inter } from 'next/font/google'
import './globals.css'
import { roboto } from './ui/fonts/roboto'

export const runtime = 'nodejs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carcass for further apps',
  description:
    'There are pretty prebuilt auth solution(signup login DTO DLA), some fonts optimazed, ready, theme toggler(dark light)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} container mx-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

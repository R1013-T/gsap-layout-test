import './globals.css'

import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'
import PageBorder from '@/components/page-border'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TCA ECO 学園祭 2024',
  description: 'TCA ECO 学園祭 2024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          notoSansJP.className,
          'h-dvh overflow-y-auto bg-primary p-1 font-sans font-bold antialiased',
        )}
      >
        <PageBorder />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'v-babes',
  description: 'iLoveYoulikeiloveYou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Discord App',
  description: 'Chat and enjoy with your friends and Teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <h1 className='text-3xl text-blue-800'>my heading</h1>
        {children}
        </body>
    </html>
  )
}

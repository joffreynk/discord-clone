import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from '@/components/providers/theme-provider';

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${font.className} `}>
          <div className="max-w-[1336px] mx-auto">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              storageKey="discord-theme"
            >
              {children}
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

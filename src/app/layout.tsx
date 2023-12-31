import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '600', '500', '800'],
})

export const metadata = {
  title: 'Leadster',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

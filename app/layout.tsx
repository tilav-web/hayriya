import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Panteleymon',
  description: 'Panteleymon',
  generator: 'Tilav',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>{children}</>
  )
}

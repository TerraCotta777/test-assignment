import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import Header from '@/components/header/Header'

const inter = Inter({
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yoldi - разработка сайтов, масштабных сервисов и приложений',
  description:
    'От идеи до первого клиента. Брендинг, Дизайн, Верстка, Программирование. Проекты любой сложности на Java/Kotlin и других языках.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

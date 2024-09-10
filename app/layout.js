import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mehmet Şahin Gezgin',
  description: 'Mehmet Şahin\'in seyahat deneyimlerini paylaştığı web site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 flex flex-col min-h-screen`}>
        <Providers>
          <Navbar />
          <main className="flex-grow bg-white dark:bg-gray-900 pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

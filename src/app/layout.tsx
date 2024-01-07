import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { MuiSetup } from '../../utils/MuiSetup'
import SessionProvider from '@/components/SessionProvider'
import { Session } from 'next-auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather App',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: Session | null

}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ToastContainer/>
          <MuiSetup >{children}</MuiSetup>

        </SessionProvider>
      </body>
    </html>
  )
}

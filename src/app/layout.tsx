import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJanjuree,
} from 'next/font/google'
import { cookies } from 'next/headers'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { Signin } from '@/components/Signin'
import { Copyright } from '@/components/Copyright'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJanjuree = BaiJanjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-janjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJanjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className=" grid min-h-screen grid-cols-2">
          {/* left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* blue */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            {/* stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <Signin />}

            <Hero />

            <Copyright />
          </div>

          {/* left */}
          <div className="flex max-h-screen flex-col overflow-y-auto bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

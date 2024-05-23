import dynamic from 'next/dynamic'
import { Noto_Sans_KR } from 'next/font/google'
import { ReactNode } from 'react'

import RecoilWrapper from '@util/recoilWrapper'

import type { Metadata } from 'next'

import '@assets/reset.css'
import '@assets/theme.css'
import '@assets/globals.css'
import '@assets/typography.css'

const AppBar = dynamic(() => import('@app/(main)/appbar'))
const StyledComponentsRegistry = dynamic(() => import('@/util/registry'))

const nextFont = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: 'normal',
  fallback: [
    'Inter',
    'system-ui',
    'Avenir',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: '(24-04-08) 장비설명회.web',
  description: '마지막 업뎃:24-04-08. 페파플 설명 변경.',
  applicationName: '장비설명회 Web',
  keywords: ['azurlane', '벽람항로', '장비설명회'],
  icons: {
    icon: '/assets/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={nextFont.className}>
        <StyledComponentsRegistry>
          <RecoilWrapper>
            <AppBar />
            {children}
          </RecoilWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

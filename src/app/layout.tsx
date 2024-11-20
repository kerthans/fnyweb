// src/app/layout.tsx
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AIAssistant from '@/components/ui/AIAssistant'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '福能源健康 - 专业的健康管理服务提供商',
  description: '福能源致力于为客户提供专业的健康管理服务，通过科技创新和专业团队，帮助您实现健康生活。',
  keywords: '健康管理,营养规划,运动指导,健康咨询,企业健康',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <AIAssistant />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
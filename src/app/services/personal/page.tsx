// src/app/page.tsx
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const Contact = dynamic(() => import('@/components/sections/Contact'))
// const TrustIndicators =dynamic(() => import('@/components/sections/TrustIndicators'))

export default function Home() {
  return (
    <main>
      <Testimonials />
      <Contact />
    </main>
  )
}
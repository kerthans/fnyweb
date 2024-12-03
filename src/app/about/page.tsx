// src/app/page.tsx
import dynamic from 'next/dynamic'

const Features = dynamic(() => import('@/components/sections/Features'))
// const TrustIndicators =dynamic(() => import('@/components/sections/TrustIndicators'))

export default function Home() {
  return (
    <main>
      {/* <TrustIndicators /> */}
      <Features />
    </main>
  )
}
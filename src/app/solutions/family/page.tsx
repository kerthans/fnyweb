// src/app/page.tsx
import dynamic from 'next/dynamic'

const Products = dynamic(() => import('@/components/sections/Products'))
// const TrustIndicators =dynamic(() => import('@/components/sections/TrustIndicators'))

export default function Home() {
  return (
    <main>
      <Products />
    </main>
  )
}
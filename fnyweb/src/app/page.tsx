// src/app/page.tsx
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/sections/Hero'))
const Features = dynamic(() => import('@/components/sections/Features'))
const Products = dynamic(() => import('@/components/sections/Products'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  )
}
// src/components/ui/scroll-to-top.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      className="fixed bottom-20 right-6 z-40 rounded-full w-12 h-12 bg-primary/90 hover:bg-primary shadow-lg"
      onClick={scrollToTop}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  )
}
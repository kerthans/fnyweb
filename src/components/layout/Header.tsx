'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

// 系统配置
const SYSTEM_CONFIG = {
  brand: {
    name: "福能源健康",
    logo: "/logo.png",
    slogan: "守护每个生命的活力"
  },
  contact: {
    phone: "400-888-9999",
    consultation: "免费咨询"
  }
}

// 简化的导航配置
const navigation = [
  {
    title: "首页",
    href: "#hero"
  },
  {
    title: "特色服务",
    href: "#features"
  },
  {
    title: "产品介绍",
    href: "#products"
  },
  {
    title: "客户评价",
    href: "#testimonials"
  },
  {
    title: "联系我们",
    href: "#contact"
  }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<Element, MouseEvent>, 
    href: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* 品牌标识区 */}
          <a 
            href="#hero"
            className="flex items-center space-x-4 group"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
          >
            <img 
              src={SYSTEM_CONFIG.brand.logo} 
              alt={SYSTEM_CONFIG.brand.name}
              className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold gradient-primary">
                {SYSTEM_CONFIG.brand.name}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                {SYSTEM_CONFIG.brand.slogan}
              </span>
            </div>
          </a>

          {/* 桌面端导航 */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* 联系咨询按钮 */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:block">
                <p className="text-xs text-muted-foreground">咨询热线</p>
                <p className="text-sm font-medium">{SYSTEM_CONFIG.contact.phone}</p>
              </div>
              <Button 
                className="cta-button"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                {SYSTEM_CONFIG.contact.consultation}
              </Button>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </Button>
        </div>

        {/* 移动端导航菜单 */}
        <div className={`
          lg:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-sm
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <nav className="container px-4 pt-4 pb-8 h-[calc(100vh-5rem)] overflow-y-auto">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center px-2 py-3 text-base hover:text-primary border-b border-border"
              >
                {item.title}
              </a>
            ))}
            <div className="mt-6 px-2">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground">咨询热线</p>
                <p className="text-lg font-medium">{SYSTEM_CONFIG.contact.phone}</p>
              </div>
              <Button 
                className="w-full cta-button" 
                size="lg"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                {SYSTEM_CONFIG.contact.consultation}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
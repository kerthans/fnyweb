'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Activity, Apple, Users, MessageCircle, CircleUserRound, HeartPulse } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// 系统配置与内容管理
const SYSTEM_CONFIG = {
  brand: {
    name: "福能源健康",
    // logo: "/logo.svg", // 后续替换为实际logo
    slogan: "守护每个生命的活力"
  },
  contact: {
    phone: "400-888-9999",
    consultation: "免费咨询"
  }
}

// 导航结构配置
const navigation = [
  {
    title: "健康服务",
    featured: true,
    items: [
      {
        title: "个人健康管理",
        href: "/services/personal",
        description: "定制专属健康管理方案",
        icon: HeartPulse
      },
      {
        title: "科学营养规划",
        href: "/services/nutrition",
        description: "平衡营养，健康生活",
        icon: Apple
      },
      {
        title: "运动健康指导",
        href: "/services/fitness",
        description: "专业运动指导与康复",
        icon: Activity
      }
    ]
  },
  {
    title: "解决方案",
    items: [
      {
        title: "企业健康管理",
        href: "/solutions/enterprise",
        description: "提升企业健康管理水平",
        icon: Users
      },
      {
        title: "家庭健康服务",
        href: "/solutions/family",
        description: "呵护全家健康生活",
        icon: Heart
      }
    ]
  },
  {
    title: "关于我们",
    href: "/about",
    icon: CircleUserRound
  },
  {
    title: "联系我们",
    href: "/contact",
    icon: MessageCircle
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
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <HeartPulse className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-lg font-bold gradient-primary">
                {SYSTEM_CONFIG.brand.name}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                {SYSTEM_CONFIG.brand.slogan}
              </span>
            </div>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger 
                          className={`${
                            item.featured ? 'text-primary font-medium' : ''
                          }`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-start space-x-4 rounded-lg p-3 hover:bg-muted transition-colors"
                                  >
                                    <subItem.icon className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                      <div className="font-medium mb-1">
                                        {subItem.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground leading-snug">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link 
                        href={item.href}
                        className="flex items-center px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* 联系咨询按钮 */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:block">
                <p className="text-xs text-muted-foreground">咨询热线</p>
                <p className="text-sm font-medium">{SYSTEM_CONFIG.contact.phone}</p>
              </div>
              <Button 
                className="cta-button"
                onClick={() => window.location.href = '/consultation'}
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
              <div key={item.title} className="py-2">
                {item.items ? (
                  <div className="space-y-3">
                    <div className="font-medium text-lg px-2 py-2 text-primary">
                      {item.title}
                    </div>
                    <div className="grid gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center space-x-3 px-2 py-3 rounded-lg hover:bg-muted"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <subItem.icon className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">{subItem.title}</div>
                            <p className="text-sm text-muted-foreground">
                              {subItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-2 py-3 text-base hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 px-2">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground">咨询热线</p>
                <p className="text-lg font-medium">{SYSTEM_CONFIG.contact.phone}</p>
              </div>
              <Button className="w-full cta-button" size="lg">
                {SYSTEM_CONFIG.contact.consultation}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
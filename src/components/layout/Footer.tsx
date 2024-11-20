// src/components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send,
  PhoneCall,
  Mail,
  MapPin,
  Clock
} from 'lucide-react'

const navigation = {
  solutions: [
    { name: '个人健康管理', href: '/solutions/personal' },
    { name: '企业健康管理', href: '/solutions/enterprise' },
    { name: '家庭健康管理', href: '/solutions/family' },
    { name: '专业运动指导', href: '/solutions/fitness' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '发展历程', href: '/history' },
    { name: '新闻动态', href: '/news' },
    { name: '加入我们', href: '/careers' },
  ],
  support: [
    { name: '帮助中心', href: '/help' },
    { name: '服务条款', href: '/terms' },
    { name: '隐私政策', href: '/privacy' },
    { name: '常见问题', href: '/faq' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
  contact: [
    {
      icon: PhoneCall,
      title: '客服热线',
      content: '400-888-9999',
      description: '周一至周日 9:00-18:00'
    },
    {
      icon: Mail,
      title: '商务合作',
      content: 'business@fny.com',
      description: '期待您的邮件'
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '深圳市南山区科技园',
      description: '总部基地'
    },
    {
      icon: Clock,
      title: '服务时间',
      content: '全天24小时',
      description: '随时为您服务'
    }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              订阅我们的健康资讯
            </h3>
            <p className="text-slate-400 mb-6">
              定期获取最新的健康知识和活动信息
            </p>
            <div className="flex space-x-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="输入您的邮箱"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button>
                <Send className="w-4 h-4 mr-2" />
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-slate-800">
          {navigation.contact.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-400 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-lg mb-1">{item.content}</p>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/fny_logo.png"
                alt="福能源Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold">福能源健康</span>
            </div>
            <p className="text-slate-400 mb-6">
              致力于为客户提供专业的健康管理服务，
              让每个人都能享受科学、健康的生活方式。
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">解决方案</h3>
            <ul className="space-y-4">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">公司介绍</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">帮助支持</h3>
            <ul className="space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} 福能源健康集团. 保留所有权利.
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-primary">
              隐私政策
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-primary">
              服务条款
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
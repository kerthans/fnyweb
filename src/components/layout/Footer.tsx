'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  HeartPulse, // 健康核心
  Stethoscope, // 专业医疗
  Brain, // 智慧科技
  UsersRound, // 服务人群
  Sparkles, // 创新
  Clock, // 时间
  Mail, // 邮件
  MapPin, // 地址
  Phone, // 电话
  ScrollText, // 资质
  GraduationCap, // 教育
  Activity, // 活力
  Shield, // 安全
  Award, // 认证
  ChefHat, // 营养
  Workflow, // 流程
  HandHeart, // 关爱
  Send, // 发送
  BookOpen, // 知识
  MessageSquareText, // 咨询
  Siren, // 紧急
  Tree, // 生命
  FileHeart, // 健康档案
  Scale, // 平衡
  Leaf // 自然
} from 'lucide-react'

// 企业核心信息配置
const COMPANY_INFO = {
  name: '福能源健康科技',
  shortName: '福能源健康',
  slogan: '科技守护健康 智慧改变生活',
  description: '专注于智慧健康管理领域的创新型科技企业，致力于通过人工智能、大数据等前沿技术，为用户提供个性化的健康管理解决方案。',
  registration: '国家高新技术企业',
  founded: '2010',
  certifications: [
    'ISO9001质量管理体系认证',
    'ISO27001信息安全管理体系认证',
    'CMMI5级认证',
    '医疗器械生产许可证'
  ],
  mission: '让每个人都能享有优质的健康管理服务',
  vision: '成为全球领先的智慧健康科技企业',
  values: '专业 | 创新 | 责任 | 关爱'
}

// 服务承诺
const SERVICE_COMMITMENTS = [
  {
    icon: Shield,
    title: '安全可靠',
    description: '数据安全加密，隐私严格保护'
  },
  {
    icon: Activity,
    title: '专业权威',
    description: '顶级专家团队，科学服务体系'
  },
  {
    icon: Sparkles,
    title: '持续创新',
    description: '技术不断进步，服务持续优化'
  },
  {
    icon: HandHeart,
    title: '用心服务',
    description: '全程贴心陪伴，用心解决问题'
  }
]

// 解决方案
const SOLUTIONS = [
  {
    icon: FileHeart,
    name: '个人健康管理',
    href: '/solutions/personal',
    description: '科学评估·个性方案·全程跟进',
    features: ['健康评估', '运动指导', '饮食建议', '睡眠管理']
  },
  {
    icon: UsersRound,
    name: '企业健康管理',
    href: '/solutions/enterprise',
    description: '员工关爱·健康福利·团队活力',
    features: ['健康体检', '心理关怀', '团建活动', '健康讲座']
  },
  {
    icon: Brain,
    name: '智慧医疗服务',
    href: '/solutions/medical',
    description: 'AI诊断·远程问诊·快速响应',
    features: ['AI筛查', '专家问诊', '用药指导', '随访管理']
  },
  {
    icon: ChefHat,
    name: '营养健康服务',
    href: '/solutions/nutrition',
    description: '均衡饮食·营养规划·健康烹饪',
    features: ['营养评估', '膳食指导', '食谱推荐', '营养课堂']
  }
]

// 客服支持信息
const SUPPORT_INFO = {
  service: {
    general: {
      hours: '09:00-22:00',
      phone: '400-888-9999',
      email: 'service@fnyhealth.com'
    },
    emergency: {
      hours: '24小时',
      phone: '400-999-9999'
    },
    online: {
      hours: '24/7全天候',
      platforms: ['微信', '支付宝', 'APP']
    }
  },
  business: {
    cooperation: {
      email: 'business@fnyhealth.com',
      phone: '0755-88889999'
    },
    hours: '工作日 09:00-18:00'
  },
  locations: {
    headquarters: {
      city: '深圳市',
      address: '南山区科技园科技中路1号科发大厦21层',
      postcode: '518057'
    },
    branches: ['北京', '上海', '广州', '成都', '武汉']
  }
}

// 企业资质与荣誉
const ACHIEVEMENTS = [
  '国家高新技术企业',
  '互联网医院牌照',
  '医疗器械经营许可证',
  '中国数字健康50强',
  '年度健康科技创新企业',
  '用户满意度五星级企业'
]

// 底部导航
const FOOTER_NAVIGATION = {
  solutions: [
    { name: '个人健康管理', href: '/solutions/personal', description: '科学评估 个性方案' },
    { name: '企业健康管理', href: '/solutions/enterprise', description: '员工关怀 团队活力' },
    { name: '智慧医疗服务', href: '/solutions/medical', description: 'AI诊断 专家问诊' },
    { name: '营养健康服务', href: '/solutions/nutrition', description: '均衡饮食 科学膳食' },
    { name: '心理健康服务', href: '/solutions/mental', description: '情绪疏导 心理关怀' },
    { name: '健康大数据', href: '/solutions/data', description: '数据分析 健康洞察' }
  ],
  resources: [
    { name: '健康资讯', href: '/resources/news', description: '最新动态 专业观点' },
    { name: '健康百科', href: '/resources/wiki', description: '专业知识 科普阅读' },
    { name: '专家专栏', href: '/resources/experts', description: '权威解读 经验分享' },
    { name: '研究报告', href: '/resources/reports', description: '行业洞察 趋势分析' },
    { name: '健康工具', href: '/resources/tools', description: '在线评估 自测工具' }
  ],
  company: [
    { name: '关于我们', href: '/about', description: '企业介绍 发展历程' },
    { name: '企业文化', href: '/culture', description: '使命愿景 核心价值' },
    { name: '团队介绍', href: '/team', description: '专家团队 技术力量' },
    { name: '伙伴合作', href: '/partners', description: '合作伙伴 共创共赢' },
    { name: '加入我们', href: '/careers', description: '职业发展 福利待遇' }
  ],
  support: [
    { name: '服务中心', href: '/service', description: '服务介绍 预约咨询' },
    { name: '帮助中心', href: '/help', description: '常见问题 操作指南' },
    { name: '意见反馈', href: '/feedback', description: '问题反馈 建议提交' },
    { name: '联系我们', href: '/contact', description: '联系方式 留言咨询' }
  ],
  legal: [
    { name: '用户协议', href: '/terms' },
    { name: '隐私政策', href: '/privacy' },
    { name: '服务条款', href: '/service-terms' },
    { name: '免责声明', href: '/disclaimer' }
  ]
}

// 联系方式组件
const ContactItem = ({ icon: Icon, title, content, description, time, className = '' }) => (
  <div className={`group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-800/20 
    hover:from-slate-800/60 hover:to-slate-800/40 backdrop-blur-lg transition-all duration-300 ${className}`}>
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80 
        flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-medium text-sm text-slate-400 mb-1">{title}</h4>
        <p className="text-lg font-semibold mb-1 gradient-primary">{content}</p>
        <p className="text-sm text-slate-400">{description}</p>
        {time && (
          <p className="text-xs text-slate-500 mt-2">服务时间: {time}</p>
        )}
      </div>
    </div>
  </div>
)

// Newsletter订阅组件
const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // 模拟订阅请求
    await new Promise(resolve => setTimeout(resolve, 1000))
    setEmail('')
    setIsLoading(false)
  }

  return (
    <div className="py-16 border-b border-slate-800/50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">每周精选健康资讯</span>
        </div>
        <br />
        <h3 className="text-3xl font-bold mb-4 gradient-primary">
          订阅健康生活周刊
        </h3>
        <p className="text-slate-400 mb-8 text-lg">
          定期获取专业的健康知识、精选资讯、活动预告及独家优惠
        </p>
        <form onSubmit={handleSubscribe} className="flex space-x-3 max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入您的邮箱地址"
            className="h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            required
          />
          <Button 
            type="submit"
            disabled={isLoading}
            className="px-6 h-12 cta-button"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                订阅中
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                免费订阅
              </>
            )}
          </Button>
        </form>
        <p className="text-xs text-slate-500 mt-4">
          我们承诺保护您的个人信息，您可以随时取消订阅
        </p>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Newsletter Section */}
        <Newsletter />

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 border-b border-slate-800/50">
          <ContactItem 
            icon={Phone}
            title="24小时健康咨询"
            content={SUPPORT_INFO.service.general.phone}
            description="专业医师团队在线服务"
            time={SUPPORT_INFO.service.general.hours}
          />
          <ContactItem 
            icon={MessageSquareText}
            title="在线咨询平台"
            content="智能问诊系统"
            description="AI辅助 | 专家支持"
            time={SUPPORT_INFO.service.online.hours}
          />
          <ContactItem 
            icon={Mail}
            title="商务合作咨询"
            content={SUPPORT_INFO.business.cooperation.email}
            description="诚邀合作 | 共创共赢"
            time={SUPPORT_INFO.business.hours}
          />
          <ContactItem 
            icon={Siren}
            title="紧急求助热线"
            content={SUPPORT_INFO.service.emergency.phone}
            description="紧急情况 | 快速响应"
            time={SUPPORT_INFO.service.emergency.hours}
          />
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6 space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png" // 确保替换为实际的logo路径
                  alt={COMPANY_INFO.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-primary">
                  {COMPANY_INFO.shortName}
                </span>
                <p className="text-sm text-slate-400 mt-1">
                  {COMPANY_INFO.registration}
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <div className="space-y-4">
              {SERVICE_COMMITMENTS.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-300">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-500 ml-2">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 gradient-primary">
              解决方案
            </h3>
            <ul className="space-y-4">
              {FOOTER_NAVIGATION.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex flex-col text-slate-400 hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-500 group-hover:text-primary/70 transition-colors">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 gradient-primary">
              健康资源
            </h3>
            <ul className="space-y-4">
              {FOOTER_NAVIGATION.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex flex-col text-slate-400 hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-500 group-hover:text-primary/70 transition-colors">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 gradient-primary">
              关于我们
            </h3>
            <ul className="space-y-4">
              {FOOTER_NAVIGATION.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex flex-col text-slate-400 hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-500 group-hover:text-primary/70 transition-colors">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 gradient-primary">
              服务支持
            </h3>
            <ul className="space-y-4">
              {FOOTER_NAVIGATION.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex flex-col text-slate-400 hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-500 group-hover:text-primary/70 transition-colors">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-slate-800/50">
          <div className="flex flex-wrap gap-4 mb-6">
            {COMPANY_INFO.certifications.map((cert, index) => (
              <div 
                key={index}
                className="inline-flex items-center space-x-2 bg-slate-800/30 px-3 py-1.5 rounded-full"
              >
                <ScrollText className="w-4 h-4 text-primary" />
                <span className="text-sm text-slate-400">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-slate-400">
              <span>© {new Date().getFullYear()} {COMPANY_INFO.name}</span>
              <span className="hidden md:inline">|</span>
              <span>成立于 {COMPANY_INFO.founded}</span>
              <span className="hidden md:inline">|</span>
              <span>{COMPANY_INFO.values}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {FOOTER_NAVIGATION.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
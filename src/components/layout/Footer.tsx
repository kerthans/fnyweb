'use client'

// import { useState } from 'react'
import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { 
  Sparkles,
  // Mail,
  // Phone,
  // ScrollText,
  Activity,
  Shield,
  HandHeart,
  // Send,
  // MessageSquareText,
  // Siren,
} from 'lucide-react'

// 简化的企业信息
const COMPANY_INFO = {
  name: '福能源健康科技',
  shortName: '福能源健康',
  slogan: '科技守护健康 智慧改变生活',
  description: '专注于智慧健康管理领域的创新型科技企业，致力于通过人工智能、大数据等前沿技术，为用户提供个性化的健康管理解决方案。',
  registration: '国家高新技术企业',
  founded: '2010',
  values: '专业 | 创新 | 责任 | 关爱'
}

// 简化的服务承诺
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

// 简化的联系信息
// const CONTACT_INFO = {
//   service: {
//     phone: '400-888-9999',
//     hours: '09:00-22:00',
//     email: 'service@fnyhealth.com'
//   },
//   emergency: {
//     phone: '400-999-9999',
//     hours: '24小时'
//   }
// }

// 单页导航
const PAGE_SECTIONS = [
  { name: '首页', href: '#hero' },
  { name: '特色服务', href: '#features' },
  { name: '产品介绍', href: '#products' },
  { name: '联系我们', href: '#contact' }
]

// 联系方式组件
// const ContactItem = ({ icon: Icon, title, content, description, time }) => (
//   <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-800/20 
//     hover:from-slate-800/60 hover:to-slate-800/40 backdrop-blur-lg transition-all duration-300">
//     <div className="flex items-start space-x-4">
//       <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80 
//         flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//         <Icon className="w-6 h-6 text-white" />
//       </div>
//       <div>
//         <h4 className="font-medium text-sm text-slate-400 mb-1">{title}</h4>
//         <p className="text-lg font-semibold mb-1 gradient-primary">{content}</p>
//         <p className="text-sm text-slate-400">{description}</p>
//         {time && (
//           <p className="text-xs text-slate-500 mt-2">服务时间: {time}</p>
//         )}
//       </div>
//     </div>
//   </div>
// )

// 简化版Newsletter组件
// const Newsletter = () => {
//   const [email, setEmail] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubscribe = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     setEmail('')
//     setIsLoading(false)
//   }

//   return (
//     <div className="py-12 border-b border-slate-800/50">
//       <div className="max-w-3xl mx-auto text-center">
//         <h3 className="text-3xl font-bold mb-4 gradient-primary">
//           订阅健康生活周刊
//         </h3>
//         <p className="text-slate-400 mb-6">
//           定期获取专业的健康知识、精选资讯及独家优惠
//         </p>
//         <form onSubmit={handleSubscribe} className="flex space-x-3 max-w-md mx-auto">
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="请输入您的邮箱地址"
//             className="h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
//             required
//           />
//           <Button 
//             type="submit"
//             disabled={isLoading}
//             className="px-6 h-12 cta-button"
//           >
//             {isLoading ? '订阅中...' : (
//               <>
//                 <Send className="w-5 h-5 mr-2" />
//                 订阅
//               </>
//             )}
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Newsletter Section */}
        {/* <Newsletter /> */}

        {/* Contact Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          <ContactItem 
            icon={Phone}
            title="健康咨询热线"
            content={CONTACT_INFO.service.phone}
            description="专业医师团队在线服务"
            time={CONTACT_INFO.service.hours}
          />
          <ContactItem 
            icon={Siren}
            title="24小时紧急热线"
            content={CONTACT_INFO.emergency.phone}
            description="紧急情况快速响应"
            time={CONTACT_INFO.emergency.hours}
          />
        </div> */}

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-800/50">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6 space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
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
          </div>

          {/* Service Commitments */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 gradient-primary">服务承诺</h3>
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

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 gradient-primary">快速导航</h3>
            <div className="grid grid-cols-2 gap-4">
              {PAGE_SECTIONS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} {COMPANY_INFO.name} | 成立于 {COMPANY_INFO.founded}
            </div>
            <div className="text-sm text-slate-400">
              {COMPANY_INFO.values}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
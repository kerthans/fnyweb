import React from 'react'
import { Card } from "@/components/ui/card"
import {
  Brain,
  Heart,
  Microscope,
  Leaf,
  Building2,
  Factory,
  GraduationCap,
  Sparkles,
  LucideIcon,
  TestTubes
} from 'lucide-react'

// 类型定义
interface CoreMetrics {
  COMPANY_AGE: string
  EMPLOYEE_COUNT: string
  SUBSIDIARIES: string
  RESEARCH_PARTNERS: string
}

interface Certifications {
  TECH: string
  LAB: string
  HIGHTECH: string
  POSTDOC: string
}

interface Feature {
  Icon: LucideIcon
  title: string
  description: string
  metrics: string
  metricsLabel: string
  cert: string
  color: string
  bg: string
  gradientFrom: string
  gradientTo: string
  delay: number
}

// 核心数据
const CORE_METRICS: CoreMetrics = {
  COMPANY_AGE: '30+',
  EMPLOYEE_COUNT: '20000+',
  SUBSIDIARIES: '37+',
  RESEARCH_PARTNERS: '20+'
}

// 资质认证
const CERTIFICATIONS: Certifications = {
  TECH: '国家企业技术中心',
  LAB: '省级重点实验室',
  HIGHTECH: '高新技术企业',
  POSTDOC: '国家级博士后科研工作站'
}

// 特性配置
const features: Feature[] = [
  {
    Icon: Brain,
    title: "研发创新",
    description: "国家企业技术中心、省级院士工作站，70余项国家省部级研发创新项目",
    metrics: "70+",
    metricsLabel: "创新项目",
    cert: CERTIFICATIONS.TECH,
    color: "text-primary",
    bg: "bg-primary/5",
    gradientFrom: "from-primary/10",
    gradientTo: "to-primary/5",
    delay: 0.1
  },
  {
    Icon: Factory,
    title: "产业规模",
    description: "集科、工、贸为一体的大健康产业集团，连续13年上榜中国医药工业百强",
    metrics: "13年",
    metricsLabel: "百强企业",
    cert: "中国医药工业百强",
    color: "text-blue-500",
    bg: "bg-blue-50",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-blue-500/5",
    delay: 0.2
  },
  {
    Icon: TestTubes,
    title: "生物医药",
    description: "建有药用美洲大蠊重点实验室，四川省药用动物工程技术研究中心",
    metrics: "4家",
    metricsLabel: "高新技术企业",
    cert: CERTIFICATIONS.LAB,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    gradientFrom: "from-emerald-500/10",
    gradientTo: "to-emerald-500/5",
    delay: 0.3
  },
  {
    Icon: Building2,
    title: "产业布局",
    description: "业务覆盖医药工业、商业、研发、医疗、中药材种养殖等七大板块",
    metrics: CORE_METRICS.SUBSIDIARIES,
    metricsLabel: "子公司",
    cert: "全国性产业布局",
    color: "text-amber-500",
    bg: "bg-amber-50",
    gradientFrom: "from-amber-500/10",
    gradientTo: "to-amber-500/5",
    delay: 0.4
  },
  {
    Icon: GraduationCap,
    title: "产学研合作",
    description: "与上海交大、浙大等20多所高校科研院所建立产学研合作",
    metrics: CORE_METRICS.RESEARCH_PARTNERS,
    metricsLabel: "合作院校",
    cert: CERTIFICATIONS.POSTDOC,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    gradientFrom: "from-indigo-500/10",
    gradientTo: "to-indigo-500/5",
    delay: 0.5
  },
  {
    Icon: Microscope,
    title: "科研实力",
    description: "拥有国家级博士后工作站、省级院士工作站等高水平研发平台",
    metrics: "100+",
    metricsLabel: "专家团队",
    cert: "省级院士工作站",
    color: "text-violet-500",
    bg: "bg-violet-50",
    gradientFrom: "from-violet-500/10",
    gradientTo: "to-violet-500/5",
    delay: 0.6
  },
  {
    Icon: Leaf,
    title: "绿色产业",
    description: "建设现代化中药材种养殖基地，打造农业产业化国家重点龙头企业",
    metrics: "1家",
    metricsLabel: "龙头企业",
    cert: "农业产业化国家重点",
    color: "text-green-500",
    bg: "bg-green-50",
    gradientFrom: "from-green-500/10",
    gradientTo: "to-green-500/5",
    delay: 0.7
  },
  {
    Icon: Heart,
    title: "品牌价值",
    description: "荣获中国驰名商标、中国著名品牌、中国制药品牌等多项荣誉",
    metrics: "TOP100",
    metricsLabel: "中国制药",
    cert: "中国驰名商标",
    color: "text-red-500",
    bg: "bg-red-50",
    gradientFrom: "from-red-500/10",
    gradientTo: "to-red-500/5",
    delay: 0.8
  }
]

// 可选的背景装饰组件
const BackgroundDecorations = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div 
      className="absolute top-0 left-1/4 w-1/2 h-1/2 
        bg-gradient-to-br from-primary/5 to-secondary/5 
        rounded-full blur-3xl transform -translate-y-1/2"
    />
    <div 
      className="absolute bottom-0 right-1/4 w-1/2 h-1/2 
        bg-gradient-to-tr from-accent/5 to-primary/5 
        rounded-full blur-3xl transform translate-y-1/2"
    />
  </div>
)

// 特性卡片组件
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const { Icon } = feature
  
  return (
    <Card className="relative h-full overflow-hidden hover-card border-border/50 backdrop-blur-sm bg-card/95">
      <div className="p-6">
        {/* 图标 */}
        <div className={`
          relative w-14 h-14 rounded-xl ${feature.bg}
          flex items-center justify-center mb-5
          before:absolute before:inset-0 
          before:rounded-xl before:bg-gradient-to-br
          ${feature.gradientFrom} ${feature.gradientTo}
          before:opacity-0 before:transition-opacity
          group-hover:before:opacity-100
        `}>
          <Icon className={`
            w-7 h-7 ${feature.color} relative z-10
            transform group-hover:scale-110 
            transition duration-500 ease-out
          `} />
        </div>

        {/* 标题和描述 */}
        <h3 className={`
          text-xl font-semibold mb-2
          group-hover:text-primary transition-colors
        `}>
          {feature.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {feature.description}
        </p>

        {/* 核心指标 */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-2xl font-bold ${feature.color}`}>
            {feature.metrics}
          </span>
          <span className="text-sm text-muted-foreground">
            {feature.metricsLabel}
          </span>
        </div>

        {/* 认证信息 */}
        <div className="text-xs text-muted-foreground/80">
          {feature.cert}
        </div>

        {/* 装饰线条 */}
        <div className={`
          absolute bottom-0 left-0 h-1 w-16
          ${feature.bg} group-hover:w-full 
          transition-all duration-500 ease-out
        `} />
      </div>
    </Card>
  )
}

// 主组件
const Features = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="container">
        {/* 头部内容 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              三十年专注医药健康
            </span>
          </div>
          <br />
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            做好人 制好药 关爱大众健康
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            集团业务覆盖医药全产业链，致力于为大众提供优质可靠的健康产品和服务
          </p>
        </div>

        {/* 特性卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>

      {/* 背景装饰 */}
      <BackgroundDecorations />
    </section>
  )
}

export default Features
'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'
import { 
  HeartPulse, 
  Leaf, 
  FlaskConical, 
  GraduationCap, 
  Microscope,
  Shield 
} from 'lucide-react'

// 核心信息配置
const HERO_CONFIG = {
  tagline: "科技好医生·福能源生物科技",
  headline: {
    gradient: "三十载深耕医药健康",
    normal: "智创品质·科技养护"
  },
  description: "以生物医药为核心，融合科技创新与传统医药智慧，致力于为大众提供优质可靠的健康产品。连续13年荣登中国医药工业百强企业，打造全方位的大健康产业生态。",
  stats: [
    { label: "企业规模", value: "20,000+" },
    { label: "子公司", value: "37+" },
    { label: "研发项目", value: "70+" },
    { label: "合作院校", value: "20+" }
  ],
  features: [
    {
      icon: FlaskConical,
      title: "生物科技创新",
      subtitle: "国家企业技术中心",
      color: "primary"
    },
    {
      icon: Microscope,
      title: "研发实力",
      subtitle: "省级重点实验室",
      color: "secondary"
    },
    {
      icon: GraduationCap,
      title: "产学研合作",
      subtitle: "博士后工作站",
      color: "accent"
    }
  ],
  products: {
    highlight: [
      {
        name: "康复馨",
        desc: "初原肌底修护喷雾",
        tag: "明星产品",
        icon: Shield
      },
      {
        name: "UA1290石榴饮",
        desc: "高端营养饮品",
        tag: "健康饮品",
        icon: HeartPulse
      }
    ]
  },
  certifications: [
    "国家企业技术中心",
    "省级重点实验室",
    "高新技术企业",
    "中国驰名商标"
  ]
}

// 动画配置
const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  float: {
    animate: {
      y: [0, -15, 0],
      rotate: [0, -1, 0]
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 背景层 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8)_0%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容区 */}
          <motion.div {...animations.fadeIn} className="space-y-8">
            {/* 标签 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-white/90 dark:bg-white/10 backdrop-blur-md shadow-sm
                         border border-primary/10"
            >
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{HERO_CONFIG.tagline}</span>
            </motion.div>

            {/* 标题 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-primary">{HERO_CONFIG.headline.gradient}</span>
              <br />
              <span className="text-foreground">{HERO_CONFIG.headline.normal}</span>
            </h1>

            {/* 描述 */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {HERO_CONFIG.description}
            </p>

            {/* 按钮组 */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="cta-button group text-lg"
              >
                咨询产品
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2 group-hover:translate-x-1"
                >
                  →
                </motion.span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg rounded-full border-2 border-primary/20 
                           hover:bg-primary/10 hover:border-primary/30"
              >
                产品系列
              </Button>
            </div>

            {/* 数据统计 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {HERO_CONFIG.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 认证信息 */}
            <div className="flex flex-wrap gap-3 pt-4">
              {HERO_CONFIG.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="px-3 py-1 rounded-full text-xs bg-primary/5 text-primary"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧内容区 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* 主图光晕效果 */}
              <div className="absolute inset-0 bg-gradient-to-tr 
                            from-primary/20 via-secondary/20 to-accent/20 
                            rounded-full blur-3xl animate-pulse-soft" />
              
              {/* 特征卡片 */}
              {HERO_CONFIG.features.map((feature, index) => (
                <motion.div
                  key={index}
                  {...animations.float}
                  style={{ 
                    top: `${25 * index}%`,
                    right: index % 2 ? 'auto' : '10%',
                    left: index % 2 ? '10%' : 'auto'
                  }}
                  className="absolute glass-effect p-4 rounded-xl shadow-elevation"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 
                                   flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <div>
                      <div className="font-medium">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {feature.subtitle}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* 产品展示卡片 */}
              {HERO_CONFIG.products.highlight.map((product, index) => (
                <motion.div
                  key={index}
                  {...animations.float}
                  style={{
                    bottom: `${20 + index * 25}%`,
                    right: index % 2 ? '15%' : 'auto',
                    left: index % 2 ? 'auto' : '15%'
                  }}
                  className="absolute glass-effect p-4 rounded-xl shadow-elevation"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-primary font-medium">{product.tag}</span>
                      <span className="font-medium">{product.name}</span>
                      <span className="text-sm text-muted-foreground">{product.desc}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full text-background"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L1440 120L1440 0C1440 0 1082.5 60 720 60C357.5 60 0 0 0 0L0 120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
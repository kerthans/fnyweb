'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'
import { Brain,HeartPulse, Leaf, Activity } from 'lucide-react'

// 核心信息配置
const HERO_CONFIG = {
  tagline: "智慧健康管理专家",
  headline: {
    gradient: "数字化健康管理",
    normal: "您的私人健康顾问"
  },
  description: "融合人工智能与专业医疗团队，为您提供个性化的健康管理解决方案，守护全家人的健康生活。",
  stats: [
    { label: "服务用户", value: "50,000+" },
    { label: "专家团队", value: "100+" },
    { label: "满意度", value: "98%" },
    { label: "专利技术", value: "80+" }
  ],
  features: [
    {
      icon: Brain,
      title: "AI健康评估",
      subtitle: "智能风险预警",
      color: "primary"
    },
    {
      icon: HeartPulse,
      title: "全程健康管理",
      subtitle: "专业团队跟进",
      color: "secondary"
    },
    {
      icon: Activity,
      title: "精准干预方案",
      subtitle: "个性化定制",
      color: "accent"
    }
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 背景层 */}
      <div className="absolute inset-0">
        {/* 替换为适合的抽象医疗背景图片 */}
        {/* 推荐使用带有柔和科技感的医疗相关抽象背景 */}
        {/* 图片要求：浅色调、具有科技感、包含医疗元素的矢量或实景图 */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 gradient-bg-primary opacity-70" />
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
                免费咨询
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
                了解更多
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
          </motion.div>

          {/* 右侧图片区 */}
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
              
              {/* 主图 - 建议使用立体感强的3D医疗科技场景图 */}
              {/* 图片要求：透明背景、主色调协调、富有科技感的3D医疗场景 */}
              <Image
                src="/images/hero-main.png"
                alt="Digital Health Technology"
                fill
                className="object-contain relative z-10"
                priority
              />

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
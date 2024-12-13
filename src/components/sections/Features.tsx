'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Brain, Heart, Activity, Leaf,
  Shield, Dna, Users, LineChart,
  Sparkles, Focus
} from 'lucide-react'

// 核心服务数据
const CORE_METRICS = {
  AI_ACCURACY: '99.9%',
  EXPERT_COUNT: '100+',
  USER_SATISFACTION: '98%',
  RESPONSE_TIME: '0.1s'
} as const

// 专业资质数据
const CERTIFICATIONS = {
  AI: 'ISO27001认证智能系统',
  MEDICAL: '三甲医院专家团队',
  DATA: 'GDPR数据安全认证',
  HEALTH: '国家健康管理资质'
} as const

// 功能特性配置
const features = [
  {
    icon: Brain,
    title: "AI智慧诊断",
    description: "基于百万级健康数据的AI智能分析系统，提供精准健康评估和个性化建议",
    metrics: CORE_METRICS.AI_ACCURACY,
    metricsLabel: "诊断准确率",
    cert: CERTIFICATIONS.AI,
    color: "text-primary",
    bg: "bg-primary/5",
    gradientFrom: "from-primary/10",
    gradientTo: "to-primary/5",
    delay: 0.1
  },
  {
    icon: Heart,
    title: "全周期监测",
    description: "24小时实时监测生命体征，建立动态健康档案，及时预警异常状况",
    metrics: "24/7",
    metricsLabel: "全天候守护",
    cert: CERTIFICATIONS.MEDICAL,
    color: "text-red-500",
    bg: "bg-red-50",
    gradientFrom: "from-red-500/10",
    gradientTo: "to-red-500/5",
    delay: 0.2
  },
  {
    icon: Activity,
    title: "运动处方",
    description: "专业教练定制个性化运动方案，科学指导提升训练效果",
    metrics: "1v1",
    metricsLabel: "专属指导",
    cert: CERTIFICATIONS.HEALTH,
    color: "text-blue-500",
    bg: "bg-blue-50",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-blue-500/5",
    delay: 0.3
  },
  {
    icon: Leaf,
    title: "营养规划",
    description: "营养学专家基于个人体质定制饮食方案，均衡营养摄入",
    metrics: "3+",
    metricsLabel: "定制方案",
    cert: CERTIFICATIONS.MEDICAL,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    gradientFrom: "from-emerald-500/10",
    gradientTo: "to-emerald-500/5",
    delay: 0.4
  },
  {
    icon: Shield,
    title: "风险预防",
    description: "健康风险早期预警，制定个性化预防方案",
    metrics: "95%",
    metricsLabel: "预防率",
    cert: CERTIFICATIONS.HEALTH,
    color: "text-amber-500",
    bg: "bg-amber-50",
    gradientFrom: "from-amber-500/10",
    gradientTo: "to-amber-500/5",
    delay: 0.5
  },
  {
    icon: Dna,
    title: "基因解析",
    description: "基于基因测序的个性化健康指导，精准医疗导航",
    metrics: "99%",
    metricsLabel: "准确度",
    cert: CERTIFICATIONS.MEDICAL,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    gradientFrom: "from-indigo-500/10",
    gradientTo: "to-indigo-500/5",
    delay: 0.6
  },
  {
    icon: Users,
    title: "专家团队",
    description: "三甲医院专家提供在线问诊和健康咨询服务",
    metrics: "100+",
    metricsLabel: "专家顾问",
    cert: CERTIFICATIONS.MEDICAL,
    color: "text-violet-500",
    bg: "bg-violet-50",
    gradientFrom: "from-violet-500/10",
    gradientTo: "to-violet-500/5",
    delay: 0.7
  },
  {
    icon: LineChart,
    title: "健康洞察",
    description: "多维度数据分析，展现健康趋势，把握健康全貌",
    metrics: CORE_METRICS.RESPONSE_TIME,
    metricsLabel: "响应时间",
    cert: CERTIFICATIONS.DATA,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    gradientFrom: "from-cyan-500/10",
    gradientTo: "to-cyan-500/5",
    delay: 0.8
  }
]

// 动画配置
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  }
}

export default function Features() {
  return (
    <section id ='features'className="relative py-24 overflow-hidden">
      <div className="container">
        {/* 头部内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/[0.08] 
              border border-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              科技赋能健康管理
            </span>
          </motion.div>
          <br />
          <h2 className="section-title max-w-3xl mx-auto mb-6">
            全方位的智慧健康服务
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            融合人工智能与专业医疗资源，为您提供科学精准的健康管理方案
          </p>
        </motion.div>

        {/* 特性卡片网格 */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={animations.item}
                className="group"
              >
                <Card className="relative h-full overflow-hidden hover-card
                  border-border/50 backdrop-blur-sm bg-card/95">
                  {/* 卡片内容 */}
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
              </motion.div>
            )
          })}
        </motion.div>

        {/* 底部装饰 */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-muted px-4 py-2 
              rounded-full text-muted-foreground hover:text-primary
              transition-colors cursor-pointer"
          >
            <Focus className="w-4 h-4" />
            <span className="text-sm font-medium">了解更多服务详情</span>
          </motion.div>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 
          bg-gradient-to-br from-primary/5 to-secondary/5 
          rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 
          bg-gradient-to-tr from-accent/5 to-primary/5 
          rounded-full blur-3xl transform translate-y-1/2" />
      </div>
    </section>
  )
}
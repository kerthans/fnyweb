// src/components/sections/Features.tsx
'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Activity, 
  Brain, 
  Heart, 
  Sparkles, 
  Timer, 
  Users,
  BarChart,
  Smartphone,
  Shield
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI智能分析",
    description: "运用人工智能技术，提供个性化健康建议和风险预警",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Heart,
    title: "全面健康监测",
    description: "24小时持续监测身体各项指标，建立个人健康档案",
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    icon: Activity,
    title: "专业运动指导",
    description: "根据个人体质定制科学的运动计划，提供专业教练指导",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Timer,
    title: "营养膳食规划",
    description: "专业营养师一对一指导，制定个性化饮食方案",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    icon: Shield,
    title: "健康风险预防",
    description: "提前识别健康风险，制定预防方案",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    icon: Smartphone,
    title: "移动健康管理",
    description: "随时随地掌握健康数据，获取专业建议",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Users,
    title: "专家团队支持",
    description: "顶级医疗专家团队提供专业咨询和指导服务",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    icon: BarChart,
    title: "健康趋势分析",
    description: "通过数据分析，掌握健康发展趋势",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            科技赋能健康管理
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            通过先进技术和专业服务，为您提供全方位的健康解决方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-card h-full border-none bg-white">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={`h-1 w-12 rounded ${feature.bg}`} />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
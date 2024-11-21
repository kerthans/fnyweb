'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Award, Sparkles, Shield, Users, Heart, ArrowRight, Star, Crown } from 'lucide-react'
import Image from 'next/image'

// 产品核心数据
const PRODUCT_METRICS = {
  SATISFACTION: '98%',
  RENEWAL_RATE: '95%',
  ACTIVE_USERS: '50万+',
  EXPERT_COUNT: '100+'
} as const

// 服务等级数据
const SERVICE_LEVELS = {
  RESPONSE_TIME: '15分钟',
  EXPERT_CONSULT: '7×24小时',
  DATA_SECURITY: 'ISO27001',
  SERVICE_GUARANTEE: '100%退款保证'
} as const

// 产品特权数据
const PRIVILEGES = {
  VIP_EXPERTS: '三甲医院专家团队',
  AI_ANALYSIS: 'AI智能健康分析',
  FULL_RECORDS: '全周期健康档案',
  PRIORITY_SERVICE: '优先服务通道'
} as const

const products = [
  {
    id: 'personal',
    title: "个人健康管家",
    subtitle: "适合个人用户",
    description: "AI智能分析 + 专家一对一指导",
    price: "199",
    originalPrice: "399",
    period: "月",
    metrics: {
      users: "20万+",
      satisfaction: "98%",
      response: "15分钟"
    },
    features: [
      {
        title: PRIVILEGES.AI_ANALYSIS,
        desc: "24小时健康监测"
      },
      {
        title: "专业运动指导",
        desc: "私人教练定制"
      },
      {
        title: "营养方案定制",
        desc: "营养师一对一"
      },
      {
        title: SERVICE_LEVELS.EXPERT_CONSULT,
        desc: "专家在线问诊"
      },
      {
        title: PRIVILEGES.FULL_RECORDS,
        desc: "动态健康档案"
      },
      {
        title: "基因检测报告",
        desc: "精准健康指导"
      }
    ],
    image: "/images/products/personal.jpg", // 待替换为合适的健康生活图片
    popular: true,
    badge: "最受欢迎",
    color: "primary",
    icon: Heart,
    delay: 0.2
  },
  {
    id: 'enterprise',
    title: "企业健康管理",
    subtitle: "适合企业团队",
    description: "专业团队健康管理解决方案",
    price: "999",
    originalPrice: "1999",
    period: "月",
    metrics: {
      users: "1000+",
      satisfaction: "96%",
      response: "12小时"
    },
    features: [
      {
        title: "团队健康档案",
        desc: "一键管理追踪"
      },
      {
        title: "年度体检规划",
        desc: "专业体检机构"
      },
      {
        title: "职业病防护",
        desc: "预防为主"
      },
      {
        title: "团队活动策划",
        desc: "健康生活方式"
      },
      {
        title: "健康讲座培训",
        desc: "专家现场指导"
      },
      {
        title: "专属服务团队",
        desc: "7×24小时响应"
      }
    ],
    image: "/images/products/enterprise.jpg", // 待替换为企业团队健康管理场景
    popular: false,
    color: "accent",
    icon: Users,
    delay: 0.3
  },
  {
    id: 'family',
    title: "家庭健康卫士",
    subtitle: "适合全家使用",
    description: "呵护全家人的健康管理专家",
    price: "599",
    originalPrice: "1199",
    period: "月",
    metrics: {
      users: "5万+",
      satisfaction: "97%",
      response: "10分钟"
    },
    features: [
      {
        title: "家庭成员档案",
        desc: "多人健康管理"
      },
      {
        title: "亲子健康指导",
        desc: "专业育儿建议"
      },
      {
        title: "家庭营养方案",
        desc: "营养均衡搭配"
      },
      {
        title: "遗传风险评估",
        desc: "基因筛查预警"
      },
      {
        title: "远程医疗咨询",
        desc: "专家在线问诊"
      },
      {
        title: "家庭医生服务",
        desc: "一对一专属"
      }
    ],
    image: "/images/products/family.jpg", // 待替换为温馨家庭健康场景
    popular: false,
    color: "secondary",
    icon: Shield,
    delay: 0.4
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
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  }
}

export default function Products() {
  return (
    <section className="relative py-24">
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
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              智慧健康管理解决方案
            </span>
          </motion.div>
          <br />
          <h2 className="section-title mb-6">
            选择您的专属健康方案
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            基于{PRODUCT_METRICS.ACTIVE_USERS}用户数据分析，为不同人群定制专业的健康管理服务
          </p>
        </motion.div>

        {/* 产品卡片 */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                variants={animations.item}
                className="group"
              >
                <Card className={`relative h-full overflow-hidden hover-card
                  backdrop-blur-sm bg-card/95 
                  ${product.popular ? 'border-[2px] border-primary' : 'border border-border/50'}`}
                >
                  {/* 热门标签 */}
                  {product.popular && (
                    <div className="absolute -right-12 top-8 rotate-45 z-20">
                      <div className="bg-gradient-to-r from-primary to-primary/80 
                        text-white text-xs font-semibold py-1 px-12">
                        最受欢迎
                      </div>
                    </div>
                  )}

                  {/* 卡片内容 */}
                  <div className="p-6 lg:p-8">
                    {/* 标题区域 */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-${product.color}/10 
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-6 h-6 text-${product.color}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold group-hover:text-${product.color} 
                          transition-colors duration-300`}>
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* 图片区域 */}
                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 
                          group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t 
                        from-black/20 to-transparent" />
                    </div>

                    {/* 价格区域 */}
                    <div className="text-center mb-8">
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold gradient-primary">
                          ¥{product.price}
                        </span>
                        <span className="text-muted-foreground">/{product.period}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 功能特性列表 */}
                    <div className="space-y-4 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-${product.color}/10 
                            flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className={`w-3 h-3 text-${product.color}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{feature.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 服务指标 */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(product.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold text-${product.color}`}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {key === 'users' ? '活跃用户' : 
                             key === 'satisfaction' ? '满意度' : '响应时间'}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 按钮 */}
                    <Button 
                      className={`w-full h-12 rounded-full group/button
                        ${product.popular ? 
                          'bg-gradient-to-r from-primary to-primary/80' : 
                          'border-2 border-border hover:border-primary'
                        }`}
                      variant={product.popular ? "default" : "outline"}
                    >
                      <span className="mr-2">立即开启</span>
                      <ArrowRight className="w-4 h-4 transform 
                        group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* 装饰线条 */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 
                    bg-gradient-to-r from-${product.color} to-${product.color}/80
                    group-hover:w-full transition-all duration-700 ease-out`} />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* 底部咨询 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">
                {SERVICE_LEVELS.SERVICE_GUARANTEE}
              </span>
            </div>
            <Button 
              variant="outline"
              className="rounded-full group"
            >
              <Star className="w-4 h-4 mr-2 text-primary" />
              <span>联系顾问获取专属方案建议</span>
              <ArrowRight className="w-4 h-4 ml-2 transform 
                group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
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
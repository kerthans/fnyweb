'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check, Shield, Users, Heart, ArrowRight, Star, Crown, Brain } from 'lucide-react'
import Image from 'next/image'

// 产品核心数据
const PRODUCT_METRICS = {
  SATISFACTION: '98%',
  RENEWAL_RATE: '95%',
  ACTIVE_USERS: '50万+',
  EXPERT_COUNT: '100+'
} as const

// 基础产品配置
const products = [
  {
    id: 'ua1290',
    title: "UA1290石榴饮",
    subtitle: "基础版",
    description: "AI智能分析 + 专家指导",
    price: "199",
    originalPrice: "399",
    period: "月",
    metrics: {
      users: "20万+",
      satisfaction: "98%",
      response: "15分钟"
    },
    features: [
      { title: "AI健康分析", desc: "24小时监测" },
      { title: "运动指导", desc: "私教定制" },
      { title: "营养方案", desc: "营养师定制" },
      { title: "在线问诊", desc: "专家咨询" },
      { title: "健康档案", desc: "动态更新" },
      { title: "基因检测", desc: "精准指导" }
    ],
    image: "/images/products/ua1290.png",
    defaultPopular: true,
    color: "primary",
    icon: Heart
  },
  {
    id: 'shenguo',
    title: "圣果天浆",
    subtitle: "专业版",
    description: "全方位营养解决方案",
    price: "399",
    originalPrice: "799",
    period: "月",
    metrics: {
      users: "15万+",
      satisfaction: "97%",
      response: "10分钟"
    },
    features: [
      { title: "营养评估", desc: "专业分析" },
      { title: "膳食指导", desc: "定制方案" },
      { title: "营养补充", desc: "科学搭配" },
      { title: "体质调理", desc: "个性化建议" },
      { title: "营养监测", desc: "动态跟踪" },
      { title: "专家指导", desc: "一对一服务" }
    ],
    image: "/images/products/shenguo.png",
    defaultPopular: false,
    color: "secondary",
    icon: Brain
  },
  {
    id: 'fushuibao',
    title: "福睡宝",
    subtitle: "尊享版",
    description: "高端定制健康管理",
    price: "599",
    originalPrice: "1199",
    period: "月",
    metrics: {
      users: "5万+",
      satisfaction: "99%",
      response: "5分钟"
    },
    features: [
      { title: "睡眠监测", desc: "智能分析" },
      { title: "深度调理", desc: "个性方案" },
      { title: "心理疏导", desc: "专家咨询" },
      { title: "睡眠报告", desc: "每周更新" },
      { title: "生物节律", desc: "智能调整" },
      { title: "VIP服务", desc: "专属管家" }
    ],
    image: "/images/products/fushuibao.png",
    defaultPopular: false,
    color: "accent",
    icon: Shield
  },
  {
    id: '康复馨-初原肌底修复喷雾',
    title: "康复馨-初原肌底修复喷雾",
    subtitle: "企业版",
    description: "团队健康管理方案",
    price: "999",
    originalPrice: "1999",
    period: "月",
    metrics: {
      users: "1000+",
      satisfaction: "96%",
      response: "12小时"
    },
    features: [
      { title: "团队管理", desc: "一键管理" },
      { title: "体检规划", desc: "年度体检" },
      { title: "职业防护", desc: "预防为主" },
      { title: "活动策划", desc: "团队活动" },
      { title: "健康培训", desc: "专家指导" },
      { title: "专属团队", desc: "7×24服务" }
    ],
    image: "/images/products/康复馨-初原肌底修复喷雾.png",
    defaultPopular: false,
    color: "primary",
    icon: Users
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
  // 控制是否显示"最受欢迎"标签
  const [showPopular, setShowPopular] = useState(true)

  return (
    <section id="products" className="relative py-24">
      <div className="container">
        {/* 头部内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
              福能源生物科技出品
            </span>
          </motion.div>
          <br />
          <h2 className="section-title mb-6">现有产品系列</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            基于{PRODUCT_METRICS.ACTIVE_USERS}用户数据分析，为不同人群定制专业的健康管理服务
          </p>
          
          {/* 添加最受欢迎标签控制开关 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">显示最受欢迎标签</span>
            <Switch 
              checked={showPopular}
              onCheckedChange={setShowPopular}
            />
          </div>
        </motion.div>

        {/* 产品卡片网格 */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => {
            const Icon = product.icon
            const isPopular = showPopular && product.defaultPopular

            return (
              <motion.div
                key={product.id}
                variants={animations.item}
                className="group"
              >
                <Card className={`relative h-full overflow-hidden hover-card
                  backdrop-blur-sm bg-card/95 
                  ${isPopular ? 'border-[2px] border-primary' : 'border border-border/50'}`}
                >
                  {/* 热门标签 */}
                  {isPopular && (
                    <div className="absolute -right-12 top-8 rotate-45 z-20">
                      <div className="bg-gradient-to-r from-primary to-primary/80 
                        text-white text-xs font-semibold py-1 px-12">
                        最受欢迎
                      </div>
                    </div>
                  )}

                  {/* 卡片内容 */}
                  <div className="p-6">
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
                    <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden">
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
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl font-bold gradient-primary">
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
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
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
                    <div className="grid grid-cols-3 gap-2 mb-6 text-sm">
                      {Object.entries(product.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`font-bold text-${product.color}`}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {key === 'users' ? '用户' : 
                             key === 'satisfaction' ? '满意度' : '响应'}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 按钮 */}
                    <Button 
                      className={`w-full h-11 rounded-full group/button
                        ${isPopular ? 
                          'bg-gradient-to-r from-primary to-primary/80' : 
                          'border-2 border-border hover:border-primary'
                        }`}
                      variant={isPopular ? "default" : "outline"}
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
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">
                100%退款保证
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
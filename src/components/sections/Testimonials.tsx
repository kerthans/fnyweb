'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star, Trophy, Users, BarChart3, BadgeCheck } from 'lucide-react'

// 用户评价核心数据
const TESTIMONIAL_METRICS = {
  SATISFACTION: '98%',
  TOTAL_REVIEWS: '10000+',
  AVERAGE_RATING: '4.9',
  RECOMMEND_RATE: '96%'
} as const

// 服务认证信息
const SERVICE_AWARDS = {
  QUALITY: '年度健康服务金奖',
  SATISFACTION: '用户满意度五星认证',
  INFLUENCE: '行业影响力品牌',
  INNOVATION: '健康科技创新奖'
} as const

// 专业评价来源
const REVIEW_SOURCES = {
  MEDICAL: '权威医疗机构认证',
  PLATFORM: '第三方服务平台认证',
  MEDIA: '主流媒体好评',
  USERS: '真实用户评价'
} as const

// 用户见证数据
const testimonials = [
  {
    id: 'executive',
    content: [
      "福能源的健康管理服务让我深感专业。",
      "通过AI智能分析系统和专家一对一指导，为我定制了完整的健康方案。",
      "三个月以来，不仅体重得到有效控制，整体精力和状态都有显著提升。",
      "现在的生活更有规律，充满活力！"
    ].join(" "),
    author: "张女士",
    title: "某500强企业副总裁",
    organization: "科技行业",
    avatar: "/images/testimonials/executive.jpg", // 待替换：优雅女性专业形象
    rating: 5,
    achievement: "BMI指数降低4个点",
    duration: "3个月",
    verified: true,
    featured: true,
    tag: "管理者推荐",
    metrics: {
      improvement: "35%",
      category: "生活质量提升"
    },
    delay: 0.1
  },
  {
    id: 'athlete',
    content: [
      "作为专业运动教练，我对健康管理要求很高。",
      "福能源的运动科学团队让我印象深刻，他们不仅提供专业的训练指导，",
      "更通过精准数据分析，帮助我优化训练计划，提升训练效果。",
      "真正做到了科学健身。"
    ].join(" "),
    author: "李先生",
    title: "资深私人教练",
    organization: "国际健身学院认证",
    avatar: "/images/testimonials/athlete.jpg", // 待替换：专业运动教练形象
    rating: 5,
    achievement: "训练效率提升40%",
    duration: "6个月",
    verified: true,
    tag: "专业认可",
    metrics: {
      improvement: "40%",
      category: "训练效能"
    },
    delay: 0.2
  },
  {
    id: 'enterprise',
    content: [
      "福能源为我们公司提供的员工健康管理服务非常全面。",
      "从体检规划到心理健康咨询，再到团队运动课程，都照顾得很周到。",
      "员工参与度和满意度都很高，",
      "确实帮助企业打造了健康积极的职场氛围。"
    ].join(" "),
    author: "王总",
    title: "人力资源总监",
    organization: "某科技上市公司",
    avatar: "/images/testimonials/hr.jpg", // 待替换：专业HR总监形象
    rating: 5,
    achievement: "员工健康指数提升28%",
    duration: "12个月",
    verified: true,
    tag: "企业之选",
    metrics: {
      improvement: "89%",
      category: "员工满意度"
    },
    delay: 0.3
  },
  {
    id: 'lifestyle',
    content: [
      "福能源的营养师团队特别专业。",
      "他们不仅基于我的身体状况定制了营养方案，",
      "还教会了我很多健康饮食的知识。",
      "现在的我不仅气色更好，体重也控制得很理想。"
    ].join(" "),
    author: "刘女士",
    title: "生活方式博主",
    organization: "健康生活倡导者",
    avatar: "/images/testimonials/lifestyle.jpg", // 待替换：气质博主形象
    rating: 5,
    achievement: "体重达标并保持",
    duration: "4个月",
    verified: true,
    tag: "生活改善",
    metrics: {
      improvement: "45%",
      category: "身心健康"
    },
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

export default function Testimonials() {
  return (
    <section id ='testimonials' className="relative py-24">
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
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {SERVICE_AWARDS.SATISFACTION}
            </span>
          </motion.div>
          <br />
          <h2 className="section-title mb-6">
            用户的真实反馈
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            超过{TESTIMONIAL_METRICS.TOTAL_REVIEWS}位用户的共同选择
            <br />
            平均评分{TESTIMONIAL_METRICS.AVERAGE_RATING}，满意度达{TESTIMONIAL_METRICS.SATISFACTION}
          </p>

          {/* 评价指标 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Star,
                metric: TESTIMONIAL_METRICS.SATISFACTION,
                label: "用户满意度"
              },
              {
                icon: Users,
                metric: TESTIMONIAL_METRICS.TOTAL_REVIEWS,
                label: "用户评价"
              },
              {
                icon: Trophy,
                metric: TESTIMONIAL_METRICS.AVERAGE_RATING,
                label: "平均评分"
              },
              {
                icon: BarChart3,
                metric: TESTIMONIAL_METRICS.RECOMMEND_RATE,
                label: "推荐率"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl
                    bg-card/40 backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-2xl font-bold gradient-primary mb-1">
                    {item.metric}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* 评价卡片 */}
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={animations.item}
              className="group"
            >
              <Card className={`relative h-full overflow-hidden hover-card
                backdrop-blur-sm bg-card/95 
                ${testimonial.featured ? 'border-[2px] border-primary' : 'border border-border/50'}`}
              >
                {/* 标签 */}
                {testimonial.tag && (
                  <div className="absolute top-4 right-4">
                    <div className={`
                      text-xs font-medium px-3 py-1 rounded-full
                      ${testimonial.featured ? 
                        'bg-primary text-white' : 
                        'bg-muted text-muted-foreground'}
                    `}>
                      {testimonial.tag}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* 引用标记 */}
                  <Quote className={`
                    w-10 h-10 mb-4
                    ${testimonial.featured ? 'text-primary' : 'text-primary/20'}
                    group-hover:text-primary transition-colors duration-300
                  `} />

                  {/* 内容 */}
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed
                      group-hover:text-foreground transition-colors">
                      {testimonial.content}
                    </p>

                    {/* 成就展示 */}
                    <div className="flex items-center gap-2 text-sm">
                      <BadgeCheck className="w-4 h-4 text-primary" />
                      <span className="font-medium">{testimonial.achievement}</span>
                      <span className="text-muted-foreground">
                        · {testimonial.duration}
                      </span>
                    </div>
                  </div>

                  {/* 用户信息 */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-background">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {testimonial.author}
                        </span>
                        {testimonial.verified && (
                          <BadgeCheck className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>

                  {/* 改善指标 */}
                  {testimonial.metrics && (
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {testimonial.metrics.category}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          +{testimonial.metrics.improvement}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 底部认证信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {[
                REVIEW_SOURCES.MEDICAL,
                REVIEW_SOURCES.PLATFORM,
                REVIEW_SOURCES.USERS
              ].map((source, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <span>{source}</span>
                </div>
              ))}
            </div>
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
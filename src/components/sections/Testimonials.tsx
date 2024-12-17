'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Trophy, Users, BadgeCheck, Building2, GraduationCap } from 'lucide-react'

// 用户评价核心数据
const TESTIMONIAL_METRICS = {
  SATISFACTION: '98%',
  TOTAL_REVIEWS: '20000+', // 基于员工规模
  AVERAGE_RATING: '4.9',
  RECOMMEND_RATE: '96%'
} as const

// 集团认证信息
const SERVICE_AWARDS = {
  INDUSTRY: '中国医药工业百强企业',
  FAMOUS: '中国驰名商标',
  BRAND: '中国制药品牌',
  TECH: '国家企业技术中心'
} as const

// 专业评价来源
const REVIEW_SOURCES = {
  MEDICAL: '国家级医药认证',
  PLATFORM: '省级重点实验室认证',
  RESEARCH: '国家博士后工作站',
  ENTERPRISE: '高新技术企业认证'
} as const

// 用户见证数据
const testimonials = [
  {
    id: 'enterprise',
    content: [
      "作为一家大型医疗机构，我们一直在寻找可靠的医药合作伙伴。",
      "好医生集团不仅提供优质的医药产品，更重要的是他们在生物医药创新领域的持续投入，",
      "通过国家企业技术中心和省级重点实验室，为我们提供了全方位的医疗解决方案。",
      "这种专注于创新的精神，让我们对合作充满信心。"
    ].join(" "),
    author: "王院长",
    title: "三甲医院院长",
    organization: "医疗行业",
    avatar: "/images/testimonials/hospital.jpg",
    rating: 5,
    achievement: "合作超过10年",
    duration: "长期合作",
    verified: true,
    featured: true,
    tag: "行业认可",
    metrics: {
      improvement: "90%",
      category: "合作满意度"
    },
    delay: 0.1
  },
  {
    id: 'research',
    content: [
      "通过与好医生集团的产学研合作，",
      "我们见证了企业在科研创新方面的投入和决心。",
      "他们建立的国家级博士后工作站和省级院士工作站，",
      "为推动医药行业的技术进步做出了重要贡献。",
      "70余项国家省部级研发创新项目的成果，证明了他们在科研领域的实力。"
    ].join(" "),
    author: "张教授",
    title: "知名高校教授",
    organization: "生物医药研究",
    avatar: "/images/testimonials/professor.jpg",
    rating: 5,
    achievement: "联合研发突破",
    duration: "5年",
    verified: true,
    tag: "科研合作",
    metrics: {
      improvement: "70+",
      category: "研发项目"
    },
    delay: 0.2
  },
  {
    id: 'business',
    content: [
      "好医生集团在医药工业、商业、研发等七大板块的全面布局，",
      "为我们提供了完整的产业链支持。",
      "作为一家连续13年荣登中国医药工业百强的企业，",
      "他们始终保持着高水准的产品质量和服务。",
      "特别是在生物医药创新领域的持续投入，更让我们对未来充满期待。"
    ].join(" "),
    author: "李总",
    title: "医药连锁机构负责人",
    organization: "医药商业",
    avatar: "/images/testimonials/business.jpg",
    rating: 5,
    achievement: "双向战略合作",
    duration: "8年",
    verified: true,
    tag: "战略伙伴",
    metrics: {
      improvement: "85%",
      category: "业务增长"
    },
    delay: 0.3
  },
  {
    id: 'agriculture',
    content: [
      "好医生集团在中药材种养殖基地的建设上投入巨大，",
      "作为农业合作伙伴，我们深深感受到企业对产品品质的追求。",
      "他们建立的现代化种植基地和严格的质量管理体系，",
      "不仅带动了当地农业发展，更确保了中药材的品质。",
      "这种从源头把控质量的理念令人敬佩。"
    ].join(" "),
    author: "陈主任",
    title: "农业基地负责人",
    organization: "中药材种植",
    avatar: "/images/testimonials/agriculture.jpg",
    rating: 5,
    achievement: "带动农业发展",
    duration: "6年",
    verified: true,
    tag: "产业共建",
    metrics: {
      improvement: "100%",
      category: "品质达标"
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
    <section id="testimonials" className="relative py-24">
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
              {SERVICE_AWARDS.INDUSTRY}
            </span>
          </motion.div>
          <br />
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            三十年匠心 共创健康未来
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            连续13年荣登中国医药工业百强，服务员工规模{TESTIMONIAL_METRICS.TOTAL_REVIEWS}
            <br />
            以创新驱动发展，深耕医药健康产业
          </p>

          {/* 企业成就 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Building2,
                metric: "37+",
                label: "全资子公司"
              },
              {
                icon: Users,
                metric: "20000+",
                label: "企业规模"
              },
              {
                icon: Trophy,
                metric: "13年",
                label: "百强企业"
              },
              {
                icon: GraduationCap,
                metric: "70+",
                label: "创新项目"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl
                    bg-card/40 backdrop-blur-sm border border-border/50"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={animations.item}
              className="group"
            >
              <Card className={`relative h-full overflow-hidden hover:shadow-lg
                backdrop-blur-sm bg-card/95 border border-border/50
                ${testimonial.featured ? 'border-primary/50' : ''}`}
              >
                {/* 标签 */}
                {testimonial.tag && (
                  <div className="absolute top-4 right-4">
                    <div className={`
                      text-xs font-medium px-3 py-1 rounded-full
                      ${testimonial.featured ? 
                        'bg-primary/10 text-primary' : 
                        'bg-muted text-muted-foreground'}
                    `}>
                      {testimonial.tag}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* 引用标记 */}
                  <Quote className={`
                    w-8 h-8 mb-4 text-primary/20
                    group-hover:text-primary transition-colors duration-300
                  `} />

                  {/* 内容 */}
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm
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
                    <Avatar className="h-10 w-10 ring-2 ring-background">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">
                          {testimonial.author}
                        </span>
                        {testimonial.verified && (
                          <BadgeCheck className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
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
                        <span className="text-xs text-muted-foreground">
                          {testimonial.metrics.category}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {testimonial.metrics.improvement}
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
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              {[
                REVIEW_SOURCES.MEDICAL,
                REVIEW_SOURCES.PLATFORM,
                REVIEW_SOURCES.RESEARCH,
                REVIEW_SOURCES.ENTERPRISE
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
// src/components/sections/Products.tsx
'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    title: "个人健康管理",
    subtitle: "适合个人用户",
    description: "量身定制的个人健康管理方案",
    price: "199",
    period: "月",
    features: [
      "健康风险评估",
      "个性化运动计划",
      "营养膳食指导",
      "24小时健康监测",
      "AI健康助手",
      "专家在线咨询"
    ],
    image: "/images/products/personal.jpg",
    popular: true
  },
  {
    title: "企业健康管理",
    subtitle: "适合企业团队",
    description: "全方位的企业员工健康管理方案",
    price: "999",
    period: "月",
    features: [
      "团队健康档案",
      "员工体检管理",
      "职业病预防",
      "团队活动策划",
      "健康讲座培训",
      "专属服务团队"
    ],
    image: "/images/products/enterprise.jpg",
    popular: false
  },
  {
    title: "家庭健康管理",
    subtitle: "适合全家使用",
    description: "家庭成员的综合健康管理方案",
    price: "599",
    period: "月",
    features: [
      "家庭成员档案",
      "亲子健康指导",
      "家庭营养方案",
      "基因健康分析",
      "远程医疗咨询",
      "家庭医生服务"
    ],
    image: "/images/products/family.jpg",
    popular: false
  }
]

export default function Products() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">选择适合您的健康方案</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            我们提供多样化的健康管理方案，满足不同群体的需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`hover-card relative h-full ${
                product.popular ? 'border-primary shadow-lg' : ''
              }`}>
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary">
                    最受欢迎
                  </Badge>
                )}
                
                <CardHeader className="pb-0">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">¥{product.price}</span>
                      <span className="text-muted-foreground ml-2">/{product.period}</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      {product.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      product.popular ? 'bg-primary hover:bg-primary/90' : ''
                    }`}
                    variant={product.popular ? "default" : "outline"}
                  >
                    立即选择
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            还不确定选择哪个方案？
          </p>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            联系我们获取建议
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
// src/components/sections/Testimonials.tsx
'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "福能源的健康管理服务非常专业，通过AI分析和专家指导，帮助我建立了健康的生活方式，体重也控制得很好。",
    author: "张女士",
    title: "企业高管",
    avatar: "/images/testimonials/client-1.jpg",
    rating: 5,
    featured: true
  },
  {
    content: "作为一名运动爱好者，福能源的专业指导让我的训练更有针对性，避免了很多运动损伤。",
    author: "李先生",
    title: "健身教练",
    avatar: "/images/testimonials/client-2.jpg",
    rating: 5
  },
  {
    content: "我们公司的员工健康管理都交给了福能源，他们的服务非常全面，员工满意度很高。",
    author: "王总",
    title: "科技公司CEO",
    avatar: "/images/testimonials/client-3.jpg",
    rating: 5
  },
  {
    content: "福能源的营养师为我定制的饮食方案既健康又美味，让健康管理变得轻松愉快。",
    author: "刘女士",
    title: "时尚博主",
    avatar: "/images/testimonials/client-4.jpg",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">用户心声</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            听听我们的用户怎么说
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`hover-card h-full ${
                testimonial.featured ? 'border-primary shadow-lg' : ''
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Quote className={`w-10 h-10 ${
                      testimonial.featured ? 'text-primary' : 'text-muted-foreground/20'
                    }`} />
                    <div className="flex">
                      {Array(testimonial.rating).fill(null).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
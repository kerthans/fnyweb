'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Loader2,
  Calendar,
  HeartPulse, // 可替换为医疗相关icon
  Shield, // 可替换为安全保障相关icon
  Users // 可替换为专家团队相关icon
} from 'lucide-react'

// 表单验证规则
const PHONE_REGEX = /^1[3-9]\d{9}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 联系方式配置
const contactInfo = [
  {
    icon: HeartPulse,
    title: "24小时健康咨询",
    content: "400-888-9999",
    description: "专业医师在线服务",
    color: "text-primary",
    bg: "bg-primary/5",
    delay: 0.1
  },
  {
    icon: Mail,
    title: "咨询预约邮箱",
    content: "health@example.com",
    description: "12小时内回复",
    color: "text-secondary",
    bg: "bg-secondary/5",
    delay: 0.2
  },
  {
    icon: MapPin,
    title: "医疗中心地址",
    content: "深圳市南山区科技园",
    description: "交通便利 设施完善",
    color: "text-accent",
    bg: "bg-accent/5",
    delay: 0.3
  },
  {
    icon: Calendar,
    title: "预约就诊时间",
    content: "周一至周日",
    description: "8:00-20:00",
    color: "text-secondary",
    bg: "bg-secondary/5",
    delay: 0.4
  }
]

// 服务承诺
const servicePromises = [
  {
    icon: Shield,
    title: "隐私保护",
    description: "全程加密 安全无忧"
  },
  {
    icon: Users,
    title: "专家团队",
    description: "资深医师 一对一服务"
  },
  {
    icon: Clock,
    title: "快速响应",
    description: "及时回复 贴心服务"
  }
]

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

interface ValidationErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "请输入姓名"
    }
    
    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址"
    }
    
    if (!PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = "请输入有效的手机号码"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "请输入咨询内容"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "提交成功",
        description: "我们的专业医师会尽快与您联系！"
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch {
      toast({
        title: "提交失败",
        description: "网络繁忙，请稍后重试",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // 清除对应的错误提示
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/[0.08] 
              border border-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <HeartPulse className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">专业医疗团队为您服务</span>
          </motion.div>
          <br />
          <h2 className="section-title mb-6">
            预约咨询
          </h2>
          <p className="text-lg text-muted-foreground">
            专业医师团队会在24小时内与您取得联系，
            为您提供一对一的健康咨询服务
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="hover-card border-none shadow-elevation glass-effect">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        姓名 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-12 rounded-lg ${errors.name ? 'border-destructive' : 'border-muted'}`}
                        placeholder="您的称呼"
                      />
                      {errors.name && (
                        <span className="text-sm text-destructive">{errors.name}</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        邮箱 *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 rounded-lg ${errors.email ? 'border-destructive' : 'border-muted'}`}
                        placeholder="example@domain.com"
                      />
                      {errors.email && (
                        <span className="text-sm text-destructive">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      手机号码 *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-12 rounded-lg ${errors.phone ? 'border-destructive' : 'border-muted'}`}
                      placeholder="请输入手机号码"
                    />
                    {errors.phone && (
                      <span className="text-sm text-destructive">{errors.phone}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      咨询内容 *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`rounded-lg resize-none ${errors.message ? 'border-destructive' : 'border-muted'}`}
                      placeholder="请简要描述您的健康咨询需求..."
                    />
                    {errors.message && (
                      <span className="text-sm text-destructive">{errors.message}</span>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-lg cta-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        提交咨询
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 服务承诺 */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {servicePromises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <promise.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h4 className="text-sm font-medium mb-1">{promise.title}</h4>
                  <p className="text-xs text-muted-foreground">{promise.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                >
                  <Card className="hover-card group border-none shadow-elevation glass-effect">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-lg font-medium mb-1">{item.content}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            {/* 品质保证标识 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center justify-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary">专业认证 安心托付</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
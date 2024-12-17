import React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Shield, Users, Heart, ArrowRight, Star, Crown, Brain } from 'lucide-react'
import Image from 'next/image'

// Core product metrics
const PRODUCT_METRICS = {
  SATISFACTION: '98%',
  RENEWAL_RATE: '95%',
  ACTIVE_USERS: '50万+',
  EXPERT_COUNT: '100+'
}

// Updated product configurations with real data
const products = [
  {
    id: 'kangfuxin',
    title: "康复馨",
    subtitle: "初原肌底修护喷雾",
    description: "科技好医生 本草福能源",
    price: "278",
    originalPrice: "499",
    period: "件",
    metrics: {
      users: "5万+",
      satisfaction: "93%",
      response: "快速修护"
    },
    features: [
      { title: "补水保湿", desc: "深层滋润" },
      { title: "屏障修护", desc: "科技养护" },
      { title: "舒缓维稳", desc: "安心耐受" },
      { title: "紧致抗皱", desc: "多效修护" },
      { title: "真空保鲜", desc: "更加安全" },
      { title: "纳米喷雾", desc: "SPA级护理" }
    ],
    image: "/images/products/kangfuxin.png",
    color: "emerald",
    icon: Shield
  },
  {
    id: 'ua1290',
    title: "UA1290石榴饮",
    subtitle: "高端营养饮品",
    description: "AI智能分析 + 专家指导",
    price: "469",
    originalPrice: "599",
    period: "件",
    metrics: {
      users: "20万+",
      satisfaction: "98%",
      response: "15分钟"
    },
    features: [
      { title: "抗衰老功效", desc: "科学配方" },
      { title: "营养补充", desc: "全面均衡" },
      { title: "免疫提升", desc: "增强体质" },
      { title: "代谢调节", desc: "活力焕发" },
      { title: "健康管理", desc: "实时监测" },
      { title: "专家支持", desc: "一对一服务" }
    ],
    image: "/images/products/ua1290.png",
    color: "primary",
    icon: Heart
  },
  {
    id: 'shenguo',
    title: "圣果天浆",
    subtitle: "专业营养饮品",
    description: "平衡代谢·健康先导",
    price: "242",
    originalPrice: "348",
    period: "件",
    metrics: {
      users: "15万+", 
      satisfaction: "97%",
      response: "10分钟"
    },
    features: [
      { title: "营养评估", desc: "专业分析" },
      { title: "成分优化", desc: "科学配比" },
      { title: "代谢调节", desc: "平衡健康" },
      { title: "活力提升", desc: "全面焕新" },
      { title: "品质保证", desc: "严格把控" },
      { title: "贴心服务", desc: "专业指导" }
    ],
    image: "/images/products/shenguo.png",
    color: "secondary",
    icon: Brain
  },
  {
    id: 'fushuibao',
    title: "福睡宝",
    subtitle: "睡眠理疗",
    description: "深度睡眠，黑科技植萃配方",
    price: "449",
    originalPrice: "578",
    period: "件",
    metrics: {
      users: "5万+",
      satisfaction: "99%", 
      response: "5分钟"
    },
    features: [
      { title: "睡眠监测", desc: "智能分析" },
      { title: "深度调理", desc: "个性方案" },
      { title: "睡眠质量", desc: "专家评估" },
      { title: "睡眠报告", desc: "每周更新" },
      { title: "生物节律", desc: "智能调整" },
      { title: "VIP服务", desc: "专属管家" }
    ],
    image: "/images/products/fushuibao.png",
    color: "accent",
    icon: Users
  }
]

export default function Products() {
  return (
    <section id="products" className="relative py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/10 px-4 py-2 rounded-full mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              福能源生物科技出品
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-6">现有产品系列</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            基于{PRODUCT_METRICS.ACTIVE_USERS}用户数据分析，为不同人群定制专业的健康管理服务
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const Icon = product.icon

            return (
              <div key={product.id} className="flex">
                <Card className="relative flex flex-col w-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border/50">
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-${product.color}/10 
                        flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                        <Icon className={`w-6 h-6 text-${product.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{product.title}</h3>
                        <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl font-bold">¥{product.price}</span>
                        <span className="text-muted-foreground">/{product.period}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-5 h-5 rounded-full bg-${product.color}/10 
                            flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className={`w-3 h-3 text-${product.color}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{feature.title}</p>
                            <p className="text-xs text-muted-foreground">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    {/* <div className="grid grid-cols-3 gap-2 mb-6 text-sm">
                      {Object.entries(product.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`font-bold text-${product.color}`}>{value}</div>
                          <div className="text-xs text-muted-foreground">
                            {key === 'users' ? '用户' : 
                             key === 'satisfaction' ? '满意度' : '响应'}
                          </div>
                        </div>
                      ))}
                    </div> */}

                    {/* Button */}
                    <Button 
                      className="w-full h-11 rounded-full group border-2 border-border hover:border-primary"
                      variant="outline"
                    >
                      <span className="mr-2">立即开启</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">100%退款保证</span>
            </div>
            <Button 
              variant="outline"
              className="rounded-full group"
            >
              <Star className="w-4 h-4 mr-2 text-primary" />
              <span>联系顾问获取专属方案建议</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
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
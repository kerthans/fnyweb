// src/components/sections/TrustIndicators.tsx
import Image from 'next/image';
export default function TrustIndicators() {
    const trustElements = [
      {
        icon: "/images/icons/certificate.svg",
        title: "专业认证",
        description: "获得国家级健康管理认证"
      },
      {
        icon: "/images/icons/users.svg",
        title: "服务体验",
        description: "98%客户好评度"
      },
      {
        icon: "/images/icons/shield.svg",
        title: "安全保障",
        description: "ISO27001信息安全认证"
      },
      {
        icon: "/images/icons/award.svg",
        title: "行业领先",
        description: "连续5年行业口碑第一"
      }
    ]
  
    return (
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustElements.map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
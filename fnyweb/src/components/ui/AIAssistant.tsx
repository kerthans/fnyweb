// src/components/ui/AIAssistant.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X } from 'lucide-react'
import Image from 'next/image'

interface Message {
  id: number
  type: 'user' | 'bot'
  content: string
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShownInitial, setHasShownInitial] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: '您好！我是福能源健康顾问，很高兴为您服务。让我来介绍一下我们的特色服务：\n\n1. 专业的健康管理方案\n2. 个性化营养指导\n3. 科学运动规划\n\n请问您对哪个方面最感兴趣？'
    }
  ])
  const [input, setInput] = useState('')
  const [isButtonAnimating, setIsButtonAnimating] = useState(false)

  useEffect(() => {
    // 5秒后自动打开助手
    const timer = setTimeout(() => {
      if (!hasShownInitial) {
        setIsOpen(true)
        setHasShownInitial(true)
      }
    }, 5000)

    // 定时动画提醒
    const animationTimer = setInterval(() => {
      if (!isOpen) {
        setIsButtonAnimating(true)
        setTimeout(() => setIsButtonAnimating(false), 1000)
      }
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearInterval(animationTimer)
    }
  }, [hasShownInitial, isOpen])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      content: input
    }])

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: '感谢您的咨询！我们的专业健康顾问将立即与您取得联系。同时，建议您留下联系方式，以便我们为您提供更专业的一对一服务。'
      }])
    }, 1000)

    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="absolute bottom-20 right-0"
          >
            <Card className="w-96 shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-t-lg flex items-center space-x-3">
                  <Image
                    src="/fny_logo.png"
                    alt="福能源Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-medium">福能源健康顾问</h3>
                    <p className="text-white/80 text-sm">专业健康管理专家</p>
                  </div>
                </div>
                
                <div className="h-96 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-white to-primary/5">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100'
                        }`}
                      >
                        {message.content.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t bg-white rounded-b-lg">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="请输入您的问题..."
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={isButtonAnimating ? {
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
        } : {}}
      >
        <Button
          size="lg"
          className={`w-16 h-16 rounded-full shadow-lg ${
            isOpen ? 'bg-destructive' : 'bg-primary'
          } hover:scale-110 transition-transform`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6" />
          )}
        </Button>
      </motion.div>
    </div>
  )
}
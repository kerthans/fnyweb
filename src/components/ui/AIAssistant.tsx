'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, Heart, Brain, Activity, Dumbbell, Apple, PhoneCall, Calendar } from 'lucide-react'
import Image from 'next/image'


// 统一配置项
const CONFIG = {
  BRAND: {
    NAME: "福能源健康顾问",
    TITLE: "专业健康管理专家",
    LOGO: "/fny_logo.png", // 待替换为实际logo
  },
  
  TRIGGERS: {
    INITIAL_DELAY: 5000, // 首次加载后延迟显示时间
    SCROLL_THRESHOLD: 300, // 滚动触发阈值(像素)
    IDLE_TIME: 30000, // 停留多久后触发(毫秒)
    REMINDER_INTERVAL: 15000, // 提醒动画间隔
    EXIT_INTENT_ENABLED: true, // 是否启用退出意图检测
  },

  POSITION: {
    DEFAULT_BOTTOM: 25,
    DEFAULT_RIGHT: 25,
    SNAP_THRESHOLD: 1000000, // 自动靠边的阈值(像素)
  },

  QUICK_REPLIES: [
    {
      icon: <Heart className="w-4 h-4" />,
      text: "健康评估",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      text: "心理咨询",
    },
    {
      icon: <Activity className="w-4 h-4" />,
      text: "体检服务",
    },
    {
      icon: <Dumbbell className="w-4 h-4" />,
      text: "运动指导",
    },
    {
      icon: <Apple className="w-4 h-4" />,
      text: "营养方案",
    },
  ],

  MESSAGES: {
    WELCOME: `
      您好！我是您的专属健康顾问。
      
      我们提供:
      🏥 专业健康评估
      🧠 个性化营养方案
      💪 科学运动指导
      ❤️ 全程健康管理
      
      请问您最关心哪个方面呢？
    `.trim(),
    
    SCROLL_TRIGGER: "看到您对我们的服务感兴趣，需要了解更多详情吗？",
    IDLE_TRIGGER: "您似乎在寻找健康服务相关信息，需要我的帮助吗？",
    EXIT_INTENT: "等等！您可能会对我们的健康服务感兴趣，要了解更多吗？",
  },

  UI: {
    CHAT_HEIGHT: 400,
    CHAT_WIDTH: 380,
    BUTTON_SIZE: 16, // rem
  }
}

interface Message {
  id: number
  type: 'user' | 'bot'
  content: string
  timestamp: number
}

interface Position {
  x: number
  y: number
  bottom?: number
  right?: number
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShownInitial, setHasShownInitial] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: CONFIG.MESSAGES.WELCOME,
      timestamp: Date.now()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
    bottom: CONFIG.POSITION.DEFAULT_BOTTOM,
    right: CONFIG.POSITION.DEFAULT_RIGHT
  })
  
  const chatRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)
  const lastScrollPosition = useRef(0)
  const idleTimer = useRef<NodeJS.Timeout>()
  const isDragging = useRef(false)

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 初始化触发器
  useEffect(() => {
    // 首次加载延迟显示
    const initialTimer = setTimeout(() => {
      if (!hasShownInitial) {
        setIsOpen(true)
        setHasShownInitial(true)
      }
    }, CONFIG.TRIGGERS.INITIAL_DELAY)

    // 滚动检测
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (
        !isOpen && 
        currentScroll > CONFIG.TRIGGERS.SCROLL_THRESHOLD &&
        currentScroll > lastScrollPosition.current
      ) {
        setIsOpen(true)
        addBotMessage(CONFIG.MESSAGES.SCROLL_TRIGGER)
      }
      lastScrollPosition.current = currentScroll
    }

    // 停留时间检测
    const resetIdleTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        if (!isOpen) {
          setIsOpen(true)
          addBotMessage(CONFIG.MESSAGES.IDLE_TRIGGER)
        }
      }, CONFIG.TRIGGERS.IDLE_TIME)
    }

    // 退出意图检测
    const handleExitIntent = (e: MouseEvent) => {
      if (
        CONFIG.TRIGGERS.EXIT_INTENT_ENABLED &&
        !isOpen &&
        e.clientY <= 0
      ) {
        setIsOpen(true)
        addBotMessage(CONFIG.MESSAGES.EXIT_INTENT)
      }
    }

    // 事件监听
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', resetIdleTimer)
    window.addEventListener('keydown', resetIdleTimer)
    window.addEventListener('mouseleave', handleExitIntent)
    resetIdleTimer()

    return () => {
      clearTimeout(initialTimer)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', resetIdleTimer)
      window.removeEventListener('keydown', resetIdleTimer)
      window.removeEventListener('mouseleave', handleExitIntent)
    }
  }, [hasShownInitial, isOpen])

  // 处理拖动
  useEffect(() => {
    if (!dragRef.current) return

    let startX = 0
    let startY = 0
    let startBottom = 0
    let startRight = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX = e.clientX
      startY = e.clientY
      startBottom = position.bottom || CONFIG.POSITION.DEFAULT_BOTTOM
      startRight = position.right || CONFIG.POSITION.DEFAULT_RIGHT
      
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return

      const deltaX = startX - e.clientX
      const deltaY = startY - e.clientY
      
      const newBottom = startBottom - deltaY
      const newRight = startRight + deltaX

      setPosition(prev => ({
        ...prev,
        bottom: Math.max(0, newBottom),
        right: Math.max(0, newRight)
      }))
    }

    const handleMouseUp = () => {
      isDragging.current = false
      
      // 自动靠边
      const windowWidth = window.innerWidth
      const currentRight = position.right || CONFIG.POSITION.DEFAULT_RIGHT
      
      const newRight = currentRight < CONFIG.POSITION.SNAP_THRESHOLD 
        ? 0 
        : (windowWidth - currentRight < CONFIG.POSITION.SNAP_THRESHOLD 
          ? windowWidth - 80 
          : currentRight)

      setPosition(prev => ({
        ...prev,
        right: newRight
      }))

      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    dragRef.current.addEventListener('mousedown', handleMouseDown)

    return () => {
      if (dragRef.current) {
        dragRef.current.removeEventListener('mousedown', handleMouseDown)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [position])

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'bot',
      content,
      timestamp: Date.now()
    }])
  }

  const handleSend = async (content: string = input) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: content.trim(),
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // 模拟回复延迟
    await new Promise(resolve => setTimeout(resolve, 1000))

    const botMessage: Message = {
      id: messages.length + 2,
      type: 'bot',
      content: generateResponse(content),
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const generateResponse = (input: string): string => {
    if (input.includes('价格') || input.includes('费用')) {
      return '我们的服务价格根据具体方案定制会有所不同。您可以留下联系方式，我们的健康顾问会为您详细介绍并制定最适合您的方案。'
    }
    return '感谢您的咨询！为了给您提供更专业的建议，建议我们预约一次免费的健康评估。\n\n您可以点击下方按钮，选择您方便的时间。'
  }

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div 
      ref={dragRef}
      className="fixed z-50"
      style={{
        bottom: `${position.bottom}px`,
        right: `${position.right}px`,
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="absolute bottom-20 right-0"
          >
            <Card className={`w-[${CONFIG.UI.CHAT_WIDTH}px] shadow-elevation overflow-hidden`}>
              <CardContent className="p-0">
                {/* 头部 */}
                <div className="bg-gradient-to-r from-primary via-secondary to-accent p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur">
                      <Image
                        src={CONFIG.BRAND.LOGO}
                        alt={CONFIG.BRAND.NAME}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{CONFIG.BRAND.NAME}</h3>
                      <p className="text-white/80 text-sm">{CONFIG.BRAND.TITLE}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* 聊天区域 */}
                <div 
                  ref={chatRef}
                  className={`h-[${CONFIG.UI.CHAT_HEIGHT}px] p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-background to-muted`}
                >
                  {messages.map(message => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`group max-w-[85%] space-y-1`}>
                        <div className={`
                          p-3 rounded-2xl
                          ${message.type === 'user' 
                            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                            : 'bg-card shadow-sm border'}
                        `}>
                          {message.content.split('\n').map((line, i) => (
                            <p key={i} className="leading-relaxed">{line}</p>
                          ))}
                        </div>
                        <p className={`
                          text-xs opacity-0 group-hover:opacity-60 transition-opacity
                          ${message.type === 'user' ? 'text-right' : 'text-left'}
                        `}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex space-x-2"
                    >
                      <div className="bg-muted rounded-full p-3">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            transition: { repeat: Infinity, duration: 1 }
                          }}
                        >
                          <Activity className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* 快速回复 */}
                <div className="p-2 bg-muted/50 border-t border-b overflow-x-auto">
                  <div className="flex space-x-2">
                    {CONFIG.QUICK_REPLIES.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="flex-shrink-0 hover:bg-primary hover:text-white"
                        onClick={() => handleSend(reply.text)}
                      >
                        {reply.icon}
                        <span className="ml-2">{reply.text}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* 输入区域 */}
                <div className="p-4 bg-background">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="请输入您的问题..."
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button 
                      onClick={() => handleSend()}
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      预约咨询
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <PhoneCall className="w-4 h-4 mr-2" />
                      电话咨询
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 悬浮按钮 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-move"
      >
        <Button
          size="lg"
          className={`
            w-${CONFIG.UI.BUTTON_SIZE} h-${CONFIG.UI.BUTTON_SIZE} rounded-full shadow-elevation
            ${isOpen 
              ? 'bg-gradient-to-r from-destructive to-destructive/80' 
              : 'bg-gradient-to-r from-primary to-secondary'}
            hover:shadow-lg transition-all duration-300
          `}
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
# 福能源健康管理系统

一个现代化的健康管理服务平台，采用 Next.js 14 构建，提供专业的健康管理解决方案。

## 🌟 特性

- 💡 现代化 UI 设计
- 🚀 基于 Next.js 14 和 TypeScript
- 🎨 使用 Tailwind CSS 构建的响应式界面
- ✨ Framer Motion 提供流畅动画效果
- 🛡️ 类型安全的开发体验
- 🎭 明暗主题切换支持
- 📱 移动端优先的响应式设计

## 🛠️ 技术栈

- **框架：** [Next.js 14](https://nextjs.org/)
- **语言：** [TypeScript](https://www.typescriptlang.org/)
- **样式：** [Tailwind CSS](https://tailwindcss.com/)
- **组件：** [shadcn/ui](https://ui.shadcn.com/)
- **动画：** [Framer Motion](https://www.framer.com/motion/)
- **图标：** [Lucide Icons](https://lucide.dev/)
- **字体：** [Inter](https://fonts.google.com/specimen/Inter)

## 📦 项目结构

```
fnyweb/
├── src/
│   ├── app/                 # 应用程序路由和页面
│   ├── components/          # 可重用组件
│   │   ├── layout/         # 布局组件
│   │   ├── sections/       # 页面区块组件
│   │   └── ui/            # UI 基础组件
│   ├── lib/                # 工具函数和配置
│   └── styles/             # 全局样式
├── public/                 # 静态资源
│   ├── images/            # 图片资源
│   └── fonts/             # 字体资源
└── package.json           # 项目依赖
```

## 🚀 快速开始

1. **克隆项目**

```bash
git clone https://github.com/yourusername/fnyweb.git
cd fnyweb
```

2. **安装依赖**

```bash
npm install
# 或
yarn install
```

3. **启动开发服务器**

```bash
npm run dev
# 或
yarn dev
```

4. **构建生产版本**

```bash
npm run build
# 或
yarn build
```

## 🎨 自定义主题

项目使用 Tailwind CSS 进行样式管理，主题配置位于 `src/app/globals.css`。您可以通过修改以下变量来自定义主题：

```css
:root {
  --primary: 174 80% 36%;    /* 主色调 */
  --secondary: 16 85% 67%;   /* 次要色调 */
  --accent: 151 55% 42%;     /* 强调色 */
  /* 更多颜色变量... */
}
```

## 📱 响应式设计

项目采用移动端优先的响应式设计，断点设置如下：

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 🧩 主要组件

- **Hero:** 首页主视觉区域
- **Features:** 功能特性展示
- **Products:** 产品方案展示
- **Testimonials:** 用户评价展示
- **Contact:** 联系我们表单
- **AIAssistant:** AI 智能助手

## 🔧 配置说明

1. **环境变量**

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

2. **图片配置**

将所需图片资源放置在 `public/images/` 目录下的相应子文件夹中：

```
public/images/
├── hero/
├── features/
├── products/
└── testimonials/
```

## 📄 项目规范

- **代码风格:** 使用 Prettier 进行代码格式化
- **命名规范:** 采用语义化命名
- **组件编写:** 遵循 React Hooks 最佳实践
- **注释规范:** 重要逻辑和复杂组件需添加注释

## 🚀 部署

项目可以部署到 Vercel 平台：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署

## 📝 开发注意事项

1. 组件开发遵循原子设计原则
2. 使用 TypeScript 类型声明
3. 保持代码简洁和可维护性
4. 注意性能优化
5. 遵循 accessibility 最佳实践

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 发起 Pull Request

## 📫 联系我们

- Email: contact@fny.com
- Website: https://www.fny.com
- Tel: 400-888-9999

## 📜 许可证

[MIT License](LICENSE)
# 技术栈说明

## 项目概览

本项目是一个基于 Next.js App Router 的静态展示型网站，用于展示时空智能研究中心的简介、研究方向、团队成员、论文和代表工作。

## 核心技术栈

- **框架**：Next.js 15
- **前端库**：React 19、React DOM 19
- **语言**：TypeScript 5
- **样式方案**：Tailwind CSS 3
- **构建工具链**：Next.js 内置构建系统
- **代码检查**：ESLint 9、eslint-config-next
- **CSS 处理**：PostCSS、Autoprefixer

## 主要依赖

### 运行时依赖

- `next`：应用框架，负责路由、构建、渲染与静态页面生成。
- `react` / `react-dom`：组件化 UI 基础。
- `@fontsource-variable/noto-sans-sc`：中文无衬线字体。
- `@fontsource/jetbrains-mono`：等宽字体。

### 开发依赖

- `typescript`：类型系统与编译检查。
- `tailwindcss`：原子化 CSS 工具类。
- `postcss`：CSS 转换管线。
- `autoprefixer`：自动补齐浏览器前缀。
- `eslint` / `eslint-config-next`：代码质量检查。
- `@types/node`、`@types/react`、`@types/react-dom`：TypeScript 类型声明。

## 项目结构

```text
src/
  app/
    layout.tsx       # 根布局，全站 Header、BackToTop 等公共结构
    page.tsx         # 首页
    team/page.tsx    # 团队与组织结构详情页
    works/page.tsx   # 论文和工作详情页
    globals.css      # 全局样式与 Tailwind 入口
  components/        # 可复用 UI 组件
  data/
    site.ts          # 站点文案、团队、论文、工作等静态数据
```

## 路由与页面

- `/`：首页，包含 Hero、中心简介、研究方向、团队预览、论文预览等区块。
- `/team`：团队成员与组织结构详情页。
- `/works`：论文成果与代表工作详情页。
- `/icon`：Next.js 动态图标路由。
- `/favicon.ico`：通过 `next.config.ts` 重写到 `/icon`。

## 样式与设计系统

项目使用 Tailwind CSS 作为主要样式方案，配置位于 `tailwind.config.ts`。

当前扩展内容包括：

- 自定义字体族：中文字体 `Noto Sans SC`，等宽字体 `JetBrains Mono`。
- 主色体系：`imu` 色板，核心品牌色为 `#046ba7`。
- 自定义背景：
  - `grid-faint`
  - `grid-on-brand`
  - `hero-imu`
- 自定义阴影：
  - `shadow-card`
  - `shadow-card-brand`
- 自定义动画：
  - `ambient-fade-in`

全局样式位于 `src/app/globals.css`，包含 Tailwind 入口、字体变量、页面背景、选中文本样式和动画关键帧。

## TypeScript 配置

TypeScript 配置位于 `tsconfig.json`，主要特点：

- 开启 `strict` 严格模式。
- 使用 `moduleResolution: "bundler"`。
- 使用 Next.js TypeScript 插件。
- 配置路径别名：`@/*` 指向 `./src/*`。

## 构建与运行命令

```bash
npm run dev
```

启动本地开发服务器。

```bash
npm run build
```

执行生产构建、类型检查与页面生成。

```bash
npm run start
```

启动生产模式服务。

```bash
npm run lint
```

运行 Next.js lint 检查。

## 当前实现特征

- 使用 App Router 组织页面。
- 全站共用 `SiteHeader`，通过路由切换 Logo 旁标题。
- 顶部导航支持下拉菜单、悬停展开和点击跳转。
- 首页锚点跳转支持平滑滚动，并考虑固定顶栏高度。
- 卡片组件添加了 hover 动效，包括轻微放大、阴影和边框反馈。
- `BackToTop` 提供滚动后回到顶部能力。
- 内容数据集中维护在 `src/data/site.ts`，适合静态站点快速更新。

## 生产部署说明

项目可以按标准 Next.js 流程部署：

1. 安装依赖：`npm install`
2. 构建项目：`npm run build`
3. 启动服务：`npm run start`

也可以部署到支持 Next.js 的平台，如 Vercel、Netlify 或自托管 Node.js 环境。

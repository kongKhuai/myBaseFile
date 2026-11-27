全局技能在 `C:\Users\86166\.agents\skills`，Cursor 用户技能在 `C:\Users\86166\.cursor\skills`，Cursor 自带技能在 `C:\Users\86166\.cursor\skills-cursor`。两边都有的，写进请求里就会被选中。短命令 `/polish`、`/critique` 这些走的是 UI Craft；Impeccable 的同名能力要写成 `/impeccable polish`。

## 两边都有：界面主技能

| 名称 | 功能 | 唤醒词 |
|---|---|---|
| ui-craft | 做界面时避开 AI 模板感，带发现阶段和质检 | 做界面、改页面、设计系统 |
| impeccable | 按设计动词改前端，可写 PRODUCT.md / DESIGN.md | `/impeccable`，后面加子命令 |
| oil-ui | 定方向、出对比、按截图打磨 | 设计界面、改版、评审页面、多方案对比 |
| frontend-design | 给新页面定视觉方向和字体，避免默认模板 | 做有辨识度的界面、重做视觉 |

Impeccable 子命令：`init`、`document`、`shape`、`extract`、`critique`、`audit`、`polish`、`bolder`、`quieter`、`distill`、`harden`、`onboard`、`animate`、`colorize`、`typeset`、`layout`、`delight`、`overdrive`、`clarify`、`adapt`、`optimize`、`live`、`generate`。例如 `/impeccable init`、`/impeccable critique 首页`。

## 两边都有：UI Craft 命令

| 名称 | 功能 | 唤醒词 |
|---|---|---|
| start | 看当前项目该用哪条命令 | `/start` |
| shape | 先出线框、状态和内容清单，再写代码 | `/shape` |
| craft | 按配方一次做完整页面 | `/craft`、做一整页 |
| redesign | 保留品牌和信息结构再改版 | `/redesign`、刷新这页 |
| sddesign | 从简报、token、线框做到上线 | `/sddesign` |
| animate | 加动效，或去掉多余动效 | `/animate`、加动画 |
| adapt | 修断点、触控、安全区 | `/adapt`、做响应式 |
| typeset | 调字体、字号、字重 | `/typeset`、改排版 |
| colorize | 用一个强调色，或把过花的颜色收回 | `/colorize` |
| clarify | 改按钮、报错、空状态文案 | `/clarify`、改文案 |
| extract | 抽出重复组件和设计 token | `/extract` |
| distill | 删掉不帮忙的内容和装饰 | `/distill`、太挤了 |
| delight | 加一两处记得住的细节 | `/delight` |
| polish | 最后打磨字距、间距、悬停 | `/polish`、看起来很普通 |
| bolder | 加强个性，仍保持专业 | `/bolder`、更大胆 |
| quieter | 把过闹的界面收静 | `/quieter`、收一点 |
| critique | 看层级和 AI 模板感，默认不改代码 | `/critique`、这页哪里不对 |
| heuristic | 按可用性准则打 0–100 分 | `/heuristic` |
| audit | 查无障碍、性能、响应式 | `/audit` |
| unhappy | 先补加载、空、错、离线等状态 | `/unhappy` |
| harden | 把非正常路径补到可上线 | `/harden` |
| finalize | 上线前质检，给出能不能发 | `/finalize` |
| brief | 写项目设计简报到 `.ui-craft/brief.md` | `/brief` |
| tokens | 建立或检查三层设计 token | `/tokens` |
| remember | 把这次纠正写进设计简报 | `/remember` |
| friction-log | 把使用摩擦记成 GitHub issue | `/friction-log` |
| ui-craft-minimal | 留白极简，接近 Linear / Notion | minimal、留白、Linear 风格 |
| ui-craft-editorial | 杂志、长文排版 | editorial、杂志、长文 |
| ui-craft-dense-dashboard | 高密度后台和数据页 | dashboard、数据密集、后台 |

## 两边都有：Vue 和其他

| 名称 | 功能 | 唤醒词 |
|---|---|---|
| vue-best-practices | Vue 3 写法，默认 Composition API 和 TypeScript | 写 Vue、改 `.vue` |
| vue-development-guides | Vue / Nuxt 开发和重构约定 | 开发 Vue、重构 Nuxt |
| vue-debug-guides | 查 Vue 运行时、异步和 SSR 问题 | Vue 报错、hydration |
| vue-router-best-practices | 路由、守卫、参数 | Vue Router |
| vue-pinia-best-practices | Pinia 状态 | Pinia、store |
| vue-jsx-best-practices | Vue JSX 写法 | Vue JSX |
| vue-options-api-best-practices | Options API 写法 | Options API |
| vue-testing-best-practices | Vitest、组件测试、Playwright | 测 Vue |
| create-adaptable-composable | 写可接收普通值、ref 或 getter 的 composable | 写 composable |
| find-skills | 搜索并安装技能 | 有没有 skill、找一个 skill |

## 仅 Cursor

| 名称 | 功能 | 唤醒词 |
|---|---|---|
| ui-ux-pro-max | 从本地库查风格、配色、字体、图表和 UX 规则 | 做页面、推荐配色、选字体、加图表 |
| design | 标志、品牌、幻灯片、图标、社媒图 | 设计 logo、做 CIP、生成图标 |
| design-system | 设计 token、组件规范和幻灯片 | 设计 token、组件规范 |
| brand | 品牌语气、视觉识别、风格指南 | 品牌、语气、风格指南 |
| banner-design | 社媒、广告、网站头图横幅 | 做 banner、头图 |
| slides | 做 HTML 演示文稿 | 做幻灯片、做 PPT |
| ui-styling | shadcn/ui、Tailwind、可访问组件 | 用 shadcn、Tailwind 做界面 |

## 仅全局 Agents

| 名称 | 功能 | 唤醒词 |
|---|---|---|
| codebase-architecture-analysis | 按项目、模块、方法梳理架构和业务流程 | 梳理架构、搞懂业务流程 |
| humanizer-zh | 去掉中文里的 AI 写作痕迹 | 改得像人写的、去 AI 味 |
| karpathy-guidelines | 写代码时少做多余设计，改动保持小而可验证 | 按 Karpathy、少过度设计 |
| teach-yourself-skill | 规划并生成课程、练习和教程 | 做课程、写教程 |
| web-asset-generator | 生成 favicon、PWA 图标和分享图 | favicon、Open Graph、分享图 |
| web-design-guidelines | 按网页界面规范审 UI | 检查无障碍、审设计规范 |

## Cursor 内置

| 名称 | 功能 | 唤醒词 |
|---|---|---|
| automate | 创建 Cursor 自动化 | 做 Automation |
| autopilot | 处理 PR 评论、冲突和 CI，直到能合并 | 把 PR 处理到可合并 |
| canvas | 做可在聊天旁打开的实时页面 | 做 canvas、`.canvas.tsx` |
| create-hook | 写 Cursor hook | 创建 hook |
| create-rule | 写 Cursor 规则 | 创建 rule、`.cursor/rules` |
| create-skill | 写新的 Agent Skill | 创建 skill、SKILL.md |
| create-subagent | 创建专用子代理 | 创建 subagent |
| goal | 设一个目标并持续做到完成 | 设一个 goal |
| loop | 按间隔重复跑一段提示 | `/loop 5m` |
| migrate-to-skills | 把规则和斜杠命令迁成技能 | 迁移 rules、迁移 commands |
| new-repo | 在 Cursor 上建仓库并推送 | 建 Cursor 仓库 |
| onboard | Cursor 入门，选一个起步目标 | `/onboard` |
| origin | 安装或修复 origin CLI | origin 登录失败、配 Cursor 仓库 |
| rename-chat | 给当前对话改名 | `/rename-chat` |
| review | 用 Bugbot 或安全审查看改动 | 审查改动 |
| review-bugbot | 用 Bugbot 审查 | Bugbot 审查 |
| review-security | 做安全审查 | 安全审查 |
| sdk | 用 Cursor SDK 写脚本或流水线 | `@cursor/sdk`、`Agent.create` |
| share | 把项目保存或分享到 Cursor | 备份项目、分享到 Cursor |
| shell | 把后面的文字当终端命令执行 | `/shell` |
| split-to-prs | 把当前改动拆成几个小 PR | 拆成多个 PR |
| statusline | 配置 CLI 状态栏 | statusline、状态栏 |
| update-cli-config | 改 CLI 配置 | CLI 权限、审批模式 |
| update-cursor-settings | 改编辑器设置 | 改字体、主题、settings.json |
| visualize | 在对话里画图表或示意图 | `/visualize` |
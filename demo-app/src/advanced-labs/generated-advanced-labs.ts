import type { AdvancedLabDefinition } from './registry'

// 本文件由 scripts/generate-advanced-job-track.mjs 生成。
// 修改高级轨道后，运行 npm run advanced:generate。
export const generatedAdvancedLabs: AdvancedLabDefinition[] = [
  {
    "id": "W01D01",
    "week": "01",
    "day": "01",
    "title": "AI Gateway：前端如何安全接入真实模型",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-01/day-01",
    "apiPath": "/api/advanced/week-01/day-01",
    "lessonPath": "/advanced-track/lessons/week-01/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-01.md",
    "mode": "gateway",
    "build": "在 demo-app 里做一个 Node AI Gateway：前端只请求自己的服务端，服务端支持 mock / DeepSeek Provider，统一返回格式、错误类型和 requestId。",
    "skills": [
      "AI Gateway",
      "Provider 抽象",
      "API Key 服务端隔离",
      "统一响应契约",
      "requestId"
    ],
    "proof": [
      "一张 AI Gateway 边界图",
      "一次真实 DeepSeek 调用日志",
      "三类失败日志：无 Key、超时、Provider 错误"
    ],
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。",
    "flowSteps": [
      "从真实问题开始：前端不能直接把 API Key 暴露给浏览器，也不能把模型错误、超时、供应商差异全部丢给页面处理。本周你要做的是 AI 应用的服务端入口。",
      "确认前端入口：用你熟悉的 Vue 页面发起请求、展示 loading / success / error，并观察 Network 里前端到底看不到哪些敏感信息。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-01/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看 API Key 是否只在服务端，以及 Provider 错误是否被统一归类。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-01/day-01.vue",
      "demo-app/server/advanced-labs/week-01/day-01.js",
      "demo-app/server/index.js",
      "demo-app/server/ai-gateway/handleChat.js",
      "demo-app/server/providers/mockProvider.js",
      "demo-app/server/providers/deepseekProvider.js",
      ".env"
    ],
    "backendFocus": [
      "Node HTTP 路由",
      "环境变量读取",
      "Provider service 分层",
      "请求超时",
      "错误分类"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：一张 AI Gateway 边界图"
    ]
  },
  {
    "id": "W01D02",
    "week": "01",
    "day": "02",
    "title": "AI Gateway：前端如何安全接入真实模型",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-01/day-02",
    "apiPath": "/api/advanced/week-01/day-02",
    "lessonPath": "/advanced-track/lessons/week-01/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-01.md",
    "mode": "gateway",
    "build": "在 demo-app 里做一个 Node AI Gateway：前端只请求自己的服务端，服务端支持 mock / DeepSeek Provider，统一返回格式、错误类型和 requestId。",
    "skills": [
      "AI Gateway",
      "Provider 抽象",
      "API Key 服务端隔离",
      "统一响应契约",
      "requestId"
    ],
    "proof": [
      "一张 AI Gateway 边界图",
      "一次真实 DeepSeek 调用日志",
      "三类失败日志：无 Key、超时、Provider 错误"
    ],
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：新增或整理 /api/ai/chat 接口，前端只调用自己的服务端。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看 API Key 是否只在服务端，以及 Provider 错误是否被统一归类。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-01/day-02.vue",
      "demo-app/server/advanced-labs/week-01/day-02.js",
      "demo-app/server/index.js",
      "demo-app/server/ai-gateway/handleChat.js",
      "demo-app/server/providers/mockProvider.js",
      "demo-app/server/providers/deepseekProvider.js",
      ".env"
    ],
    "backendFocus": [
      "Node HTTP 路由",
      "环境变量读取",
      "Provider service 分层",
      "请求超时",
      "错误分类"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：一张 AI Gateway 边界图"
    ]
  },
  {
    "id": "W01D03",
    "week": "01",
    "day": "03",
    "title": "AI Gateway：前端如何安全接入真实模型",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-01/day-03",
    "apiPath": "/api/advanced/week-01/day-03",
    "lessonPath": "/advanced-track/lessons/week-01/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-01.md",
    "mode": "gateway",
    "build": "在 demo-app 里做一个 Node AI Gateway：前端只请求自己的服务端，服务端支持 mock / DeepSeek Provider，统一返回格式、错误类型和 requestId。",
    "skills": [
      "AI Gateway",
      "Provider 抽象",
      "API Key 服务端隔离",
      "统一响应契约",
      "requestId"
    ],
    "proof": [
      "一张 AI Gateway 边界图",
      "一次真实 DeepSeek 调用日志",
      "三类失败日志：无 Key、超时、Provider 错误"
    ],
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。",
    "flowSteps": [
      "继续执行第二条代码任务：实现 mockProvider 和 deepseekProvider 的统一接口。",
      "补后端基础：Node HTTP 路由 / 环境变量读取。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看 API Key 是否只在服务端，以及 Provider 错误是否被统一归类。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-01/day-03.vue",
      "demo-app/server/advanced-labs/week-01/day-03.js",
      "demo-app/server/index.js",
      "demo-app/server/ai-gateway/handleChat.js",
      "demo-app/server/providers/mockProvider.js",
      "demo-app/server/providers/deepseekProvider.js",
      ".env"
    ],
    "backendFocus": [
      "Node HTTP 路由",
      "环境变量读取",
      "Provider service 分层",
      "请求超时",
      "错误分类"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：一张 AI Gateway 边界图"
    ]
  },
  {
    "id": "W01D04",
    "week": "01",
    "day": "04",
    "title": "AI Gateway：前端如何安全接入真实模型",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-01/day-04",
    "apiPath": "/api/advanced/week-01/day-04",
    "lessonPath": "/advanced-track/lessons/week-01/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-01.md",
    "mode": "gateway",
    "build": "在 demo-app 里做一个 Node AI Gateway：前端只请求自己的服务端，服务端支持 mock / DeepSeek Provider，统一返回格式、错误类型和 requestId。",
    "skills": [
      "AI Gateway",
      "Provider 抽象",
      "API Key 服务端隔离",
      "统一响应契约",
      "requestId"
    ],
    "proof": [
      "一张 AI Gateway 边界图",
      "一次真实 DeepSeek 调用日志",
      "三类失败日志：无 Key、超时、Provider 错误"
    ],
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。",
    "flowSteps": [
      "继续执行第三条代码任务：给请求加 requestId、timeoutMs、错误类型和用户可见错误文案。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看 API Key 是否只在服务端，以及 Provider 错误是否被统一归类。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-01/day-04.vue",
      "demo-app/server/advanced-labs/week-01/day-04.js",
      "demo-app/server/index.js",
      "demo-app/server/ai-gateway/handleChat.js",
      "demo-app/server/providers/mockProvider.js",
      "demo-app/server/providers/deepseekProvider.js",
      ".env"
    ],
    "backendFocus": [
      "Node HTTP 路由",
      "环境变量读取",
      "Provider service 分层",
      "请求超时",
      "错误分类"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：一张 AI Gateway 边界图"
    ]
  },
  {
    "id": "W01D05",
    "week": "01",
    "day": "05",
    "title": "AI Gateway：前端如何安全接入真实模型",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-01/day-05",
    "apiPath": "/api/advanced/week-01/day-05",
    "lessonPath": "/advanced-track/lessons/week-01/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-01.md",
    "mode": "gateway",
    "build": "在 demo-app 里做一个 Node AI Gateway：前端只请求自己的服务端，服务端支持 mock / DeepSeek Provider，统一返回格式、错误类型和 requestId。",
    "skills": [
      "AI Gateway",
      "Provider 抽象",
      "API Key 服务端隔离",
      "统一响应契约",
      "requestId"
    ],
    "proof": [
      "一张 AI Gateway 边界图",
      "一次真实 DeepSeek 调用日志",
      "三类失败日志：无 Key、超时、Provider 错误"
    ],
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看 API Key 是否只在服务端，以及 Provider 错误是否被统一归类。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-01/day-05.vue",
      "demo-app/server/advanced-labs/week-01/day-05.js",
      "demo-app/server/index.js",
      "demo-app/server/ai-gateway/handleChat.js",
      "demo-app/server/providers/mockProvider.js",
      "demo-app/server/providers/deepseekProvider.js",
      ".env"
    ],
    "backendFocus": [
      "Node HTTP 路由",
      "环境变量读取",
      "Provider service 分层",
      "请求超时",
      "错误分类"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：一张 AI Gateway 边界图"
    ]
  },
  {
    "id": "W02D01",
    "week": "02",
    "day": "01",
    "title": "Streaming：AI 响应慢时前端体验怎么做",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-02/day-01",
    "apiPath": "/api/advanced/week-02/day-01",
    "lessonPath": "/advanced-track/lessons/week-02/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-02.md",
    "mode": "streaming",
    "build": "把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。",
    "skills": [
      "SSE",
      "流式输出",
      "取消生成",
      "前端状态机",
      "首字延迟"
    ],
    "proof": [
      "流式输出录屏或截图",
      "取消生成的 Network / 日志证据",
      "状态机图：idle -> streaming -> done / cancelled / failed"
    ],
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。",
    "flowSteps": [
      "从真实问题开始：AI 不是普通接口，用户可能等 10 秒才看到完整结果。前端要处理首字延迟、流式输出、中途取消、重试和失败恢复。",
      "确认前端入口：你重点练的是状态机和交互体验：按钮什么时候禁用、取消后输入是否保留、失败后是否能重试。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-02/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看流式状态是否可取消、可重试、可恢复。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-02/day-01.vue",
      "demo-app/server/advanced-labs/week-02/day-01.js",
      "demo-app/server/index.js",
      "demo-app/server/streaming/streamResponse.js",
      "demo-app/server/streaming/abortController.js"
    ],
    "backendFocus": [
      "SSE 响应头",
      "ReadableStream 基础",
      "AbortController",
      "连接断开处理",
      "首字延迟记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：流式输出录屏或截图"
    ]
  },
  {
    "id": "W02D02",
    "week": "02",
    "day": "02",
    "title": "Streaming：AI 响应慢时前端体验怎么做",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-02/day-02",
    "apiPath": "/api/advanced/week-02/day-02",
    "lessonPath": "/advanced-track/lessons/week-02/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-02.md",
    "mode": "streaming",
    "build": "把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。",
    "skills": [
      "SSE",
      "流式输出",
      "取消生成",
      "前端状态机",
      "首字延迟"
    ],
    "proof": [
      "流式输出录屏或截图",
      "取消生成的 Network / 日志证据",
      "状态机图：idle -> streaming -> done / cancelled / failed"
    ],
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：新增 /api/ai/stream 接口，先用 mock stream 跑通，再接真实 Provider。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看流式状态是否可取消、可重试、可恢复。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-02/day-02.vue",
      "demo-app/server/advanced-labs/week-02/day-02.js",
      "demo-app/server/index.js",
      "demo-app/server/streaming/streamResponse.js",
      "demo-app/server/streaming/abortController.js"
    ],
    "backendFocus": [
      "SSE 响应头",
      "ReadableStream 基础",
      "AbortController",
      "连接断开处理",
      "首字延迟记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：流式输出录屏或截图"
    ]
  },
  {
    "id": "W02D03",
    "week": "02",
    "day": "03",
    "title": "Streaming：AI 响应慢时前端体验怎么做",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-02/day-03",
    "apiPath": "/api/advanced/week-02/day-03",
    "lessonPath": "/advanced-track/lessons/week-02/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-02.md",
    "mode": "streaming",
    "build": "把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。",
    "skills": [
      "SSE",
      "流式输出",
      "取消生成",
      "前端状态机",
      "首字延迟"
    ],
    "proof": [
      "流式输出录屏或截图",
      "取消生成的 Network / 日志证据",
      "状态机图：idle -> streaming -> done / cancelled / failed"
    ],
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。",
    "flowSteps": [
      "继续执行第二条代码任务：前端把完整 loading 改成 token 逐步展示。",
      "补后端基础：SSE 响应头 / ReadableStream 基础。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看流式状态是否可取消、可重试、可恢复。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-02/day-03.vue",
      "demo-app/server/advanced-labs/week-02/day-03.js",
      "demo-app/server/index.js",
      "demo-app/server/streaming/streamResponse.js",
      "demo-app/server/streaming/abortController.js"
    ],
    "backendFocus": [
      "SSE 响应头",
      "ReadableStream 基础",
      "AbortController",
      "连接断开处理",
      "首字延迟记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：流式输出录屏或截图"
    ]
  },
  {
    "id": "W02D04",
    "week": "02",
    "day": "04",
    "title": "Streaming：AI 响应慢时前端体验怎么做",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-02/day-04",
    "apiPath": "/api/advanced/week-02/day-04",
    "lessonPath": "/advanced-track/lessons/week-02/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-02.md",
    "mode": "streaming",
    "build": "把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。",
    "skills": [
      "SSE",
      "流式输出",
      "取消生成",
      "前端状态机",
      "首字延迟"
    ],
    "proof": [
      "流式输出录屏或截图",
      "取消生成的 Network / 日志证据",
      "状态机图：idle -> streaming -> done / cancelled / failed"
    ],
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。",
    "flowSteps": [
      "继续执行第三条代码任务：实现取消生成和重新生成，保留用户原始输入。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看流式状态是否可取消、可重试、可恢复。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-02/day-04.vue",
      "demo-app/server/advanced-labs/week-02/day-04.js",
      "demo-app/server/index.js",
      "demo-app/server/streaming/streamResponse.js",
      "demo-app/server/streaming/abortController.js"
    ],
    "backendFocus": [
      "SSE 响应头",
      "ReadableStream 基础",
      "AbortController",
      "连接断开处理",
      "首字延迟记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：流式输出录屏或截图"
    ]
  },
  {
    "id": "W02D05",
    "week": "02",
    "day": "05",
    "title": "Streaming：AI 响应慢时前端体验怎么做",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-02/day-05",
    "apiPath": "/api/advanced/week-02/day-05",
    "lessonPath": "/advanced-track/lessons/week-02/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-02.md",
    "mode": "streaming",
    "build": "把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。",
    "skills": [
      "SSE",
      "流式输出",
      "取消生成",
      "前端状态机",
      "首字延迟"
    ],
    "proof": [
      "流式输出录屏或截图",
      "取消生成的 Network / 日志证据",
      "状态机图：idle -> streaming -> done / cancelled / failed"
    ],
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看流式状态是否可取消、可重试、可恢复。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-02/day-05.vue",
      "demo-app/server/advanced-labs/week-02/day-05.js",
      "demo-app/server/index.js",
      "demo-app/server/streaming/streamResponse.js",
      "demo-app/server/streaming/abortController.js"
    ],
    "backendFocus": [
      "SSE 响应头",
      "ReadableStream 基础",
      "AbortController",
      "连接断开处理",
      "首字延迟记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：流式输出录屏或截图"
    ]
  },
  {
    "id": "W03D01",
    "week": "03",
    "day": "01",
    "title": "结构化输出：让模型结果能进入业务系统",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-03/day-01",
    "apiPath": "/api/advanced/week-03/day-01",
    "lessonPath": "/advanced-track/lessons/week-03/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-03.md",
    "mode": "schema",
    "build": "为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。",
    "skills": [
      "结构化输出",
      "Schema 校验",
      "Repair Prompt",
      "业务字段契约",
      "降级策略"
    ],
    "proof": [
      "Schema 文件或类型定义",
      "10 条格式失败样本",
      "修复前后对照日志"
    ],
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。",
    "flowSteps": [
      "从真实问题开始：模型输出一段自然语言很容易，但业务系统需要稳定字段。你要解决的是格式错误、字段缺失、内容不合格和自动修复。",
      "确认前端入口：前端只展示已经校验过的结果，不直接相信模型原文；错误状态要能告诉用户是格式失败还是内容失败。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-03/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看模型输出是否先过 Schema，再进入页面。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-03/day-01.vue",
      "demo-app/server/advanced-labs/week-03/day-01.js",
      "demo-app/server/schemas/rewriteResult.js",
      "demo-app/server/services/repairModelOutput.js",
      "demo-app/server/services/validateModelOutput.js"
    ],
    "backendFocus": [
      "运行时 Schema 校验",
      "JSON parse 防御",
      "错误码设计",
      "一次重试策略",
      "服务端字段契约"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：Schema 文件或类型定义"
    ]
  },
  {
    "id": "W03D02",
    "week": "03",
    "day": "02",
    "title": "结构化输出：让模型结果能进入业务系统",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-03/day-02",
    "apiPath": "/api/advanced/week-03/day-02",
    "lessonPath": "/advanced-track/lessons/week-03/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-03.md",
    "mode": "schema",
    "build": "为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。",
    "skills": [
      "结构化输出",
      "Schema 校验",
      "Repair Prompt",
      "业务字段契约",
      "降级策略"
    ],
    "proof": [
      "Schema 文件或类型定义",
      "10 条格式失败样本",
      "修复前后对照日志"
    ],
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：定义 rewriteResult schema：rewrittenText、tone、riskFlags、reason。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看模型输出是否先过 Schema，再进入页面。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-03/day-02.vue",
      "demo-app/server/advanced-labs/week-03/day-02.js",
      "demo-app/server/schemas/rewriteResult.js",
      "demo-app/server/services/repairModelOutput.js",
      "demo-app/server/services/validateModelOutput.js"
    ],
    "backendFocus": [
      "运行时 Schema 校验",
      "JSON parse 防御",
      "错误码设计",
      "一次重试策略",
      "服务端字段契约"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：Schema 文件或类型定义"
    ]
  },
  {
    "id": "W03D03",
    "week": "03",
    "day": "03",
    "title": "结构化输出：让模型结果能进入业务系统",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-03/day-03",
    "apiPath": "/api/advanced/week-03/day-03",
    "lessonPath": "/advanced-track/lessons/week-03/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-03.md",
    "mode": "schema",
    "build": "为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。",
    "skills": [
      "结构化输出",
      "Schema 校验",
      "Repair Prompt",
      "业务字段契约",
      "降级策略"
    ],
    "proof": [
      "Schema 文件或类型定义",
      "10 条格式失败样本",
      "修复前后对照日志"
    ],
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。",
    "flowSteps": [
      "继续执行第二条代码任务：服务端校验模型 JSON，失败后只 repair 一次。",
      "补后端基础：运行时 Schema 校验 / JSON parse 防御。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看模型输出是否先过 Schema，再进入页面。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-03/day-03.vue",
      "demo-app/server/advanced-labs/week-03/day-03.js",
      "demo-app/server/schemas/rewriteResult.js",
      "demo-app/server/services/repairModelOutput.js",
      "demo-app/server/services/validateModelOutput.js"
    ],
    "backendFocus": [
      "运行时 Schema 校验",
      "JSON parse 防御",
      "错误码设计",
      "一次重试策略",
      "服务端字段契约"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：Schema 文件或类型定义"
    ]
  },
  {
    "id": "W03D04",
    "week": "03",
    "day": "04",
    "title": "结构化输出：让模型结果能进入业务系统",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-03/day-04",
    "apiPath": "/api/advanced/week-03/day-04",
    "lessonPath": "/advanced-track/lessons/week-03/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-03.md",
    "mode": "schema",
    "build": "为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。",
    "skills": [
      "结构化输出",
      "Schema 校验",
      "Repair Prompt",
      "业务字段契约",
      "降级策略"
    ],
    "proof": [
      "Schema 文件或类型定义",
      "10 条格式失败样本",
      "修复前后对照日志"
    ],
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。",
    "flowSteps": [
      "继续执行第三条代码任务：前端分别展示成功、格式失败、内容不合格和降级结果。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看模型输出是否先过 Schema，再进入页面。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-03/day-04.vue",
      "demo-app/server/advanced-labs/week-03/day-04.js",
      "demo-app/server/schemas/rewriteResult.js",
      "demo-app/server/services/repairModelOutput.js",
      "demo-app/server/services/validateModelOutput.js"
    ],
    "backendFocus": [
      "运行时 Schema 校验",
      "JSON parse 防御",
      "错误码设计",
      "一次重试策略",
      "服务端字段契约"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：Schema 文件或类型定义"
    ]
  },
  {
    "id": "W03D05",
    "week": "03",
    "day": "05",
    "title": "结构化输出：让模型结果能进入业务系统",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-03/day-05",
    "apiPath": "/api/advanced/week-03/day-05",
    "lessonPath": "/advanced-track/lessons/week-03/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-03.md",
    "mode": "schema",
    "build": "为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。",
    "skills": [
      "结构化输出",
      "Schema 校验",
      "Repair Prompt",
      "业务字段契约",
      "降级策略"
    ],
    "proof": [
      "Schema 文件或类型定义",
      "10 条格式失败样本",
      "修复前后对照日志"
    ],
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看模型输出是否先过 Schema，再进入页面。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-03/day-05.vue",
      "demo-app/server/advanced-labs/week-03/day-05.js",
      "demo-app/server/schemas/rewriteResult.js",
      "demo-app/server/services/repairModelOutput.js",
      "demo-app/server/services/validateModelOutput.js"
    ],
    "backendFocus": [
      "运行时 Schema 校验",
      "JSON parse 防御",
      "错误码设计",
      "一次重试策略",
      "服务端字段契约"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：Schema 文件或类型定义"
    ]
  },
  {
    "id": "W04D01",
    "week": "04",
    "day": "01",
    "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-04/day-01",
    "apiPath": "/api/advanced/week-04/day-01",
    "lessonPath": "/advanced-track/lessons/week-04/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-04.md",
    "mode": "prompt-registry",
    "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。",
    "skills": [
      "Prompt Registry",
      "Prompt Version",
      "Eval Dataset",
      "回归测试",
      "灰度 / 回滚"
    ],
    "proof": [
      "Prompt Registry 代码",
      "30 条评测样本",
      "v1 / v2 回归对比表"
    ],
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。",
    "flowSteps": [
      "从真实问题开始：你已经知道 Prompt 会影响结果，真正需要学的是 Prompt 怎么版本化、怎么灰度、怎么回滚、怎么证明没有变差。",
      "确认前端入口：前端传 taskType 和用户输入，不传完整 Prompt；页面展示当前 promptVersion，便于调试和复盘。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-04/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看 Prompt 是否从业务代码中抽离，并能按版本评测。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-04/day-01.vue",
      "demo-app/server/advanced-labs/week-04/day-01.js",
      "demo-app/server/prompts/registry.js",
      "demo-app/server/evals/workplace-rewrite.cases.json",
      "demo-app/server/evals/runEval.js"
    ],
    "backendFocus": [
      "配置与代码分离",
      "任务路由",
      "版本号设计",
      "评测脚本",
      "回归报告"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：Prompt Registry 代码"
    ]
  },
  {
    "id": "W04D02",
    "week": "04",
    "day": "02",
    "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-04/day-02",
    "apiPath": "/api/advanced/week-04/day-02",
    "lessonPath": "/advanced-track/lessons/week-04/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-04.md",
    "mode": "prompt-registry",
    "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。",
    "skills": [
      "Prompt Registry",
      "Prompt Version",
      "Eval Dataset",
      "回归测试",
      "灰度 / 回滚"
    ],
    "proof": [
      "Prompt Registry 代码",
      "30 条评测样本",
      "v1 / v2 回归对比表"
    ],
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：把 Prompt 从接口逻辑里抽到 registry。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看 Prompt 是否从业务代码中抽离，并能按版本评测。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-04/day-02.vue",
      "demo-app/server/advanced-labs/week-04/day-02.js",
      "demo-app/server/prompts/registry.js",
      "demo-app/server/evals/workplace-rewrite.cases.json",
      "demo-app/server/evals/runEval.js"
    ],
    "backendFocus": [
      "配置与代码分离",
      "任务路由",
      "版本号设计",
      "评测脚本",
      "回归报告"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：Prompt Registry 代码"
    ]
  },
  {
    "id": "W04D03",
    "week": "04",
    "day": "03",
    "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-04/day-03",
    "apiPath": "/api/advanced/week-04/day-03",
    "lessonPath": "/advanced-track/lessons/week-04/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-04.md",
    "mode": "prompt-registry",
    "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。",
    "skills": [
      "Prompt Registry",
      "Prompt Version",
      "Eval Dataset",
      "回归测试",
      "灰度 / 回滚"
    ],
    "proof": [
      "Prompt Registry 代码",
      "30 条评测样本",
      "v1 / v2 回归对比表"
    ],
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。",
    "flowSteps": [
      "继续执行第二条代码任务：为 workplace_rewrite 准备 v1 / v2 两个版本。",
      "补后端基础：配置与代码分离 / 任务路由。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看 Prompt 是否从业务代码中抽离，并能按版本评测。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-04/day-03.vue",
      "demo-app/server/advanced-labs/week-04/day-03.js",
      "demo-app/server/prompts/registry.js",
      "demo-app/server/evals/workplace-rewrite.cases.json",
      "demo-app/server/evals/runEval.js"
    ],
    "backendFocus": [
      "配置与代码分离",
      "任务路由",
      "版本号设计",
      "评测脚本",
      "回归报告"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：Prompt Registry 代码"
    ]
  },
  {
    "id": "W04D04",
    "week": "04",
    "day": "04",
    "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-04/day-04",
    "apiPath": "/api/advanced/week-04/day-04",
    "lessonPath": "/advanced-track/lessons/week-04/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-04.md",
    "mode": "prompt-registry",
    "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。",
    "skills": [
      "Prompt Registry",
      "Prompt Version",
      "Eval Dataset",
      "回归测试",
      "灰度 / 回滚"
    ],
    "proof": [
      "Prompt Registry 代码",
      "30 条评测样本",
      "v1 / v2 回归对比表"
    ],
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。",
    "flowSteps": [
      "继续执行第三条代码任务：写最小评测脚本，对 30 条输入输出进行规则评分。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看 Prompt 是否从业务代码中抽离，并能按版本评测。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-04/day-04.vue",
      "demo-app/server/advanced-labs/week-04/day-04.js",
      "demo-app/server/prompts/registry.js",
      "demo-app/server/evals/workplace-rewrite.cases.json",
      "demo-app/server/evals/runEval.js"
    ],
    "backendFocus": [
      "配置与代码分离",
      "任务路由",
      "版本号设计",
      "评测脚本",
      "回归报告"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：Prompt Registry 代码"
    ]
  },
  {
    "id": "W04D05",
    "week": "04",
    "day": "05",
    "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-04/day-05",
    "apiPath": "/api/advanced/week-04/day-05",
    "lessonPath": "/advanced-track/lessons/week-04/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-04.md",
    "mode": "prompt-registry",
    "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。",
    "skills": [
      "Prompt Registry",
      "Prompt Version",
      "Eval Dataset",
      "回归测试",
      "灰度 / 回滚"
    ],
    "proof": [
      "Prompt Registry 代码",
      "30 条评测样本",
      "v1 / v2 回归对比表"
    ],
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看 Prompt 是否从业务代码中抽离，并能按版本评测。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-04/day-05.vue",
      "demo-app/server/advanced-labs/week-04/day-05.js",
      "demo-app/server/prompts/registry.js",
      "demo-app/server/evals/workplace-rewrite.cases.json",
      "demo-app/server/evals/runEval.js"
    ],
    "backendFocus": [
      "配置与代码分离",
      "任务路由",
      "版本号设计",
      "评测脚本",
      "回归报告"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：Prompt Registry 代码"
    ]
  },
  {
    "id": "W05D01",
    "week": "05",
    "day": "01",
    "title": "会话、日志、成本：AI 功能上线前必须补的后端基础",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-05/day-01",
    "apiPath": "/api/advanced/week-05/day-01",
    "lessonPath": "/advanced-track/lessons/week-05/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-05.md",
    "mode": "observability",
    "build": "为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。",
    "skills": [
      "调用日志",
      "Token Usage",
      "Cost Tracking",
      "脱敏",
      "问题复盘"
    ],
    "proof": [
      "调用日志样例",
      "一次失败 requestId 追踪记录",
      "成本 / 延迟统计截图或表格"
    ],
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。",
    "flowSteps": [
      "从真实问题开始：AI 功能上线后，最常见的问题是慢、贵、偶发失败、无法复盘。你需要能保存调用记录并定位问题。",
      "确认前端入口：前端展示 requestId，用户反馈问题时能把 requestId 给到开发定位。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-05/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-05/day-01.vue",
      "demo-app/server/advanced-labs/week-05/day-01.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "日志模型设计",
      "简单持久化 JSON / SQLite 思路",
      "token 与成本字段",
      "敏感信息脱敏",
      "请求追踪"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：调用日志样例"
    ]
  },
  {
    "id": "W05D02",
    "week": "05",
    "day": "02",
    "title": "会话、日志、成本：AI 功能上线前必须补的后端基础",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-05/day-02",
    "apiPath": "/api/advanced/week-05/day-02",
    "lessonPath": "/advanced-track/lessons/week-05/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-05.md",
    "mode": "observability",
    "build": "为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。",
    "skills": [
      "调用日志",
      "Token Usage",
      "Cost Tracking",
      "脱敏",
      "问题复盘"
    ],
    "proof": [
      "调用日志样例",
      "一次失败 requestId 追踪记录",
      "成本 / 延迟统计截图或表格"
    ],
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：设计 ai_call_logs 数据结构，不保存完整敏感输入。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-05/day-02.vue",
      "demo-app/server/advanced-labs/week-05/day-02.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "日志模型设计",
      "简单持久化 JSON / SQLite 思路",
      "token 与成本字段",
      "敏感信息脱敏",
      "请求追踪"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：调用日志样例"
    ]
  },
  {
    "id": "W05D03",
    "week": "05",
    "day": "03",
    "title": "会话、日志、成本：AI 功能上线前必须补的后端基础",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-05/day-03",
    "apiPath": "/api/advanced/week-05/day-03",
    "lessonPath": "/advanced-track/lessons/week-05/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-05.md",
    "mode": "observability",
    "build": "为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。",
    "skills": [
      "调用日志",
      "Token Usage",
      "Cost Tracking",
      "脱敏",
      "问题复盘"
    ],
    "proof": [
      "调用日志样例",
      "一次失败 requestId 追踪记录",
      "成本 / 延迟统计截图或表格"
    ],
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。",
    "flowSteps": [
      "继续执行第二条代码任务：每次模型调用都写入日志，失败也要写。",
      "补后端基础：日志模型设计 / 简单持久化 JSON / SQLite 思路。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-05/day-03.vue",
      "demo-app/server/advanced-labs/week-05/day-03.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "日志模型设计",
      "简单持久化 JSON / SQLite 思路",
      "token 与成本字段",
      "敏感信息脱敏",
      "请求追踪"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：调用日志样例"
    ]
  },
  {
    "id": "W05D04",
    "week": "05",
    "day": "04",
    "title": "会话、日志、成本：AI 功能上线前必须补的后端基础",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-05/day-04",
    "apiPath": "/api/advanced/week-05/day-04",
    "lessonPath": "/advanced-track/lessons/week-05/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-05.md",
    "mode": "observability",
    "build": "为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。",
    "skills": [
      "调用日志",
      "Token Usage",
      "Cost Tracking",
      "脱敏",
      "问题复盘"
    ],
    "proof": [
      "调用日志样例",
      "一次失败 requestId 追踪记录",
      "成本 / 延迟统计截图或表格"
    ],
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。",
    "flowSteps": [
      "继续执行第三条代码任务：做一个简单日志查看页面或命令，按 requestId 查询。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-05/day-04.vue",
      "demo-app/server/advanced-labs/week-05/day-04.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "日志模型设计",
      "简单持久化 JSON / SQLite 思路",
      "token 与成本字段",
      "敏感信息脱敏",
      "请求追踪"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：调用日志样例"
    ]
  },
  {
    "id": "W05D05",
    "week": "05",
    "day": "05",
    "title": "会话、日志、成本：AI 功能上线前必须补的后端基础",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 1：AI 应用工程底座",
    "path": "/advanced/week-05/day-05",
    "apiPath": "/api/advanced/week-05/day-05",
    "lessonPath": "/advanced-track/lessons/week-05/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-05.md",
    "mode": "observability",
    "build": "为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。",
    "skills": [
      "调用日志",
      "Token Usage",
      "Cost Tracking",
      "脱敏",
      "问题复盘"
    ],
    "proof": [
      "调用日志样例",
      "一次失败 requestId 追踪记录",
      "成本 / 延迟统计截图或表格"
    ],
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-05/day-05.vue",
      "demo-app/server/advanced-labs/week-05/day-05.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "日志模型设计",
      "简单持久化 JSON / SQLite 思路",
      "token 与成本字段",
      "敏感信息脱敏",
      "请求追踪"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：调用日志样例"
    ]
  },
  {
    "id": "W06D01",
    "week": "06",
    "day": "01",
    "title": "项目一：AI 职场沟通助手工程化版本",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 1 项目验收",
    "path": "/advanced/week-06/day-01",
    "apiPath": "/api/advanced/week-06/day-01",
    "lessonPath": "/advanced-track/lessons/week-06/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-06.md",
    "mode": "engineering",
    "build": "完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。",
    "skills": [
      "端到端闭环",
      "产品交互",
      "评测证据",
      "失败兜底",
      "项目表达"
    ],
    "proof": [
      "可演示项目",
      "30 条评测结果",
      "项目 README 与架构图"
    ],
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
    "flowSteps": [
      "从真实问题开始：这个项目不是练 Prompt，而是证明你能把一个 AI 文本能力做成可用、可测、可复盘的小产品。",
      "确认前端入口：做一个像真实功能的页面：输入原话、选择目标语气、展示改写结果、解释改写原因、复制输出。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-06/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看端到端链路是否清楚。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-06/day-01.vue",
      "demo-app/server/advanced-labs/week-06/day-01.js",
      "demo-app/server/index.js",
      "demo-app/server/shared/"
    ],
    "backendFocus": [
      "端到端接口设计",
      "DTO / ViewModel 边界",
      "错误码到 UI 状态映射",
      "最小验收接口",
      "本地部署"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：可演示项目"
    ]
  },
  {
    "id": "W06D02",
    "week": "06",
    "day": "02",
    "title": "项目一：AI 职场沟通助手工程化版本",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 1 项目验收",
    "path": "/advanced/week-06/day-02",
    "apiPath": "/api/advanced/week-06/day-02",
    "lessonPath": "/advanced-track/lessons/week-06/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-06.md",
    "mode": "engineering",
    "build": "完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。",
    "skills": [
      "端到端闭环",
      "产品交互",
      "评测证据",
      "失败兜底",
      "项目表达"
    ],
    "proof": [
      "可演示项目",
      "30 条评测结果",
      "项目 README 与架构图"
    ],
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：把前 5 周能力收敛到一个完整页面和一个清晰 API。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看端到端链路是否清楚。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-06/day-02.vue",
      "demo-app/server/advanced-labs/week-06/day-02.js",
      "demo-app/server/index.js",
      "demo-app/server/shared/"
    ],
    "backendFocus": [
      "端到端接口设计",
      "DTO / ViewModel 边界",
      "错误码到 UI 状态映射",
      "最小验收接口",
      "本地部署"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：可演示项目"
    ]
  },
  {
    "id": "W06D03",
    "week": "06",
    "day": "03",
    "title": "项目一：AI 职场沟通助手工程化版本",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 1 项目验收",
    "path": "/advanced/week-06/day-03",
    "apiPath": "/api/advanced/week-06/day-03",
    "lessonPath": "/advanced-track/lessons/week-06/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-06.md",
    "mode": "engineering",
    "build": "完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。",
    "skills": [
      "端到端闭环",
      "产品交互",
      "评测证据",
      "失败兜底",
      "项目表达"
    ],
    "proof": [
      "可演示项目",
      "30 条评测结果",
      "项目 README 与架构图"
    ],
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
    "flowSteps": [
      "继续执行第二条代码任务：补齐 30 条评测样本和失败样本。",
      "补后端基础：端到端接口设计 / DTO / ViewModel 边界。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看端到端链路是否清楚。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-06/day-03.vue",
      "demo-app/server/advanced-labs/week-06/day-03.js",
      "demo-app/server/index.js",
      "demo-app/server/shared/"
    ],
    "backendFocus": [
      "端到端接口设计",
      "DTO / ViewModel 边界",
      "错误码到 UI 状态映射",
      "最小验收接口",
      "本地部署"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：可演示项目"
    ]
  },
  {
    "id": "W06D04",
    "week": "06",
    "day": "04",
    "title": "项目一：AI 职场沟通助手工程化版本",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 1 项目验收",
    "path": "/advanced/week-06/day-04",
    "apiPath": "/api/advanced/week-06/day-04",
    "lessonPath": "/advanced-track/lessons/week-06/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-06.md",
    "mode": "engineering",
    "build": "完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。",
    "skills": [
      "端到端闭环",
      "产品交互",
      "评测证据",
      "失败兜底",
      "项目表达"
    ],
    "proof": [
      "可演示项目",
      "30 条评测结果",
      "项目 README 与架构图"
    ],
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
    "flowSteps": [
      "继续执行第三条代码任务：整理 README：如何运行、如何验证、有什么边界。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看端到端链路是否清楚。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-06/day-04.vue",
      "demo-app/server/advanced-labs/week-06/day-04.js",
      "demo-app/server/index.js",
      "demo-app/server/shared/"
    ],
    "backendFocus": [
      "端到端接口设计",
      "DTO / ViewModel 边界",
      "错误码到 UI 状态映射",
      "最小验收接口",
      "本地部署"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：可演示项目"
    ]
  },
  {
    "id": "W06D05",
    "week": "06",
    "day": "05",
    "title": "项目一：AI 职场沟通助手工程化版本",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 1 项目验收",
    "path": "/advanced/week-06/day-05",
    "apiPath": "/api/advanced/week-06/day-05",
    "lessonPath": "/advanced-track/lessons/week-06/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-06.md",
    "mode": "engineering",
    "build": "完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。",
    "skills": [
      "端到端闭环",
      "产品交互",
      "评测证据",
      "失败兜底",
      "项目表达"
    ],
    "proof": [
      "可演示项目",
      "30 条评测结果",
      "项目 README 与架构图"
    ],
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看端到端链路是否清楚。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-06/day-05.vue",
      "demo-app/server/advanced-labs/week-06/day-05.js",
      "demo-app/server/index.js",
      "demo-app/server/shared/"
    ],
    "backendFocus": [
      "端到端接口设计",
      "DTO / ViewModel 边界",
      "错误码到 UI 状态映射",
      "最小验收接口",
      "本地部署"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：可演示项目"
    ]
  },
  {
    "id": "W07D01",
    "week": "07",
    "day": "01",
    "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-07/day-01",
    "apiPath": "/api/advanced/week-07/day-01",
    "lessonPath": "/advanced-track/lessons/week-07/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-07.md",
    "mode": "rag",
    "build": "建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。",
    "skills": [
      "Document Ingestion",
      "Chunk",
      "Metadata",
      "Source Trace",
      "接口契约知识库"
    ],
    "proof": [
      "导入脚本",
      "chunk 样例",
      "metadata 字段说明"
    ],
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。",
    "flowSteps": [
      "从真实问题开始：RAG 失败很多时候不是模型问题，而是资料切错了、来源丢了、metadata 不够，导致回答无法追溯。",
      "确认前端入口：你从前端开发痛点切入：字段来自哪个接口、类型是什么、哪个页面用过、来源在哪里。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-07/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-07/day-01.vue",
      "demo-app/server/advanced-labs/week-07/day-01.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "文件读取",
      "数据清洗",
      "chunk 策略",
      "metadata 设计",
      "导入脚本"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：导入脚本"
    ]
  },
  {
    "id": "W07D02",
    "week": "07",
    "day": "02",
    "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-07/day-02",
    "apiPath": "/api/advanced/week-07/day-02",
    "lessonPath": "/advanced-track/lessons/week-07/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-07.md",
    "mode": "rag",
    "build": "建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。",
    "skills": [
      "Document Ingestion",
      "Chunk",
      "Metadata",
      "Source Trace",
      "接口契约知识库"
    ],
    "proof": [
      "导入脚本",
      "chunk 样例",
      "metadata 字段说明"
    ],
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：准备一批模拟接口文档和页面字段说明。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-07/day-02.vue",
      "demo-app/server/advanced-labs/week-07/day-02.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "文件读取",
      "数据清洗",
      "chunk 策略",
      "metadata 设计",
      "导入脚本"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：导入脚本"
    ]
  },
  {
    "id": "W07D03",
    "week": "07",
    "day": "03",
    "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-07/day-03",
    "apiPath": "/api/advanced/week-07/day-03",
    "lessonPath": "/advanced-track/lessons/week-07/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-07.md",
    "mode": "rag",
    "build": "建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。",
    "skills": [
      "Document Ingestion",
      "Chunk",
      "Metadata",
      "Source Trace",
      "接口契约知识库"
    ],
    "proof": [
      "导入脚本",
      "chunk 样例",
      "metadata 字段说明"
    ],
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。",
    "flowSteps": [
      "继续执行第二条代码任务：写 ingest 脚本，把文档切成 chunk。",
      "补后端基础：文件读取 / 数据清洗。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-07/day-03.vue",
      "demo-app/server/advanced-labs/week-07/day-03.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "文件读取",
      "数据清洗",
      "chunk 策略",
      "metadata 设计",
      "导入脚本"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：导入脚本"
    ]
  },
  {
    "id": "W07D04",
    "week": "07",
    "day": "04",
    "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-07/day-04",
    "apiPath": "/api/advanced/week-07/day-04",
    "lessonPath": "/advanced-track/lessons/week-07/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-07.md",
    "mode": "rag",
    "build": "建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。",
    "skills": [
      "Document Ingestion",
      "Chunk",
      "Metadata",
      "Source Trace",
      "接口契约知识库"
    ],
    "proof": [
      "导入脚本",
      "chunk 样例",
      "metadata 字段说明"
    ],
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。",
    "flowSteps": [
      "继续执行第三条代码任务：每个 chunk 保留 docId、sourcePath、section、fieldName 等 metadata。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-07/day-04.vue",
      "demo-app/server/advanced-labs/week-07/day-04.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "文件读取",
      "数据清洗",
      "chunk 策略",
      "metadata 设计",
      "导入脚本"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：导入脚本"
    ]
  },
  {
    "id": "W07D05",
    "week": "07",
    "day": "05",
    "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-07/day-05",
    "apiPath": "/api/advanced/week-07/day-05",
    "lessonPath": "/advanced-track/lessons/week-07/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-07.md",
    "mode": "rag",
    "build": "建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。",
    "skills": [
      "Document Ingestion",
      "Chunk",
      "Metadata",
      "Source Trace",
      "接口契约知识库"
    ],
    "proof": [
      "导入脚本",
      "chunk 样例",
      "metadata 字段说明"
    ],
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-07/day-05.vue",
      "demo-app/server/advanced-labs/week-07/day-05.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "文件读取",
      "数据清洗",
      "chunk 策略",
      "metadata 设计",
      "导入脚本"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：导入脚本"
    ]
  },
  {
    "id": "W08D01",
    "week": "08",
    "day": "01",
    "title": "检索实现：关键词、向量与混合召回",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-08/day-01",
    "apiPath": "/api/advanced/week-08/day-01",
    "lessonPath": "/advanced-track/lessons/week-08/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-08.md",
    "mode": "rag",
    "build": "实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。",
    "skills": [
      "Embedding",
      "Vector Search",
      "Keyword Search",
      "Hybrid Search",
      "检索调试"
    ],
    "proof": [
      "三种检索结果对比",
      "10 条失败查询归因",
      "检索调试页面截图"
    ],
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。",
    "flowSteps": [
      "从真实问题开始：真实用户不会按文档原字段名提问，纯关键词和纯向量都会失败。你要学会比较召回效果。",
      "确认前端入口：前端做一个检索调试台：输入问题后展示候选文档、分数、metadata 和被选中的上下文。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-08/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-08/day-01.vue",
      "demo-app/server/advanced-labs/week-08/day-01.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "embedding 调用",
      "向量相似度",
      "topK",
      "关键词索引",
      "召回结果合并"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：三种检索结果对比"
    ]
  },
  {
    "id": "W08D02",
    "week": "08",
    "day": "02",
    "title": "检索实现：关键词、向量与混合召回",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-08/day-02",
    "apiPath": "/api/advanced/week-08/day-02",
    "lessonPath": "/advanced-track/lessons/week-08/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-08.md",
    "mode": "rag",
    "build": "实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。",
    "skills": [
      "Embedding",
      "Vector Search",
      "Keyword Search",
      "Hybrid Search",
      "检索调试"
    ],
    "proof": [
      "三种检索结果对比",
      "10 条失败查询归因",
      "检索调试页面截图"
    ],
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：先实现本地关键词检索，保证可跑。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-08/day-02.vue",
      "demo-app/server/advanced-labs/week-08/day-02.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "embedding 调用",
      "向量相似度",
      "topK",
      "关键词索引",
      "召回结果合并"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：三种检索结果对比"
    ]
  },
  {
    "id": "W08D03",
    "week": "08",
    "day": "03",
    "title": "检索实现：关键词、向量与混合召回",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-08/day-03",
    "apiPath": "/api/advanced/week-08/day-03",
    "lessonPath": "/advanced-track/lessons/week-08/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-08.md",
    "mode": "rag",
    "build": "实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。",
    "skills": [
      "Embedding",
      "Vector Search",
      "Keyword Search",
      "Hybrid Search",
      "检索调试"
    ],
    "proof": [
      "三种检索结果对比",
      "10 条失败查询归因",
      "检索调试页面截图"
    ],
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。",
    "flowSteps": [
      "继续执行第二条代码任务：再接 embedding，保存向量并做 topK 检索。",
      "补后端基础：embedding 调用 / 向量相似度。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-08/day-03.vue",
      "demo-app/server/advanced-labs/week-08/day-03.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "embedding 调用",
      "向量相似度",
      "topK",
      "关键词索引",
      "召回结果合并"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：三种检索结果对比"
    ]
  },
  {
    "id": "W08D04",
    "week": "08",
    "day": "04",
    "title": "检索实现：关键词、向量与混合召回",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-08/day-04",
    "apiPath": "/api/advanced/week-08/day-04",
    "lessonPath": "/advanced-track/lessons/week-08/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-08.md",
    "mode": "rag",
    "build": "实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。",
    "skills": [
      "Embedding",
      "Vector Search",
      "Keyword Search",
      "Hybrid Search",
      "检索调试"
    ],
    "proof": [
      "三种检索结果对比",
      "10 条失败查询归因",
      "检索调试页面截图"
    ],
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。",
    "flowSteps": [
      "继续执行第三条代码任务：实现 hybrid merge，展示每条候选的来源和分数。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-08/day-04.vue",
      "demo-app/server/advanced-labs/week-08/day-04.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "embedding 调用",
      "向量相似度",
      "topK",
      "关键词索引",
      "召回结果合并"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：三种检索结果对比"
    ]
  },
  {
    "id": "W08D05",
    "week": "08",
    "day": "05",
    "title": "检索实现：关键词、向量与混合召回",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-08/day-05",
    "apiPath": "/api/advanced/week-08/day-05",
    "lessonPath": "/advanced-track/lessons/week-08/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-08.md",
    "mode": "rag",
    "build": "实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。",
    "skills": [
      "Embedding",
      "Vector Search",
      "Keyword Search",
      "Hybrid Search",
      "检索调试"
    ],
    "proof": [
      "三种检索结果对比",
      "10 条失败查询归因",
      "检索调试页面截图"
    ],
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-08/day-05.vue",
      "demo-app/server/advanced-labs/week-08/day-05.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "embedding 调用",
      "向量相似度",
      "topK",
      "关键词索引",
      "召回结果合并"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：三种检索结果对比"
    ]
  },
  {
    "id": "W09D01",
    "week": "09",
    "day": "01",
    "title": "可信回答：引用、拒答与冲突证据",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-09/day-01",
    "apiPath": "/api/advanced/week-09/day-01",
    "lessonPath": "/advanced-track/lessons/week-09/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-09.md",
    "mode": "rag",
    "build": "让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。",
    "skills": [
      "Grounded Answer",
      "Citation",
      "Refusal",
      "Conflict Handling",
      "字段不猜测"
    ],
    "proof": [
      "有引用回答案例",
      "拒答案例",
      "冲突证据案例"
    ],
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。",
    "flowSteps": [
      "从真实问题开始：RAG 项目最怕模型拿到一点资料就开始补全。接口字段、类型、来源不明确时必须拒答或追问。",
      "确认前端入口：页面不能只展示答案，还要展示引用来源、chunk 片段和“不确定”的原因。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-09/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-09/day-01.vue",
      "demo-app/server/advanced-labs/week-09/day-01.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "上下文拼装",
      "引用结构",
      "拒答规则",
      "冲突检测",
      "答案后校验"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：有引用回答案例"
    ]
  },
  {
    "id": "W09D02",
    "week": "09",
    "day": "02",
    "title": "可信回答：引用、拒答与冲突证据",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-09/day-02",
    "apiPath": "/api/advanced/week-09/day-02",
    "lessonPath": "/advanced-track/lessons/week-09/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-09.md",
    "mode": "rag",
    "build": "让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。",
    "skills": [
      "Grounded Answer",
      "Citation",
      "Refusal",
      "Conflict Handling",
      "字段不猜测"
    ],
    "proof": [
      "有引用回答案例",
      "拒答案例",
      "冲突证据案例"
    ],
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：回答结构增加 answer、citations、confidence、unknownFields。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-09/day-02.vue",
      "demo-app/server/advanced-labs/week-09/day-02.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "上下文拼装",
      "引用结构",
      "拒答规则",
      "冲突检测",
      "答案后校验"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：有引用回答案例"
    ]
  },
  {
    "id": "W09D03",
    "week": "09",
    "day": "03",
    "title": "可信回答：引用、拒答与冲突证据",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-09/day-03",
    "apiPath": "/api/advanced/week-09/day-03",
    "lessonPath": "/advanced-track/lessons/week-09/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-09.md",
    "mode": "rag",
    "build": "让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。",
    "skills": [
      "Grounded Answer",
      "Citation",
      "Refusal",
      "Conflict Handling",
      "字段不猜测"
    ],
    "proof": [
      "有引用回答案例",
      "拒答案例",
      "冲突证据案例"
    ],
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。",
    "flowSteps": [
      "继续执行第二条代码任务：证据不足时返回拒答，不让模型自由补字段。",
      "补后端基础：上下文拼装 / 引用结构。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-09/day-03.vue",
      "demo-app/server/advanced-labs/week-09/day-03.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "上下文拼装",
      "引用结构",
      "拒答规则",
      "冲突检测",
      "答案后校验"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：有引用回答案例"
    ]
  },
  {
    "id": "W09D04",
    "week": "09",
    "day": "04",
    "title": "可信回答：引用、拒答与冲突证据",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-09/day-04",
    "apiPath": "/api/advanced/week-09/day-04",
    "lessonPath": "/advanced-track/lessons/week-09/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-09.md",
    "mode": "rag",
    "build": "让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。",
    "skills": [
      "Grounded Answer",
      "Citation",
      "Refusal",
      "Conflict Handling",
      "字段不猜测"
    ],
    "proof": [
      "有引用回答案例",
      "拒答案例",
      "冲突证据案例"
    ],
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。",
    "flowSteps": [
      "继续执行第三条代码任务：实现引用点击或来源展示，能看到原始 chunk。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-09/day-04.vue",
      "demo-app/server/advanced-labs/week-09/day-04.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "上下文拼装",
      "引用结构",
      "拒答规则",
      "冲突检测",
      "答案后校验"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：有引用回答案例"
    ]
  },
  {
    "id": "W09D05",
    "week": "09",
    "day": "05",
    "title": "可信回答：引用、拒答与冲突证据",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-09/day-05",
    "apiPath": "/api/advanced/week-09/day-05",
    "lessonPath": "/advanced-track/lessons/week-09/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-09.md",
    "mode": "rag",
    "build": "让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。",
    "skills": [
      "Grounded Answer",
      "Citation",
      "Refusal",
      "Conflict Handling",
      "字段不猜测"
    ],
    "proof": [
      "有引用回答案例",
      "拒答案例",
      "冲突证据案例"
    ],
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-09/day-05.vue",
      "demo-app/server/advanced-labs/week-09/day-05.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "上下文拼装",
      "引用结构",
      "拒答规则",
      "冲突检测",
      "答案后校验"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：有引用回答案例"
    ]
  },
  {
    "id": "W10D01",
    "week": "10",
    "day": "01",
    "title": "RAG 评测：把“效果还行”变成指标",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-10/day-01",
    "apiPath": "/api/advanced/week-10/day-01",
    "lessonPath": "/advanced-track/lessons/week-10/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-10.md",
    "mode": "eval",
    "build": "准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。",
    "skills": [
      "Retrieval Eval",
      "Answer Eval",
      "Citation Eval",
      "Failure Taxonomy",
      "回归指标"
    ],
    "proof": [
      "50 条 RAG 评测集",
      "失败分类表",
      "优化前后指标"
    ],
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。",
    "flowSteps": [
      "从真实问题开始：RAG Demo 很容易看起来能用，但一换问题就失败。你要建立能反复跑的评测集和失败归因。",
      "确认前端入口：做一个评测结果页或表格，能看到每条样本的问题、期望、实际、引用和失败类型。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-10/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看评测样本是否能重复运行，而不是手工感觉。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-10/day-01.vue",
      "demo-app/server/advanced-labs/week-10/day-01.js",
      "demo-app/server/evals/cases.json",
      "demo-app/server/evals/runEval.js",
      "advanced-track/reviews/"
    ],
    "backendFocus": [
      "评测数据格式",
      "批量运行脚本",
      "指标计算",
      "失败归因",
      "回归对比"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：50 条 RAG 评测集"
    ]
  },
  {
    "id": "W10D02",
    "week": "10",
    "day": "02",
    "title": "RAG 评测：把“效果还行”变成指标",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-10/day-02",
    "apiPath": "/api/advanced/week-10/day-02",
    "lessonPath": "/advanced-track/lessons/week-10/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-10.md",
    "mode": "eval",
    "build": "准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。",
    "skills": [
      "Retrieval Eval",
      "Answer Eval",
      "Citation Eval",
      "Failure Taxonomy",
      "回归指标"
    ],
    "proof": [
      "50 条 RAG 评测集",
      "失败分类表",
      "优化前后指标"
    ],
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：整理 50 条 eval cases，覆盖字段来源、类型、枚举值、未知字段。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看评测样本是否能重复运行，而不是手工感觉。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-10/day-02.vue",
      "demo-app/server/advanced-labs/week-10/day-02.js",
      "demo-app/server/evals/cases.json",
      "demo-app/server/evals/runEval.js",
      "advanced-track/reviews/"
    ],
    "backendFocus": [
      "评测数据格式",
      "批量运行脚本",
      "指标计算",
      "失败归因",
      "回归对比"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：50 条 RAG 评测集"
    ]
  },
  {
    "id": "W10D03",
    "week": "10",
    "day": "03",
    "title": "RAG 评测：把“效果还行”变成指标",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-10/day-03",
    "apiPath": "/api/advanced/week-10/day-03",
    "lessonPath": "/advanced-track/lessons/week-10/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-10.md",
    "mode": "eval",
    "build": "准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。",
    "skills": [
      "Retrieval Eval",
      "Answer Eval",
      "Citation Eval",
      "Failure Taxonomy",
      "回归指标"
    ],
    "proof": [
      "50 条 RAG 评测集",
      "失败分类表",
      "优化前后指标"
    ],
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。",
    "flowSteps": [
      "继续执行第二条代码任务：写批量评测脚本，输出 JSON / markdown 报告。",
      "补后端基础：评测数据格式 / 批量运行脚本。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看评测样本是否能重复运行，而不是手工感觉。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-10/day-03.vue",
      "demo-app/server/advanced-labs/week-10/day-03.js",
      "demo-app/server/evals/cases.json",
      "demo-app/server/evals/runEval.js",
      "advanced-track/reviews/"
    ],
    "backendFocus": [
      "评测数据格式",
      "批量运行脚本",
      "指标计算",
      "失败归因",
      "回归对比"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：50 条 RAG 评测集"
    ]
  },
  {
    "id": "W10D04",
    "week": "10",
    "day": "04",
    "title": "RAG 评测：把“效果还行”变成指标",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-10/day-04",
    "apiPath": "/api/advanced/week-10/day-04",
    "lessonPath": "/advanced-track/lessons/week-10/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-10.md",
    "mode": "eval",
    "build": "准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。",
    "skills": [
      "Retrieval Eval",
      "Answer Eval",
      "Citation Eval",
      "Failure Taxonomy",
      "回归指标"
    ],
    "proof": [
      "50 条 RAG 评测集",
      "失败分类表",
      "优化前后指标"
    ],
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。",
    "flowSteps": [
      "继续执行第三条代码任务：至少优化一轮检索或回答规则，并记录指标变化。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看评测样本是否能重复运行，而不是手工感觉。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-10/day-04.vue",
      "demo-app/server/advanced-labs/week-10/day-04.js",
      "demo-app/server/evals/cases.json",
      "demo-app/server/evals/runEval.js",
      "advanced-track/reviews/"
    ],
    "backendFocus": [
      "评测数据格式",
      "批量运行脚本",
      "指标计算",
      "失败归因",
      "回归对比"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：50 条 RAG 评测集"
    ]
  },
  {
    "id": "W10D05",
    "week": "10",
    "day": "05",
    "title": "RAG 评测：把“效果还行”变成指标",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 2：RAG 工程",
    "path": "/advanced/week-10/day-05",
    "apiPath": "/api/advanced/week-10/day-05",
    "lessonPath": "/advanced-track/lessons/week-10/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-10.md",
    "mode": "eval",
    "build": "准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。",
    "skills": [
      "Retrieval Eval",
      "Answer Eval",
      "Citation Eval",
      "Failure Taxonomy",
      "回归指标"
    ],
    "proof": [
      "50 条 RAG 评测集",
      "失败分类表",
      "优化前后指标"
    ],
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看评测样本是否能重复运行，而不是手工感觉。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-10/day-05.vue",
      "demo-app/server/advanced-labs/week-10/day-05.js",
      "demo-app/server/evals/cases.json",
      "demo-app/server/evals/runEval.js",
      "advanced-track/reviews/"
    ],
    "backendFocus": [
      "评测数据格式",
      "批量运行脚本",
      "指标计算",
      "失败归因",
      "回归对比"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：50 条 RAG 评测集"
    ]
  },
  {
    "id": "W11D01",
    "week": "11",
    "day": "01",
    "title": "项目二：前端接口契约 RAG 助手",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 2 项目验收",
    "path": "/advanced/week-11/day-01",
    "apiPath": "/api/advanced/week-11/day-01",
    "lessonPath": "/advanced-track/lessons/week-11/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-11.md",
    "mode": "rag",
    "build": "完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。",
    "skills": [
      "接口契约助手",
      "RAG 闭环",
      "字段来源",
      "引用定位",
      "未知追问"
    ],
    "proof": [
      "可演示 RAG 项目",
      "50 条评测报告",
      "字段引用截图与架构图"
    ],
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。",
    "flowSteps": [
      "从真实问题开始：这是最贴合你前端背景的核心项目：把你对字段契约、接口联调、页面排查的经验变成 AI 助手。",
      "确认前端入口：做一个真实可演示的查询页面，展示答案、引用、未知字段、相关页面和失败原因。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-11/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-11/day-01.vue",
      "demo-app/server/advanced-labs/week-11/day-01.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "RAG API 分层",
      "知识库更新流程",
      "缓存策略",
      "权限边界",
      "项目 README"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：可演示 RAG 项目"
    ]
  },
  {
    "id": "W11D02",
    "week": "11",
    "day": "02",
    "title": "项目二：前端接口契约 RAG 助手",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 2 项目验收",
    "path": "/advanced/week-11/day-02",
    "apiPath": "/api/advanced/week-11/day-02",
    "lessonPath": "/advanced-track/lessons/week-11/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-11.md",
    "mode": "rag",
    "build": "完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。",
    "skills": [
      "接口契约助手",
      "RAG 闭环",
      "字段来源",
      "引用定位",
      "未知追问"
    ],
    "proof": [
      "可演示 RAG 项目",
      "50 条评测报告",
      "字段引用截图与架构图"
    ],
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：把 W7-W10 能力收敛成一个完整项目。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-11/day-02.vue",
      "demo-app/server/advanced-labs/week-11/day-02.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "RAG API 分层",
      "知识库更新流程",
      "缓存策略",
      "权限边界",
      "项目 README"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：可演示 RAG 项目"
    ]
  },
  {
    "id": "W11D03",
    "week": "11",
    "day": "03",
    "title": "项目二：前端接口契约 RAG 助手",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 2 项目验收",
    "path": "/advanced/week-11/day-03",
    "apiPath": "/api/advanced/week-11/day-03",
    "lessonPath": "/advanced-track/lessons/week-11/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-11.md",
    "mode": "rag",
    "build": "完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。",
    "skills": [
      "接口契约助手",
      "RAG 闭环",
      "字段来源",
      "引用定位",
      "未知追问"
    ],
    "proof": [
      "可演示 RAG 项目",
      "50 条评测报告",
      "字段引用截图与架构图"
    ],
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。",
    "flowSteps": [
      "继续执行第二条代码任务：补齐 50 条评测与 5 个失败案例。",
      "补后端基础：RAG API 分层 / 知识库更新流程。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-11/day-03.vue",
      "demo-app/server/advanced-labs/week-11/day-03.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "RAG API 分层",
      "知识库更新流程",
      "缓存策略",
      "权限边界",
      "项目 README"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：可演示 RAG 项目"
    ]
  },
  {
    "id": "W11D04",
    "week": "11",
    "day": "04",
    "title": "项目二：前端接口契约 RAG 助手",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 2 项目验收",
    "path": "/advanced/week-11/day-04",
    "apiPath": "/api/advanced/week-11/day-04",
    "lessonPath": "/advanced-track/lessons/week-11/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-11.md",
    "mode": "rag",
    "build": "完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。",
    "skills": [
      "接口契约助手",
      "RAG 闭环",
      "字段来源",
      "引用定位",
      "未知追问"
    ],
    "proof": [
      "可演示 RAG 项目",
      "50 条评测报告",
      "字段引用截图与架构图"
    ],
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。",
    "flowSteps": [
      "继续执行第三条代码任务：整理项目故事：为什么这是前端转 AI 的优势项目。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-11/day-04.vue",
      "demo-app/server/advanced-labs/week-11/day-04.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "RAG API 分层",
      "知识库更新流程",
      "缓存策略",
      "权限边界",
      "项目 README"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：可演示 RAG 项目"
    ]
  },
  {
    "id": "W11D05",
    "week": "11",
    "day": "05",
    "title": "项目二：前端接口契约 RAG 助手",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 2 项目验收",
    "path": "/advanced/week-11/day-05",
    "apiPath": "/api/advanced/week-11/day-05",
    "lessonPath": "/advanced-track/lessons/week-11/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-11.md",
    "mode": "rag",
    "build": "完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。",
    "skills": [
      "接口契约助手",
      "RAG 闭环",
      "字段来源",
      "引用定位",
      "未知追问"
    ],
    "proof": [
      "可演示 RAG 项目",
      "50 条评测报告",
      "字段引用截图与架构图"
    ],
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-11/day-05.vue",
      "demo-app/server/advanced-labs/week-11/day-05.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "RAG API 分层",
      "知识库更新流程",
      "缓存策略",
      "权限边界",
      "项目 README"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：可演示 RAG 项目"
    ]
  },
  {
    "id": "W12D01",
    "week": "12",
    "day": "01",
    "title": "Tool Calling：模型建议，程序裁决",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-12/day-01",
    "apiPath": "/api/advanced/week-12/day-01",
    "lessonPath": "/advanced-track/lessons/week-12/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-12.md",
    "mode": "tool",
    "build": "给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。",
    "skills": [
      "Tool Calling",
      "Tool Schema",
      "参数校验",
      "只读工具",
      "Trace"
    ],
    "proof": [
      "两个工具定义",
      "异常参数拒绝记录",
      "工具调用 Trace 截图"
    ],
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。",
    "flowSteps": [
      "从真实问题开始：Tool Calling 不是让模型直接执行函数，而是让模型提出工具调用意图，再由程序做参数校验、权限判断和执行。",
      "确认前端入口：前端展示工具调用 Trace：模型为什么选这个工具、传了什么参数、工具返回了什么。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-12/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-12/day-01.vue",
      "demo-app/server/advanced-labs/week-12/day-01.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "Tool Schema",
      "参数校验",
      "只读工具",
      "工具结果归一化",
      "Trace 记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：两个工具定义"
    ]
  },
  {
    "id": "W12D02",
    "week": "12",
    "day": "02",
    "title": "Tool Calling：模型建议，程序裁决",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-12/day-02",
    "apiPath": "/api/advanced/week-12/day-02",
    "lessonPath": "/advanced-track/lessons/week-12/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-12.md",
    "mode": "tool",
    "build": "给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。",
    "skills": [
      "Tool Calling",
      "Tool Schema",
      "参数校验",
      "只读工具",
      "Trace"
    ],
    "proof": [
      "两个工具定义",
      "异常参数拒绝记录",
      "工具调用 Trace 截图"
    ],
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：定义 lookupApiField 工具输入输出。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-12/day-02.vue",
      "demo-app/server/advanced-labs/week-12/day-02.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "Tool Schema",
      "参数校验",
      "只读工具",
      "工具结果归一化",
      "Trace 记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：两个工具定义"
    ]
  },
  {
    "id": "W12D03",
    "week": "12",
    "day": "03",
    "title": "Tool Calling：模型建议，程序裁决",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-12/day-03",
    "apiPath": "/api/advanced/week-12/day-03",
    "lessonPath": "/advanced-track/lessons/week-12/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-12.md",
    "mode": "tool",
    "build": "给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。",
    "skills": [
      "Tool Calling",
      "Tool Schema",
      "参数校验",
      "只读工具",
      "Trace"
    ],
    "proof": [
      "两个工具定义",
      "异常参数拒绝记录",
      "工具调用 Trace 截图"
    ],
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。",
    "flowSteps": [
      "继续执行第二条代码任务：定义 searchCodeReference 工具输入输出。",
      "补后端基础：Tool Schema / 参数校验。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-12/day-03.vue",
      "demo-app/server/advanced-labs/week-12/day-03.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "Tool Schema",
      "参数校验",
      "只读工具",
      "工具结果归一化",
      "Trace 记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：两个工具定义"
    ]
  },
  {
    "id": "W12D04",
    "week": "12",
    "day": "04",
    "title": "Tool Calling：模型建议，程序裁决",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-12/day-04",
    "apiPath": "/api/advanced/week-12/day-04",
    "lessonPath": "/advanced-track/lessons/week-12/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-12.md",
    "mode": "tool",
    "build": "给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。",
    "skills": [
      "Tool Calling",
      "Tool Schema",
      "参数校验",
      "只读工具",
      "Trace"
    ],
    "proof": [
      "两个工具定义",
      "异常参数拒绝记录",
      "工具调用 Trace 截图"
    ],
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。",
    "flowSteps": [
      "继续执行第三条代码任务：前端展示工具调用 Trace，而不是只展示最终答案。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-12/day-04.vue",
      "demo-app/server/advanced-labs/week-12/day-04.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "Tool Schema",
      "参数校验",
      "只读工具",
      "工具结果归一化",
      "Trace 记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：两个工具定义"
    ]
  },
  {
    "id": "W12D05",
    "week": "12",
    "day": "05",
    "title": "Tool Calling：模型建议，程序裁决",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-12/day-05",
    "apiPath": "/api/advanced/week-12/day-05",
    "lessonPath": "/advanced-track/lessons/week-12/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-12.md",
    "mode": "tool",
    "build": "给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。",
    "skills": [
      "Tool Calling",
      "Tool Schema",
      "参数校验",
      "只读工具",
      "Trace"
    ],
    "proof": [
      "两个工具定义",
      "异常参数拒绝记录",
      "工具调用 Trace 截图"
    ],
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-12/day-05.vue",
      "demo-app/server/advanced-labs/week-12/day-05.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "Tool Schema",
      "参数校验",
      "只读工具",
      "工具结果归一化",
      "Trace 记录"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：两个工具定义"
    ]
  },
  {
    "id": "W13D01",
    "week": "13",
    "day": "01",
    "title": "写操作边界：确认、幂等与审计",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-13/day-01",
    "apiPath": "/api/advanced/week-13/day-01",
    "lessonPath": "/advanced-track/lessons/week-13/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-13.md",
    "mode": "tool",
    "build": "实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。",
    "skills": [
      "Write Tool",
      "Human Confirmation",
      "Idempotency",
      "Audit Log",
      "副作用边界"
    ],
    "proof": [
      "写操作确认流程截图",
      "重复提交防护日志",
      "审计日志样例"
    ],
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。",
    "flowSteps": [
      "从真实问题开始：一旦工具有写操作，风险就完全不同。删除、修改、发送、创建都必须有确认、幂等和审计。",
      "确认前端入口：前端必须出现二次确认面板：展示将要执行的动作、参数、影响范围和取消按钮。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-13/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-13/day-01.vue",
      "demo-app/server/advanced-labs/week-13/day-01.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "写操作权限",
      "幂等键",
      "审计日志",
      "二次确认 token",
      "副作用隔离"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：写操作确认流程截图"
    ]
  },
  {
    "id": "W13D02",
    "week": "13",
    "day": "02",
    "title": "写操作边界：确认、幂等与审计",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-13/day-02",
    "apiPath": "/api/advanced/week-13/day-02",
    "lessonPath": "/advanced-track/lessons/week-13/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-13.md",
    "mode": "tool",
    "build": "实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。",
    "skills": [
      "Write Tool",
      "Human Confirmation",
      "Idempotency",
      "Audit Log",
      "副作用边界"
    ],
    "proof": [
      "写操作确认流程截图",
      "重复提交防护日志",
      "审计日志样例"
    ],
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：实现 createDevTaskDraft，只生成草稿。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-13/day-02.vue",
      "demo-app/server/advanced-labs/week-13/day-02.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "写操作权限",
      "幂等键",
      "审计日志",
      "二次确认 token",
      "副作用隔离"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：写操作确认流程截图"
    ]
  },
  {
    "id": "W13D03",
    "week": "13",
    "day": "03",
    "title": "写操作边界：确认、幂等与审计",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-13/day-03",
    "apiPath": "/api/advanced/week-13/day-03",
    "lessonPath": "/advanced-track/lessons/week-13/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-13.md",
    "mode": "tool",
    "build": "实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。",
    "skills": [
      "Write Tool",
      "Human Confirmation",
      "Idempotency",
      "Audit Log",
      "副作用边界"
    ],
    "proof": [
      "写操作确认流程截图",
      "重复提交防护日志",
      "审计日志样例"
    ],
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。",
    "flowSteps": [
      "继续执行第二条代码任务：实现 confirmDevTask，必须携带 confirmationId。",
      "补后端基础：写操作权限 / 幂等键。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-13/day-03.vue",
      "demo-app/server/advanced-labs/week-13/day-03.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "写操作权限",
      "幂等键",
      "审计日志",
      "二次确认 token",
      "副作用隔离"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：写操作确认流程截图"
    ]
  },
  {
    "id": "W13D04",
    "week": "13",
    "day": "04",
    "title": "写操作边界：确认、幂等与审计",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-13/day-04",
    "apiPath": "/api/advanced/week-13/day-04",
    "lessonPath": "/advanced-track/lessons/week-13/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-13.md",
    "mode": "tool",
    "build": "实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。",
    "skills": [
      "Write Tool",
      "Human Confirmation",
      "Idempotency",
      "Audit Log",
      "副作用边界"
    ],
    "proof": [
      "写操作确认流程截图",
      "重复提交防护日志",
      "审计日志样例"
    ],
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。",
    "flowSteps": [
      "继续执行第三条代码任务：记录 audit log：谁、何时、确认了什么。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-13/day-04.vue",
      "demo-app/server/advanced-labs/week-13/day-04.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "写操作权限",
      "幂等键",
      "审计日志",
      "二次确认 token",
      "副作用隔离"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：写操作确认流程截图"
    ]
  },
  {
    "id": "W13D05",
    "week": "13",
    "day": "05",
    "title": "写操作边界：确认、幂等与审计",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-13/day-05",
    "apiPath": "/api/advanced/week-13/day-05",
    "lessonPath": "/advanced-track/lessons/week-13/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-13.md",
    "mode": "tool",
    "build": "实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。",
    "skills": [
      "Write Tool",
      "Human Confirmation",
      "Idempotency",
      "Audit Log",
      "副作用边界"
    ],
    "proof": [
      "写操作确认流程截图",
      "重复提交防护日志",
      "审计日志样例"
    ],
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看工具参数是否校验，写操作是否需要确认。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-13/day-05.vue",
      "demo-app/server/advanced-labs/week-13/day-05.js",
      "demo-app/server/tools/registry.js",
      "demo-app/server/tools/auditLog.js",
      "demo-app/server/tools/validateToolInput.js"
    ],
    "backendFocus": [
      "写操作权限",
      "幂等键",
      "审计日志",
      "二次确认 token",
      "副作用隔离"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：写操作确认流程截图"
    ]
  },
  {
    "id": "W14D01",
    "week": "14",
    "day": "01",
    "title": "Workflow vs Agent：什么时候不该用 Agent",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-14/day-01",
    "apiPath": "/api/advanced/week-14/day-01",
    "lessonPath": "/advanced-track/lessons/week-14/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-14.md",
    "mode": "agent",
    "build": "同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。",
    "skills": [
      "Workflow",
      "Agent Loop",
      "State Machine",
      "Trace",
      "终止条件"
    ],
    "proof": [
      "两种实现对比",
      "Agent Trace 日志",
      "死循环防护案例"
    ],
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。",
    "flowSteps": [
      "从真实问题开始：很多任务用固定 workflow 更稳定。只有当下一步依赖中间结果、流程不固定时，才考虑 Agent。",
      "确认前端入口：前端展示两种模式的执行步骤，让你直观看到固定流程和 Agent 动态决策的差异。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-14/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-14/day-01.vue",
      "demo-app/server/advanced-labs/week-14/day-01.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "状态机",
      "Agent Loop",
      "maxSteps",
      "终止条件",
      "可回放 Trace"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：两种实现对比"
    ]
  },
  {
    "id": "W14D02",
    "week": "14",
    "day": "02",
    "title": "Workflow vs Agent：什么时候不该用 Agent",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-14/day-02",
    "apiPath": "/api/advanced/week-14/day-02",
    "lessonPath": "/advanced-track/lessons/week-14/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-14.md",
    "mode": "agent",
    "build": "同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。",
    "skills": [
      "Workflow",
      "Agent Loop",
      "State Machine",
      "Trace",
      "终止条件"
    ],
    "proof": [
      "两种实现对比",
      "Agent Trace 日志",
      "死循环防护案例"
    ],
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：实现固定 workflow：检索 -> 生成清单 -> 校验 -> 输出。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-14/day-02.vue",
      "demo-app/server/advanced-labs/week-14/day-02.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "状态机",
      "Agent Loop",
      "maxSteps",
      "终止条件",
      "可回放 Trace"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：两种实现对比"
    ]
  },
  {
    "id": "W14D03",
    "week": "14",
    "day": "03",
    "title": "Workflow vs Agent：什么时候不该用 Agent",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-14/day-03",
    "apiPath": "/api/advanced/week-14/day-03",
    "lessonPath": "/advanced-track/lessons/week-14/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-14.md",
    "mode": "agent",
    "build": "同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。",
    "skills": [
      "Workflow",
      "Agent Loop",
      "State Machine",
      "Trace",
      "终止条件"
    ],
    "proof": [
      "两种实现对比",
      "Agent Trace 日志",
      "死循环防护案例"
    ],
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。",
    "flowSteps": [
      "继续执行第二条代码任务：实现受限 Agent：最多 5 步，只能调用只读工具。",
      "补后端基础：状态机 / Agent Loop。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-14/day-03.vue",
      "demo-app/server/advanced-labs/week-14/day-03.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "状态机",
      "Agent Loop",
      "maxSteps",
      "终止条件",
      "可回放 Trace"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：两种实现对比"
    ]
  },
  {
    "id": "W14D04",
    "week": "14",
    "day": "04",
    "title": "Workflow vs Agent：什么时候不该用 Agent",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-14/day-04",
    "apiPath": "/api/advanced/week-14/day-04",
    "lessonPath": "/advanced-track/lessons/week-14/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-14.md",
    "mode": "agent",
    "build": "同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。",
    "skills": [
      "Workflow",
      "Agent Loop",
      "State Machine",
      "Trace",
      "终止条件"
    ],
    "proof": [
      "两种实现对比",
      "Agent Trace 日志",
      "死循环防护案例"
    ],
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。",
    "flowSteps": [
      "继续执行第三条代码任务：对比两种模式的失败样本和可测试性。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-14/day-04.vue",
      "demo-app/server/advanced-labs/week-14/day-04.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "状态机",
      "Agent Loop",
      "maxSteps",
      "终止条件",
      "可回放 Trace"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：两种实现对比"
    ]
  },
  {
    "id": "W14D05",
    "week": "14",
    "day": "05",
    "title": "Workflow vs Agent：什么时候不该用 Agent",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-14/day-05",
    "apiPath": "/api/advanced/week-14/day-05",
    "lessonPath": "/advanced-track/lessons/week-14/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-14.md",
    "mode": "agent",
    "build": "同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。",
    "skills": [
      "Workflow",
      "Agent Loop",
      "State Machine",
      "Trace",
      "终止条件"
    ],
    "proof": [
      "两种实现对比",
      "Agent Trace 日志",
      "死循环防护案例"
    ],
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-14/day-05.vue",
      "demo-app/server/advanced-labs/week-14/day-05.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "状态机",
      "Agent Loop",
      "maxSteps",
      "终止条件",
      "可回放 Trace"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：两种实现对比"
    ]
  },
  {
    "id": "W15D01",
    "week": "15",
    "day": "01",
    "title": "MCP Server：把你的工具标准化暴露给 AI",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-15/day-01",
    "apiPath": "/api/advanced/week-15/day-01",
    "lessonPath": "/advanced-track/lessons/week-15/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-15.md",
    "mode": "agent",
    "build": "用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。",
    "skills": [
      "MCP Server",
      "Tool",
      "Resource",
      "Schema",
      "权限边界"
    ],
    "proof": [
      "最小 MCP Server 代码",
      "工具调用截图或日志",
      "非法参数拒绝记录"
    ],
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。",
    "flowSteps": [
      "从真实问题开始：MCP 不是另一个模型，而是把工具和资源用统一协议提供给 AI 客户端。它适合封装公司内部查询能力。",
      "确认前端入口：前端仍然通过你的应用使用能力，但你要理解 MCP Server 在架构中位于工具服务层。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-15/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-15/day-01.vue",
      "demo-app/server/advanced-labs/week-15/day-01.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "MCP Tool",
      "MCP Resource",
      "JSON Schema",
      "最小权限暴露",
      "本地调试"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：最小 MCP Server 代码"
    ]
  },
  {
    "id": "W15D02",
    "week": "15",
    "day": "02",
    "title": "MCP Server：把你的工具标准化暴露给 AI",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-15/day-02",
    "apiPath": "/api/advanced/week-15/day-02",
    "lessonPath": "/advanced-track/lessons/week-15/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-15.md",
    "mode": "agent",
    "build": "用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。",
    "skills": [
      "MCP Server",
      "Tool",
      "Resource",
      "Schema",
      "权限边界"
    ],
    "proof": [
      "最小 MCP Server 代码",
      "工具调用截图或日志",
      "非法参数拒绝记录"
    ],
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：实现一个最小 MCP Server。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-15/day-02.vue",
      "demo-app/server/advanced-labs/week-15/day-02.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "MCP Tool",
      "MCP Resource",
      "JSON Schema",
      "最小权限暴露",
      "本地调试"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：最小 MCP Server 代码"
    ]
  },
  {
    "id": "W15D03",
    "week": "15",
    "day": "03",
    "title": "MCP Server：把你的工具标准化暴露给 AI",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-15/day-03",
    "apiPath": "/api/advanced/week-15/day-03",
    "lessonPath": "/advanced-track/lessons/week-15/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-15.md",
    "mode": "agent",
    "build": "用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。",
    "skills": [
      "MCP Server",
      "Tool",
      "Resource",
      "Schema",
      "权限边界"
    ],
    "proof": [
      "最小 MCP Server 代码",
      "工具调用截图或日志",
      "非法参数拒绝记录"
    ],
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。",
    "flowSteps": [
      "继续执行第二条代码任务：把 lookupApiField 封装成 MCP Tool。",
      "补后端基础：MCP Tool / MCP Resource。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-15/day-03.vue",
      "demo-app/server/advanced-labs/week-15/day-03.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "MCP Tool",
      "MCP Resource",
      "JSON Schema",
      "最小权限暴露",
      "本地调试"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：最小 MCP Server 代码"
    ]
  },
  {
    "id": "W15D04",
    "week": "15",
    "day": "04",
    "title": "MCP Server：把你的工具标准化暴露给 AI",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-15/day-04",
    "apiPath": "/api/advanced/week-15/day-04",
    "lessonPath": "/advanced-track/lessons/week-15/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-15.md",
    "mode": "agent",
    "build": "用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。",
    "skills": [
      "MCP Server",
      "Tool",
      "Resource",
      "Schema",
      "权限边界"
    ],
    "proof": [
      "最小 MCP Server 代码",
      "工具调用截图或日志",
      "非法参数拒绝记录"
    ],
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。",
    "flowSteps": [
      "继续执行第三条代码任务：只暴露必要资源，非法参数要拒绝。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-15/day-04.vue",
      "demo-app/server/advanced-labs/week-15/day-04.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "MCP Tool",
      "MCP Resource",
      "JSON Schema",
      "最小权限暴露",
      "本地调试"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：最小 MCP Server 代码"
    ]
  },
  {
    "id": "W15D05",
    "week": "15",
    "day": "05",
    "title": "MCP Server：把你的工具标准化暴露给 AI",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 3：Tool / Agent / MCP",
    "path": "/advanced/week-15/day-05",
    "apiPath": "/api/advanced/week-15/day-05",
    "lessonPath": "/advanced-track/lessons/week-15/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-15.md",
    "mode": "agent",
    "build": "用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。",
    "skills": [
      "MCP Server",
      "Tool",
      "Resource",
      "Schema",
      "权限边界"
    ],
    "proof": [
      "最小 MCP Server 代码",
      "工具调用截图或日志",
      "非法参数拒绝记录"
    ],
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-15/day-05.vue",
      "demo-app/server/advanced-labs/week-15/day-05.js",
      "demo-app/server/agent/workflow.js",
      "demo-app/server/agent/agentLoop.js",
      "demo-app/server/agent/trace.js"
    ],
    "backendFocus": [
      "MCP Tool",
      "MCP Resource",
      "JSON Schema",
      "最小权限暴露",
      "本地调试"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：最小 MCP Server 代码"
    ]
  },
  {
    "id": "W16D01",
    "week": "16",
    "day": "01",
    "title": "项目三：MCP + RAG + Tool 综合接口助手",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 3 项目验收",
    "path": "/advanced/week-16/day-01",
    "apiPath": "/api/advanced/week-16/day-01",
    "lessonPath": "/advanced-track/lessons/week-16/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-16.md",
    "mode": "rag",
    "build": "让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。",
    "skills": [
      "RAG + Tool",
      "受限 Agent",
      "MCP 封装",
      "Trace",
      "综合架构"
    ],
    "proof": [
      "综合 Demo",
      "多工具 Trace",
      "项目架构图与失败样本"
    ],
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。",
    "flowSteps": [
      "从真实问题开始：这一周把 RAG、Tool、Agent 和 MCP 串成一个真正能讲清楚的综合项目。",
      "确认前端入口：前端重点展示完整 Trace：检索了什么、调用了什么工具、为什么拒答或继续查。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-16/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-16/day-01.vue",
      "demo-app/server/advanced-labs/week-16/day-01.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "多能力编排",
      "Trace 数据结构",
      "错误传播",
      "权限分层",
      "综合项目验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：综合 Demo"
    ]
  },
  {
    "id": "W16D02",
    "week": "16",
    "day": "02",
    "title": "项目三：MCP + RAG + Tool 综合接口助手",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 3 项目验收",
    "path": "/advanced/week-16/day-02",
    "apiPath": "/api/advanced/week-16/day-02",
    "lessonPath": "/advanced-track/lessons/week-16/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-16.md",
    "mode": "rag",
    "build": "让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。",
    "skills": [
      "RAG + Tool",
      "受限 Agent",
      "MCP 封装",
      "Trace",
      "综合架构"
    ],
    "proof": [
      "综合 Demo",
      "多工具 Trace",
      "项目架构图与失败样本"
    ],
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：整合 RAG 检索、lookupApiField 工具和 Agent workflow。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-16/day-02.vue",
      "demo-app/server/advanced-labs/week-16/day-02.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "多能力编排",
      "Trace 数据结构",
      "错误传播",
      "权限分层",
      "综合项目验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：综合 Demo"
    ]
  },
  {
    "id": "W16D03",
    "week": "16",
    "day": "03",
    "title": "项目三：MCP + RAG + Tool 综合接口助手",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 3 项目验收",
    "path": "/advanced/week-16/day-03",
    "apiPath": "/api/advanced/week-16/day-03",
    "lessonPath": "/advanced-track/lessons/week-16/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-16.md",
    "mode": "rag",
    "build": "让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。",
    "skills": [
      "RAG + Tool",
      "受限 Agent",
      "MCP 封装",
      "Trace",
      "综合架构"
    ],
    "proof": [
      "综合 Demo",
      "多工具 Trace",
      "项目架构图与失败样本"
    ],
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。",
    "flowSteps": [
      "继续执行第二条代码任务：输出完整 Trace，能回放每一步。",
      "补后端基础：多能力编排 / Trace 数据结构。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-16/day-03.vue",
      "demo-app/server/advanced-labs/week-16/day-03.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "多能力编排",
      "Trace 数据结构",
      "错误传播",
      "权限分层",
      "综合项目验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：综合 Demo"
    ]
  },
  {
    "id": "W16D04",
    "week": "16",
    "day": "04",
    "title": "项目三：MCP + RAG + Tool 综合接口助手",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 3 项目验收",
    "path": "/advanced/week-16/day-04",
    "apiPath": "/api/advanced/week-16/day-04",
    "lessonPath": "/advanced-track/lessons/week-16/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-16.md",
    "mode": "rag",
    "build": "让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。",
    "skills": [
      "RAG + Tool",
      "受限 Agent",
      "MCP 封装",
      "Trace",
      "综合架构"
    ],
    "proof": [
      "综合 Demo",
      "多工具 Trace",
      "项目架构图与失败样本"
    ],
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。",
    "flowSteps": [
      "继续执行第三条代码任务：整理综合项目架构图和失败样本。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-16/day-04.vue",
      "demo-app/server/advanced-labs/week-16/day-04.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "多能力编排",
      "Trace 数据结构",
      "错误传播",
      "权限分层",
      "综合项目验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：综合 Demo"
    ]
  },
  {
    "id": "W16D05",
    "week": "16",
    "day": "05",
    "title": "项目三：MCP + RAG + Tool 综合接口助手",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 3 项目验收",
    "path": "/advanced/week-16/day-05",
    "apiPath": "/api/advanced/week-16/day-05",
    "lessonPath": "/advanced-track/lessons/week-16/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-16.md",
    "mode": "rag",
    "build": "让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。",
    "skills": [
      "RAG + Tool",
      "受限 Agent",
      "MCP 封装",
      "Trace",
      "综合架构"
    ],
    "proof": [
      "综合 Demo",
      "多工具 Trace",
      "项目架构图与失败样本"
    ],
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看答案是否有证据来源，证据不足是否拒答。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-16/day-05.vue",
      "demo-app/server/advanced-labs/week-16/day-05.js",
      "demo-app/server/rag/ingest.js",
      "demo-app/server/rag/search.js",
      "demo-app/server/rag/answer.js",
      "demo-app/server/rag/eval-cases.json"
    ],
    "backendFocus": [
      "多能力编排",
      "Trace 数据结构",
      "错误传播",
      "权限分层",
      "综合项目验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：综合 Demo"
    ]
  },
  {
    "id": "W17D01",
    "week": "17",
    "day": "01",
    "title": "AI 产品边界：睡眠 / 情绪助手为什么难",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 4：产品化与安全",
    "path": "/advanced/week-17/day-01",
    "apiPath": "/api/advanced/week-17/day-01",
    "lessonPath": "/advanced-track/lessons/week-17/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-17.md",
    "mode": "product",
    "build": "设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。",
    "skills": [
      "AI Product Boundary",
      "Safety Policy",
      "Crisis Escalation",
      "隐私最小化",
      "非医疗建议"
    ],
    "proof": [
      "产品边界文档",
      "高风险样本测试",
      "安全提示截图"
    ],
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。",
    "flowSteps": [
      "从真实问题开始：情绪和睡眠助手适合你的兴趣，但也有高风险边界：不能诊断、不能替代医生、不能处理危机不升级。",
      "确认前端入口：前端做用户日志录入、周总结、建议展示和安全提示，不做医疗诊断 UI 暗示。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-17/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-17/day-01.vue",
      "demo-app/server/advanced-labs/week-17/day-01.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户数据最小化",
      "敏感内容分类",
      "安全策略路由",
      "拒答 / 升级",
      "隐私删除"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：产品边界文档"
    ]
  },
  {
    "id": "W17D02",
    "week": "17",
    "day": "02",
    "title": "AI 产品边界：睡眠 / 情绪助手为什么难",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 4：产品化与安全",
    "path": "/advanced/week-17/day-02",
    "apiPath": "/api/advanced/week-17/day-02",
    "lessonPath": "/advanced-track/lessons/week-17/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-17.md",
    "mode": "product",
    "build": "设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。",
    "skills": [
      "AI Product Boundary",
      "Safety Policy",
      "Crisis Escalation",
      "隐私最小化",
      "非医疗建议"
    ],
    "proof": [
      "产品边界文档",
      "高风险样本测试",
      "安全提示截图"
    ],
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：定义 sleep_log / mood_log 最小数据结构。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-17/day-02.vue",
      "demo-app/server/advanced-labs/week-17/day-02.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户数据最小化",
      "敏感内容分类",
      "安全策略路由",
      "拒答 / 升级",
      "隐私删除"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：产品边界文档"
    ]
  },
  {
    "id": "W17D03",
    "week": "17",
    "day": "03",
    "title": "AI 产品边界：睡眠 / 情绪助手为什么难",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 4：产品化与安全",
    "path": "/advanced/week-17/day-03",
    "apiPath": "/api/advanced/week-17/day-03",
    "lessonPath": "/advanced-track/lessons/week-17/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-17.md",
    "mode": "product",
    "build": "设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。",
    "skills": [
      "AI Product Boundary",
      "Safety Policy",
      "Crisis Escalation",
      "隐私最小化",
      "非医疗建议"
    ],
    "proof": [
      "产品边界文档",
      "高风险样本测试",
      "安全提示截图"
    ],
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。",
    "flowSteps": [
      "继续执行第二条代码任务：实现高风险输入识别，命中后走安全提示。",
      "补后端基础：用户数据最小化 / 敏感内容分类。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-17/day-03.vue",
      "demo-app/server/advanced-labs/week-17/day-03.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户数据最小化",
      "敏感内容分类",
      "安全策略路由",
      "拒答 / 升级",
      "隐私删除"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：产品边界文档"
    ]
  },
  {
    "id": "W17D04",
    "week": "17",
    "day": "04",
    "title": "AI 产品边界：睡眠 / 情绪助手为什么难",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 4：产品化与安全",
    "path": "/advanced/week-17/day-04",
    "apiPath": "/api/advanced/week-17/day-04",
    "lessonPath": "/advanced-track/lessons/week-17/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-17.md",
    "mode": "product",
    "build": "设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。",
    "skills": [
      "AI Product Boundary",
      "Safety Policy",
      "Crisis Escalation",
      "隐私最小化",
      "非医疗建议"
    ],
    "proof": [
      "产品边界文档",
      "高风险样本测试",
      "安全提示截图"
    ],
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。",
    "flowSteps": [
      "继续执行第三条代码任务：写产品边界文档：能做什么，不能做什么。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-17/day-04.vue",
      "demo-app/server/advanced-labs/week-17/day-04.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户数据最小化",
      "敏感内容分类",
      "安全策略路由",
      "拒答 / 升级",
      "隐私删除"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：产品边界文档"
    ]
  },
  {
    "id": "W17D05",
    "week": "17",
    "day": "05",
    "title": "AI 产品边界：睡眠 / 情绪助手为什么难",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 4：产品化与安全",
    "path": "/advanced/week-17/day-05",
    "apiPath": "/api/advanced/week-17/day-05",
    "lessonPath": "/advanced-track/lessons/week-17/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-17.md",
    "mode": "product",
    "build": "设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。",
    "skills": [
      "AI Product Boundary",
      "Safety Policy",
      "Crisis Escalation",
      "隐私最小化",
      "非医疗建议"
    ],
    "proof": [
      "产品边界文档",
      "高风险样本测试",
      "安全提示截图"
    ],
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-17/day-05.vue",
      "demo-app/server/advanced-labs/week-17/day-05.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户数据最小化",
      "敏感内容分类",
      "安全策略路由",
      "拒答 / 升级",
      "隐私删除"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：产品边界文档"
    ]
  },
  {
    "id": "W18D01",
    "week": "18",
    "day": "01",
    "title": "项目四：AI 睡眠 / 情绪教练 MVP",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 4 项目验收",
    "path": "/advanced/week-18/day-01",
    "apiPath": "/api/advanced/week-18/day-01",
    "lessonPath": "/advanced-track/lessons/week-18/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-18.md",
    "mode": "product",
    "build": "完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。",
    "skills": [
      "AI Product MVP",
      "个性化上下文",
      "用户反馈",
      "安全边界",
      "产品验证"
    ],
    "proof": [
      "可演示 MVP",
      "10 条用户反馈样本",
      "安全与失败测试报告"
    ],
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。",
    "flowSteps": [
      "从真实问题开始：这是偏 AI 产品工程师方向的项目，重点证明你能把用户场景、AI 能力、工程边界和安全策略结合起来。",
      "确认前端入口：前端做成完整产品感：今日记录、趋势摘要、建议卡片、反馈按钮、安全提示。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-18/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-18/day-01.vue",
      "demo-app/server/advanced-labs/week-18/day-01.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户上下文组装",
      "历史摘要",
      "反馈数据",
      "安全分类",
      "上线前验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：可演示 MVP"
    ]
  },
  {
    "id": "W18D02",
    "week": "18",
    "day": "02",
    "title": "项目四：AI 睡眠 / 情绪教练 MVP",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 4 项目验收",
    "path": "/advanced/week-18/day-02",
    "apiPath": "/api/advanced/week-18/day-02",
    "lessonPath": "/advanced-track/lessons/week-18/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-18.md",
    "mode": "product",
    "build": "完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。",
    "skills": [
      "AI Product MVP",
      "个性化上下文",
      "用户反馈",
      "安全边界",
      "产品验证"
    ],
    "proof": [
      "可演示 MVP",
      "10 条用户反馈样本",
      "安全与失败测试报告"
    ],
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：实现日志录入和历史摘要输入。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-18/day-02.vue",
      "demo-app/server/advanced-labs/week-18/day-02.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户上下文组装",
      "历史摘要",
      "反馈数据",
      "安全分类",
      "上线前验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：可演示 MVP"
    ]
  },
  {
    "id": "W18D03",
    "week": "18",
    "day": "03",
    "title": "项目四：AI 睡眠 / 情绪教练 MVP",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 4 项目验收",
    "path": "/advanced/week-18/day-03",
    "apiPath": "/api/advanced/week-18/day-03",
    "lessonPath": "/advanced-track/lessons/week-18/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-18.md",
    "mode": "product",
    "build": "完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。",
    "skills": [
      "AI Product MVP",
      "个性化上下文",
      "用户反馈",
      "安全边界",
      "产品验证"
    ],
    "proof": [
      "可演示 MVP",
      "10 条用户反馈样本",
      "安全与失败测试报告"
    ],
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。",
    "flowSteps": [
      "继续执行第二条代码任务：模型生成周总结和建议卡片，必须经过安全规则。",
      "补后端基础：用户上下文组装 / 历史摘要。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-18/day-03.vue",
      "demo-app/server/advanced-labs/week-18/day-03.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户上下文组装",
      "历史摘要",
      "反馈数据",
      "安全分类",
      "上线前验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：可演示 MVP"
    ]
  },
  {
    "id": "W18D04",
    "week": "18",
    "day": "04",
    "title": "项目四：AI 睡眠 / 情绪教练 MVP",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 4 项目验收",
    "path": "/advanced/week-18/day-04",
    "apiPath": "/api/advanced/week-18/day-04",
    "lessonPath": "/advanced-track/lessons/week-18/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-18.md",
    "mode": "product",
    "build": "完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。",
    "skills": [
      "AI Product MVP",
      "个性化上下文",
      "用户反馈",
      "安全边界",
      "产品验证"
    ],
    "proof": [
      "可演示 MVP",
      "10 条用户反馈样本",
      "安全与失败测试报告"
    ],
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。",
    "flowSteps": [
      "继续执行第三条代码任务：加入用户反馈：有用 / 不准确 / 不安全。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-18/day-04.vue",
      "demo-app/server/advanced-labs/week-18/day-04.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户上下文组装",
      "历史摘要",
      "反馈数据",
      "安全分类",
      "上线前验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：可演示 MVP"
    ]
  },
  {
    "id": "W18D05",
    "week": "18",
    "day": "05",
    "title": "项目四：AI 睡眠 / 情绪教练 MVP",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 4 项目验收",
    "path": "/advanced/week-18/day-05",
    "apiPath": "/api/advanced/week-18/day-05",
    "lessonPath": "/advanced-track/lessons/week-18/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-18.md",
    "mode": "product",
    "build": "完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。",
    "skills": [
      "AI Product MVP",
      "个性化上下文",
      "用户反馈",
      "安全边界",
      "产品验证"
    ],
    "proof": [
      "可演示 MVP",
      "10 条用户反馈样本",
      "安全与失败测试报告"
    ],
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看安全边界、隐私最小化和高风险输入处理。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-18/day-05.vue",
      "demo-app/server/advanced-labs/week-18/day-05.js",
      "demo-app/server/product/safetyPolicy.js",
      "demo-app/server/product/userLogs.js",
      "demo-app/server/product/riskClassifier.js"
    ],
    "backendFocus": [
      "用户上下文组装",
      "历史摘要",
      "反馈数据",
      "安全分类",
      "上线前验收"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：可演示 MVP"
    ]
  },
  {
    "id": "W19D01",
    "week": "19",
    "day": "01",
    "title": "部署、监控与成本：作品集也要像真实项目",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 5：上线与作品集",
    "path": "/advanced/week-19/day-01",
    "apiPath": "/api/advanced/week-19/day-01",
    "lessonPath": "/advanced-track/lessons/week-19/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-19.md",
    "mode": "observability",
    "build": "为核心项目整理部署方案和监控面板：环境变量、日志查看、错误率、延迟、token、成本估算。",
    "skills": [
      "Deployment",
      "Observability",
      "Rate Limit",
      "Cost",
      "Incident Review"
    ],
    "proof": [
      "部署说明",
      "监控 / 日志截图",
      "一次故障复盘文档"
    ],
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。",
    "flowSteps": [
      "从真实问题开始：求职项目如果只能本地跑，可信度会弱。你至少要能讲清部署、环境变量、日志、成本和线上故障排查。",
      "确认前端入口：前端展示一个简单运营 / 调试面板：调用次数、失败率、平均延迟、成本估算。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-19/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-19/day-01.vue",
      "demo-app/server/advanced-labs/week-19/day-01.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "部署环境变量",
      "CORS",
      "限流",
      "日志查询",
      "成本估算",
      "故障复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：部署说明"
    ]
  },
  {
    "id": "W19D02",
    "week": "19",
    "day": "02",
    "title": "部署、监控与成本：作品集也要像真实项目",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 5：上线与作品集",
    "path": "/advanced/week-19/day-02",
    "apiPath": "/api/advanced/week-19/day-02",
    "lessonPath": "/advanced-track/lessons/week-19/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-19.md",
    "mode": "observability",
    "build": "为核心项目整理部署方案和监控面板：环境变量、日志查看、错误率、延迟、token、成本估算。",
    "skills": [
      "Deployment",
      "Observability",
      "Rate Limit",
      "Cost",
      "Incident Review"
    ],
    "proof": [
      "部署说明",
      "监控 / 日志截图",
      "一次故障复盘文档"
    ],
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：整理本地和部署环境变量说明。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-19/day-02.vue",
      "demo-app/server/advanced-labs/week-19/day-02.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "部署环境变量",
      "CORS",
      "限流",
      "日志查询",
      "成本估算",
      "故障复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：部署说明"
    ]
  },
  {
    "id": "W19D03",
    "week": "19",
    "day": "03",
    "title": "部署、监控与成本：作品集也要像真实项目",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 5：上线与作品集",
    "path": "/advanced/week-19/day-03",
    "apiPath": "/api/advanced/week-19/day-03",
    "lessonPath": "/advanced-track/lessons/week-19/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-19.md",
    "mode": "observability",
    "build": "为核心项目整理部署方案和监控面板：环境变量、日志查看、错误率、延迟、token、成本估算。",
    "skills": [
      "Deployment",
      "Observability",
      "Rate Limit",
      "Cost",
      "Incident Review"
    ],
    "proof": [
      "部署说明",
      "监控 / 日志截图",
      "一次故障复盘文档"
    ],
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。",
    "flowSteps": [
      "继续执行第二条代码任务：实现最小监控数据展示。",
      "补后端基础：部署环境变量 / CORS。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-19/day-03.vue",
      "demo-app/server/advanced-labs/week-19/day-03.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "部署环境变量",
      "CORS",
      "限流",
      "日志查询",
      "成本估算",
      "故障复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：部署说明"
    ]
  },
  {
    "id": "W19D04",
    "week": "19",
    "day": "04",
    "title": "部署、监控与成本：作品集也要像真实项目",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 5：上线与作品集",
    "path": "/advanced/week-19/day-04",
    "apiPath": "/api/advanced/week-19/day-04",
    "lessonPath": "/advanced-track/lessons/week-19/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-19.md",
    "mode": "observability",
    "build": "为核心项目整理部署方案和监控面板：环境变量、日志查看、错误率、延迟、token、成本估算。",
    "skills": [
      "Deployment",
      "Observability",
      "Rate Limit",
      "Cost",
      "Incident Review"
    ],
    "proof": [
      "部署说明",
      "监控 / 日志截图",
      "一次故障复盘文档"
    ],
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。",
    "flowSteps": [
      "继续执行第三条代码任务：写一次故障复盘：慢、错、贵或失败。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-19/day-04.vue",
      "demo-app/server/advanced-labs/week-19/day-04.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "部署环境变量",
      "CORS",
      "限流",
      "日志查询",
      "成本估算",
      "故障复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：部署说明"
    ]
  },
  {
    "id": "W19D05",
    "week": "19",
    "day": "05",
    "title": "部署、监控与成本：作品集也要像真实项目",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 5：上线与作品集",
    "path": "/advanced/week-19/day-05",
    "apiPath": "/api/advanced/week-19/day-05",
    "lessonPath": "/advanced-track/lessons/week-19/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-19.md",
    "mode": "observability",
    "build": "为核心项目整理部署方案和监控面板：环境变量、日志查看、错误率、延迟、token、成本估算。",
    "skills": [
      "Deployment",
      "Observability",
      "Rate Limit",
      "Cost",
      "Incident Review"
    ],
    "proof": [
      "部署说明",
      "监控 / 日志截图",
      "一次故障复盘文档"
    ],
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看 requestId、耗时、token、成本和错误类型是否能串起来。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-19/day-05.vue",
      "demo-app/server/advanced-labs/week-19/day-05.js",
      "demo-app/server/logs/aiCallLogs.js",
      "demo-app/server/metrics/cost.js",
      "demo-app/server/metrics/latency.js"
    ],
    "backendFocus": [
      "部署环境变量",
      "CORS",
      "限流",
      "日志查询",
      "成本估算",
      "故障复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：部署说明"
    ]
  },
  {
    "id": "W20D01",
    "week": "20",
    "day": "01",
    "title": "作品集、简历与 45 分钟项目答辩",
    "dayTitle": "真实场景与边界",
    "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
    "phase": "阶段 5：求职验收",
    "path": "/advanced/week-20/day-01",
    "apiPath": "/api/advanced/week-20/day-01",
    "lessonPath": "/advanced-track/lessons/week-20/day-01.md",
    "reviewPath": "/advanced-track/reviews/week-20.md",
    "mode": "portfolio",
    "build": "整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。",
    "skills": [
      "Portfolio",
      "Resume",
      "Interview",
      "Architecture Storytelling",
      "项目答辩"
    ],
    "proof": [
      "作品集首页",
      "两版简历项目描述",
      "45 分钟模拟答辩稿"
    ],
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
    "flowSteps": [
      "从真实问题开始：最终目标是换工作，所以你要把项目包装成招聘方能判断能力的证据，而不是一堆学习笔记。",
      "确认前端入口：作品集页面本身也要体现前端能力：结构清楚、交互顺、证据可点开。",
      "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
      "打开本日课程文件：advanced-track/lessons/week-20/day-01.md。",
      "本日不急着写完整功能，先确认这条链路为什么必须存在。",
      "重点看证据是否能被面试官快速检查。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-20/day-01.vue",
      "demo-app/server/advanced-labs/week-20/day-01.js",
      "portfolio/",
      "advanced-track/reviews/",
      "README.md"
    ],
    "backendFocus": [
      "项目 README 标准",
      "架构图表达",
      "指标展示",
      "面试追问准备",
      "技术取舍复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能画出边界图。",
      "能说清今天为什么不是纯前端功能。",
      "本周证据至少推进一项：作品集首页"
    ]
  },
  {
    "id": "W20D02",
    "week": "20",
    "day": "02",
    "title": "作品集、简历与 45 分钟项目答辩",
    "dayTitle": "最小代码闭环",
    "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
    "phase": "阶段 5：求职验收",
    "path": "/advanced/week-20/day-02",
    "apiPath": "/api/advanced/week-20/day-02",
    "lessonPath": "/advanced-track/lessons/week-20/day-02.md",
    "reviewPath": "/advanced-track/reviews/week-20.md",
    "mode": "portfolio",
    "build": "整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。",
    "skills": [
      "Portfolio",
      "Resume",
      "Interview",
      "Architecture Storytelling",
      "项目答辩"
    ],
    "proof": [
      "作品集首页",
      "两版简历项目描述",
      "45 分钟模拟答辩稿"
    ],
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
    "flowSteps": [
      "从当天 Vue 页面触发一次用户输入。",
      "前端调用自己的服务端 API，而不是直接请求模型供应商。",
      "服务端执行第一条代码任务：整理项目首页：问题、方案、架构、证据、失败和下一步。",
      "服务端返回统一响应，前端展示成功或失败状态。",
      "记录一次成功链路的 requestId / Trace / Network 证据。",
      "重点看证据是否能被面试官快速检查。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-20/day-02.vue",
      "demo-app/server/advanced-labs/week-20/day-02.js",
      "portfolio/",
      "advanced-track/reviews/",
      "README.md"
    ],
    "backendFocus": [
      "项目 README 标准",
      "架构图表达",
      "指标展示",
      "面试追问准备",
      "技术取舍复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能跑通一条成功链路。",
      "能在 Network 或日志里找到一次请求证据。",
      "本周证据至少推进一项：作品集首页"
    ]
  },
  {
    "id": "W20D03",
    "week": "20",
    "day": "03",
    "title": "作品集、简历与 45 分钟项目答辩",
    "dayTitle": "后端补点与可靠性",
    "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
    "phase": "阶段 5：求职验收",
    "path": "/advanced/week-20/day-03",
    "apiPath": "/api/advanced/week-20/day-03",
    "lessonPath": "/advanced-track/lessons/week-20/day-03.md",
    "reviewPath": "/advanced-track/reviews/week-20.md",
    "mode": "portfolio",
    "build": "整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。",
    "skills": [
      "Portfolio",
      "Resume",
      "Interview",
      "Architecture Storytelling",
      "项目答辩"
    ],
    "proof": [
      "作品集首页",
      "两版简历项目描述",
      "45 分钟模拟答辩稿"
    ],
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
    "flowSteps": [
      "继续执行第二条代码任务：写 AI Engineer 和 AI Product Engineer 两版简历项目描述。",
      "补后端基础：项目 README 标准 / 架构图表达。",
      "给空输入、非法参数、超时、Provider 异常增加服务端处理。",
      "前端只展示用户能理解的错误，开发日志保留技术细节。",
      "确认失败链路不会让页面卡死或吞掉用户输入。",
      "重点看证据是否能被面试官快速检查。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-20/day-03.vue",
      "demo-app/server/advanced-labs/week-20/day-03.js",
      "portfolio/",
      "advanced-track/reviews/",
      "README.md"
    ],
    "backendFocus": [
      "项目 README 标准",
      "架构图表达",
      "指标展示",
      "面试追问准备",
      "技术取舍复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能触发至少一个失败分支。",
      "用户提示和开发日志没有混在一起。",
      "本周证据至少推进一项：作品集首页"
    ]
  },
  {
    "id": "W20D04",
    "week": "20",
    "day": "04",
    "title": "作品集、简历与 45 分钟项目答辩",
    "dayTitle": "失败样本与评测",
    "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
    "phase": "阶段 5：求职验收",
    "path": "/advanced/week-20/day-04",
    "apiPath": "/api/advanced/week-20/day-04",
    "lessonPath": "/advanced-track/lessons/week-20/day-04.md",
    "reviewPath": "/advanced-track/reviews/week-20.md",
    "mode": "portfolio",
    "build": "整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。",
    "skills": [
      "Portfolio",
      "Resume",
      "Interview",
      "Architecture Storytelling",
      "项目答辩"
    ],
    "proof": [
      "作品集首页",
      "两版简历项目描述",
      "45 分钟模拟答辩稿"
    ],
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
    "flowSteps": [
      "继续执行第三条代码任务：准备 30 个追问，用自己的项目回答。",
      "准备至少 10 条正常、边界、失败和恶意输入。",
      "运行样本并记录每条结果。",
      "把失败归因到数据、检索、模型、代码或产品边界。",
      "只改一个变量再复测，避免不知道是哪次修改生效。",
      "重点看证据是否能被面试官快速检查。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-20/day-04.vue",
      "demo-app/server/advanced-labs/week-20/day-04.js",
      "portfolio/",
      "advanced-track/reviews/",
      "README.md"
    ],
    "backendFocus": [
      "项目 README 标准",
      "架构图表达",
      "指标展示",
      "面试追问准备",
      "技术取舍复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "至少记录 10 条样本。",
      "每个失败都有归因。",
      "本周证据至少推进一项：作品集首页"
    ]
  },
  {
    "id": "W20D05",
    "week": "20",
    "day": "05",
    "title": "作品集、简历与 45 分钟项目答辩",
    "dayTitle": "作品集与面试表达",
    "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
    "phase": "阶段 5：求职验收",
    "path": "/advanced/week-20/day-05",
    "apiPath": "/api/advanced/week-20/day-05",
    "lessonPath": "/advanced-track/lessons/week-20/day-05.md",
    "reviewPath": "/advanced-track/reviews/week-20.md",
    "mode": "portfolio",
    "build": "整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。",
    "skills": [
      "Portfolio",
      "Resume",
      "Interview",
      "Architecture Storytelling",
      "项目答辩"
    ],
    "proof": [
      "作品集首页",
      "两版简历项目描述",
      "45 分钟模拟答辩稿"
    ],
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
    "flowSteps": [
      "收集本周架构图、关键代码、日志、Trace、截图或评测报告。",
      "把本周能力写成 30 秒版本和 3 分钟版本。",
      "围绕这句话组织面试表达：我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
      "标记下周要继承的代码和暂时不处理的技术债。",
      "如果没有可验证证据，本周不算通过。",
      "重点看证据是否能被面试官快速检查。"
    ],
    "codeFiles": [
      "demo-app/src/advanced-labs/days/week-20/day-05.vue",
      "demo-app/server/advanced-labs/week-20/day-05.js",
      "portfolio/",
      "advanced-track/reviews/",
      "README.md"
    ],
    "backendFocus": [
      "项目 README 标准",
      "架构图表达",
      "指标展示",
      "面试追问准备",
      "技术取舍复盘"
    ],
    "acceptanceChecks": [
      "页面能说明今天的代码流程，而不是只展示概念。",
      "能指出至少一个服务端边界。",
      "能讲出 30 秒版本。",
      "有本周可检查证据。",
      "本周证据至少推进一项：作品集首页"
    ]
  }
]

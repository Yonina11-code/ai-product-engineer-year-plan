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
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。"
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
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。"
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
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。"
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
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。"
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
    "interview": "我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。"
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
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。"
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
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。"
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
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。"
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
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。"
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
    "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。"
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
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。"
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
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。"
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
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。"
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
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。"
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
    "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。"
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
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。"
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
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。"
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
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。"
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
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。"
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
    "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。"
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
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。"
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
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。"
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
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。"
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
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。"
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
    "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。"
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
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。"
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
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。"
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
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。"
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
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。"
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
    "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。"
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
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。"
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
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。"
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
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。"
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
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。"
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
    "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。"
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
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。"
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
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。"
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
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。"
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
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。"
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
    "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。"
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
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。"
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
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。"
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
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。"
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
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。"
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
    "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。"
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
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。"
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
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。"
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
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。"
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
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。"
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
    "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。"
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
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。"
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
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。"
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
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。"
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
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。"
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
    "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。"
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
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。"
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
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。"
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
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。"
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
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。"
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
    "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。"
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
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。"
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
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。"
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
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。"
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
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。"
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
    "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。"
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
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。"
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
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。"
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
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。"
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
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。"
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
    "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。"
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
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。"
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
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。"
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
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。"
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
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。"
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
    "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。"
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
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。"
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
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。"
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
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。"
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
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。"
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
    "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。"
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
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。"
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
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。"
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
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。"
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
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。"
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
    "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。"
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
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。"
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
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。"
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
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。"
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
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。"
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
    "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。"
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
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。"
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
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。"
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
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。"
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
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。"
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
    "interview": "我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。"
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
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。"
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
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。"
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
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。"
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
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。"
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
    "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。"
  }
]

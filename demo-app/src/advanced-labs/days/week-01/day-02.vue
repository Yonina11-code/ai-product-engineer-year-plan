<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

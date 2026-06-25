<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

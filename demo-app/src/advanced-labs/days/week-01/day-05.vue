<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W01D05",
  "week": "01",
  "day": "05",
  "title": "真实模型 Gateway 与调用边界",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "AI 应用工程底座",
  "path": "/advanced/week-01/day-05",
  "lessonPath": "/advanced-track/lessons/week-01/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-01.md",
  "mode": "gateway",
  "build": "在 demo-app 中完成一个可切换 Provider 的 AI Gateway：mock / DeepSeek，支持超时、错误归类、请求日志和敏感配置隔离。",
  "skills": [
    "Provider 抽象",
    "服务端 API Key 管理",
    "超时与错误分类",
    "模型响应归一化"
  ],
  "proof": [
    "一张 AI Gateway 架构图",
    "一次真实模型调用记录",
    "三类失败错误截图或日志"
  ],
  "interview": "如果面试官问“你怎么把大模型接进现有前端系统”，你要能讲清为什么不在前端直接调模型。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

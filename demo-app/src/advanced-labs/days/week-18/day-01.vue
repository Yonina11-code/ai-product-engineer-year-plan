<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W18D01",
  "week": "18",
  "day": "01",
  "title": "可观测性：日志、Token、成本、延迟与质量",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "产品化与上线",
  "path": "/advanced/week-18/day-01",
  "lessonPath": "/advanced-track/lessons/week-18/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-18.md",
  "mode": "observability",
  "build": "为项目加入请求日志、Token 统计、成本估算、错误率和质量抽样。",
  "skills": [
    "Observability",
    "Token Usage",
    "Cost",
    "Latency",
    "Quality Sampling"
  ],
  "proof": [
    "监控面板或日志表",
    "成本记录",
    "一次故障归因"
  ],
  "interview": "讲清 AI 功能上线后你看哪些指标。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

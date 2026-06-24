<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W18D04",
  "week": "18",
  "day": "04",
  "title": "可观测性：日志、Token、成本、延迟与质量",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "产品化与上线",
  "path": "/advanced/week-18/day-04",
  "lessonPath": "/advanced-track/lessons/week-18/day-04.md",
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

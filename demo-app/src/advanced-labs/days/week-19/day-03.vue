<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

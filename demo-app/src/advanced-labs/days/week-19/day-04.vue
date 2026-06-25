<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

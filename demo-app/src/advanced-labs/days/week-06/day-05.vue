<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

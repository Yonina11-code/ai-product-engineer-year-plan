<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
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
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

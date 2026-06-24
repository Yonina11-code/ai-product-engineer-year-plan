<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W22D01",
  "week": "22",
  "day": "01",
  "title": "AI 工程面试专项",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "求职作品集",
  "path": "/advanced/week-22/day-01",
  "lessonPath": "/advanced-track/lessons/week-22/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-22.md",
  "mode": "portfolio",
  "build": "整理 30 个高频面试问答，并用自己的项目回答。",
  "skills": [
    "技术表达",
    "项目追问",
    "架构权衡",
    "失败复盘"
  ],
  "proof": [
    "30 个问答",
    "三分钟项目介绍",
    "一次模拟面试记录"
  ],
  "interview": "用自己的项目回答，不背概念。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W22D02",
  "week": "22",
  "day": "02",
  "title": "AI 工程面试专项",
  "dayTitle": "最小实现",
  "dayGoal": "写一个能跑的薄切片，不追求大而全。",
  "phase": "求职作品集",
  "path": "/advanced/week-22/day-02",
  "lessonPath": "/advanced-track/lessons/week-22/day-02.md",
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

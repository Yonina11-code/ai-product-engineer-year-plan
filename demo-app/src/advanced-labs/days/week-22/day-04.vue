<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W22D04",
  "week": "22",
  "day": "04",
  "title": "AI 工程面试专项",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "求职作品集",
  "path": "/advanced/week-22/day-04",
  "lessonPath": "/advanced-track/lessons/week-22/day-04.md",
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

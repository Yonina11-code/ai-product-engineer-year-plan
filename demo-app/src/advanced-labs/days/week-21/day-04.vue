<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W21D04",
  "week": "21",
  "day": "04",
  "title": "作品集工程化整理",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "求职作品集",
  "path": "/advanced/week-21/day-04",
  "lessonPath": "/advanced-track/lessons/week-21/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-21.md",
  "mode": "portfolio",
  "build": "整理作品集首页：项目背景、架构图、关键代码、评测、成本、失败处理。",
  "skills": [
    "项目叙事",
    "架构表达",
    "指标展示",
    "技术取舍"
  ],
  "proof": [
    "作品集首页",
    "两张架构图",
    "三段核心代码说明"
  ],
  "interview": "把项目从“我做了功能”讲成“我解决了问题”。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

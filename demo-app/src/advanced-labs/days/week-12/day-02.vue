<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W12D02",
  "week": "12",
  "day": "02",
  "title": "项目二：前端接口契约 RAG 助手",
  "dayTitle": "最小实现",
  "dayGoal": "写一个能跑的薄切片，不追求大而全。",
  "phase": "项目二",
  "path": "/advanced/week-12/day-02",
  "lessonPath": "/advanced-track/lessons/week-12/day-02.md",
  "reviewPath": "/advanced-track/reviews/week-12.md",
  "mode": "rag",
  "build": "做一个接口契约助手：能查字段来源、类型、页面使用点；不确定时追问，不允许猜字段。",
  "skills": [
    "代码/文档知识库",
    "字段契约",
    "引用定位",
    "未知追问"
  ],
  "proof": [
    "可演示项目",
    "50 条评测",
    "字段引用截图"
  ],
  "interview": "这是你的核心求职项目：AI + 前端工程经验的结合。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

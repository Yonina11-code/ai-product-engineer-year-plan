<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W11D01",
  "week": "11",
  "day": "01",
  "title": "项目二：前端接口契约 RAG 助手",
  "dayTitle": "真实场景与边界",
  "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
  "phase": "阶段 2 项目验收",
  "path": "/advanced/week-11/day-01",
  "lessonPath": "/advanced-track/lessons/week-11/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-11.md",
  "mode": "rag",
  "build": "完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。",
  "skills": [
    "接口契约助手",
    "RAG 闭环",
    "字段来源",
    "引用定位",
    "未知追问"
  ],
  "proof": [
    "可演示 RAG 项目",
    "50 条评测报告",
    "字段引用截图与架构图"
  ],
  "interview": "这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

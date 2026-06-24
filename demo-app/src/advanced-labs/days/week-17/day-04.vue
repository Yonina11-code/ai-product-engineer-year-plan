<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W17D04",
  "week": "17",
  "day": "04",
  "title": "MCP + RAG + Tool 综合助手",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "MCP",
  "path": "/advanced/week-17/day-04",
  "lessonPath": "/advanced-track/lessons/week-17/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-17.md",
  "mode": "rag",
  "build": "让助手通过 MCP 查询契约、通过 RAG 找文档、通过工具生成开发清单。",
  "skills": [
    "MCP 集成",
    "RAG 引用",
    "多工具编排",
    "Trace"
  ],
  "proof": [
    "综合 Demo",
    "多工具 Trace",
    "失败样本"
  ],
  "interview": "讲清一个复杂 AI 功能的端到端架构。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

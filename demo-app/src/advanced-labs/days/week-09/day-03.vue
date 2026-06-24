<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W09D03",
  "week": "09",
  "day": "03",
  "title": "Query Rewrite、Rerank 与上下文选择",
  "dayTitle": "可靠性增强",
  "dayGoal": "补错误处理、结构校验、边界条件和可观测信息。",
  "phase": "RAG 工程",
  "path": "/advanced/week-09/day-03",
  "lessonPath": "/advanced-track/lessons/week-09/day-03.md",
  "reviewPath": "/advanced-track/reviews/week-09.md",
  "mode": "rag",
  "build": "实现 Query Rewrite、候选文档重排和上下文预算控制。",
  "skills": [
    "查询改写",
    "Rerank",
    "上下文预算",
    "多路召回合并"
  ],
  "proof": [
    "改写前后召回对比",
    "Rerank Trace",
    "上下文裁剪规则"
  ],
  "interview": "讲清如何提升 RAG 命中率而不是盲目加更多文档。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

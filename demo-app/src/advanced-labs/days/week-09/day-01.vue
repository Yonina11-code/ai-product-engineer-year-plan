<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W09D01",
  "week": "09",
  "day": "01",
  "title": "Query Rewrite、Rerank 与上下文选择",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "RAG 工程",
  "path": "/advanced/week-09/day-01",
  "lessonPath": "/advanced-track/lessons/week-09/day-01.md",
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

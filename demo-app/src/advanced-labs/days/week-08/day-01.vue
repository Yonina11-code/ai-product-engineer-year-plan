<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W08D01",
  "week": "08",
  "day": "01",
  "title": "Embedding、向量检索与混合召回",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "RAG 工程",
  "path": "/advanced/week-08/day-01",
  "lessonPath": "/advanced-track/lessons/week-08/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-08.md",
  "mode": "rag",
  "build": "实现关键词检索、向量检索和混合召回对比。",
  "skills": [
    "Embedding",
    "向量检索",
    "关键词召回",
    "Hybrid Search"
  ],
  "proof": [
    "三种召回结果对照",
    "10 条失败查询归因",
    "召回策略说明"
  ],
  "interview": "讲清什么时候向量检索不如关键词检索。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

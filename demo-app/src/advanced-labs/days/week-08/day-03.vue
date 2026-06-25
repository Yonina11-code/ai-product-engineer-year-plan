<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W08D03",
  "week": "08",
  "day": "03",
  "title": "检索实现：关键词、向量与混合召回",
  "dayTitle": "后端补点与可靠性",
  "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-08/day-03",
  "lessonPath": "/advanced-track/lessons/week-08/day-03.md",
  "reviewPath": "/advanced-track/reviews/week-08.md",
  "mode": "rag",
  "build": "实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。",
  "skills": [
    "Embedding",
    "Vector Search",
    "Keyword Search",
    "Hybrid Search",
    "检索调试"
  ],
  "proof": [
    "三种检索结果对比",
    "10 条失败查询归因",
    "检索调试页面截图"
  ],
  "interview": "我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

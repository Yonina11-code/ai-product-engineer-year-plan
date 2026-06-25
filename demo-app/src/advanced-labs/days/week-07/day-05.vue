<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W07D05",
  "week": "07",
  "day": "05",
  "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-07/day-05",
  "lessonPath": "/advanced-track/lessons/week-07/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-07.md",
  "mode": "rag",
  "build": "建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。",
  "skills": [
    "Document Ingestion",
    "Chunk",
    "Metadata",
    "Source Trace",
    "接口契约知识库"
  ],
  "proof": [
    "导入脚本",
    "chunk 样例",
    "metadata 字段说明"
  ],
  "interview": "RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

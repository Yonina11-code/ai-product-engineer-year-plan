<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W07D04",
  "week": "07",
  "day": "04",
  "title": "文档解析、Chunk 与 Metadata 设计",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "RAG 工程",
  "path": "/advanced/week-07/day-04",
  "lessonPath": "/advanced-track/lessons/week-07/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-07.md",
  "mode": "rag",
  "build": "建立小型知识库导入流程：解析文档、切 chunk、写 metadata、保留来源定位。",
  "skills": [
    "文档解析",
    "Chunk 策略",
    "Metadata",
    "来源追踪"
  ],
  "proof": [
    "导入脚本",
    "chunk 样例",
    "metadata 设计说明"
  ],
  "interview": "讲清 chunk 大小、重叠、来源字段为什么影响回答质量。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

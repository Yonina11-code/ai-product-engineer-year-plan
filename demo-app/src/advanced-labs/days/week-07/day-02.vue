<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W07D02",
  "week": "07",
  "day": "02",
  "title": "RAG 数据准备：文档解析、Chunk 与 Metadata",
  "dayTitle": "最小代码闭环",
  "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-07/day-02",
  "lessonPath": "/advanced-track/lessons/week-07/day-02.md",
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

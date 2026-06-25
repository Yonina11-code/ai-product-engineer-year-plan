<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W08D02",
  "week": "08",
  "day": "02",
  "title": "检索实现：关键词、向量与混合召回",
  "dayTitle": "最小代码闭环",
  "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-08/day-02",
  "lessonPath": "/advanced-track/lessons/week-08/day-02.md",
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

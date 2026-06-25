<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W16D04",
  "week": "16",
  "day": "04",
  "title": "项目三：MCP + RAG + Tool 综合接口助手",
  "dayTitle": "失败样本与评测",
  "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
  "phase": "阶段 3 项目验收",
  "path": "/advanced/week-16/day-04",
  "lessonPath": "/advanced-track/lessons/week-16/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-16.md",
  "mode": "rag",
  "build": "让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。",
  "skills": [
    "RAG + Tool",
    "受限 Agent",
    "MCP 封装",
    "Trace",
    "综合架构"
  ],
  "proof": [
    "综合 Demo",
    "多工具 Trace",
    "项目架构图与失败样本"
  ],
  "interview": "我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

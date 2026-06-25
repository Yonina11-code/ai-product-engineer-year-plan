<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W16D05",
  "week": "16",
  "day": "05",
  "title": "项目三：MCP + RAG + Tool 综合接口助手",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 3 项目验收",
  "path": "/advanced/week-16/day-05",
  "lessonPath": "/advanced-track/lessons/week-16/day-05.md",
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

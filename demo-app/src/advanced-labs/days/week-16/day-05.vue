<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W16D05",
  "week": "16",
  "day": "05",
  "title": "MCP Server：把现有能力封装给 AI 使用",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "MCP",
  "path": "/advanced/week-16/day-05",
  "lessonPath": "/advanced-track/lessons/week-16/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-16.md",
  "mode": "mcp",
  "build": "用 Node 写一个最小 MCP Server，封装一个只读接口契约查询工具。",
  "skills": [
    "MCP Tool",
    "MCP Resource",
    "Schema",
    "权限边界"
  ],
  "proof": [
    "最小 MCP Server",
    "工具调用截图",
    "错误参数拒绝记录"
  ],
  "interview": "讲清 MCP 和普通后端 API 的关系。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

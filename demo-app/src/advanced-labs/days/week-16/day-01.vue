<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W16D01",
  "week": "16",
  "day": "01",
  "title": "MCP Server：把现有能力封装给 AI 使用",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "MCP",
  "path": "/advanced/week-16/day-01",
  "lessonPath": "/advanced-track/lessons/week-16/day-01.md",
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

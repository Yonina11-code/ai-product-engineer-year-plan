<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W15D05",
  "week": "15",
  "day": "05",
  "title": "MCP Server：把你的工具标准化暴露给 AI",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 3：Tool / Agent / MCP",
  "path": "/advanced/week-15/day-05",
  "lessonPath": "/advanced-track/lessons/week-15/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-15.md",
  "mode": "agent",
  "build": "用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。",
  "skills": [
    "MCP Server",
    "Tool",
    "Resource",
    "Schema",
    "权限边界"
  ],
  "proof": [
    "最小 MCP Server 代码",
    "工具调用截图或日志",
    "非法参数拒绝记录"
  ],
  "interview": "MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

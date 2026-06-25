<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W15D02",
  "week": "15",
  "day": "02",
  "title": "MCP Server：把你的工具标准化暴露给 AI",
  "dayTitle": "最小代码闭环",
  "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
  "phase": "阶段 3：Tool / Agent / MCP",
  "path": "/advanced/week-15/day-02",
  "lessonPath": "/advanced-track/lessons/week-15/day-02.md",
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

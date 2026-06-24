<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W13D03",
  "week": "13",
  "day": "03",
  "title": "Tool Calling：只读工具、写工具与权限边界",
  "dayTitle": "可靠性增强",
  "dayGoal": "补错误处理、结构校验、边界条件和可观测信息。",
  "phase": "工具调用与 Agent",
  "path": "/advanced/week-13/day-03",
  "lessonPath": "/advanced-track/lessons/week-13/day-03.md",
  "reviewPath": "/advanced-track/reviews/week-13.md",
  "mode": "tool",
  "build": "实现查询类工具和写操作工具，加入参数校验、权限判断、用户确认。",
  "skills": [
    "Tool Schema",
    "参数校验",
    "只读/写操作",
    "用户确认"
  ],
  "proof": [
    "两个工具定义",
    "写操作确认流程",
    "异常参数测试"
  ],
  "interview": "讲清为什么不能相信模型生成的工具参数。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

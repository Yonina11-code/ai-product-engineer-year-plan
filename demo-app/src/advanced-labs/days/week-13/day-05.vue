<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W13D05",
  "week": "13",
  "day": "05",
  "title": "Tool Calling：只读工具、写工具与权限边界",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "工具调用与 Agent",
  "path": "/advanced/week-13/day-05",
  "lessonPath": "/advanced-track/lessons/week-13/day-05.md",
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

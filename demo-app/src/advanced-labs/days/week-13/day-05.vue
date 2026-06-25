<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W13D05",
  "week": "13",
  "day": "05",
  "title": "写操作边界：确认、幂等与审计",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 3：Tool / Agent / MCP",
  "path": "/advanced/week-13/day-05",
  "lessonPath": "/advanced-track/lessons/week-13/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-13.md",
  "mode": "tool",
  "build": "实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。",
  "skills": [
    "Write Tool",
    "Human Confirmation",
    "Idempotency",
    "Audit Log",
    "副作用边界"
  ],
  "proof": [
    "写操作确认流程截图",
    "重复提交防护日志",
    "审计日志样例"
  ],
  "interview": "我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

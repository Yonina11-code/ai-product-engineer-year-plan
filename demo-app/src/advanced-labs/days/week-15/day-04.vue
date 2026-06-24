<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W15D04",
  "week": "15",
  "day": "04",
  "title": "Agent 可靠性：幂等、重试、人工接管",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "工具调用与 Agent",
  "path": "/advanced/week-15/day-04",
  "lessonPath": "/advanced-track/lessons/week-15/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-15.md",
  "mode": "agent",
  "build": "给 Agent 加入幂等键、最大步数、失败重试、人工接管和操作审计。",
  "skills": [
    "幂等",
    "重试策略",
    "人工接管",
    "审计日志"
  ],
  "proof": [
    "重复提交防护",
    "失败恢复案例",
    "审计日志样例"
  ],
  "interview": "讲清你如何限制 Agent 的危险行为。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W14D03",
  "week": "14",
  "day": "03",
  "title": "Workflow vs Agent：什么时候不该用 Agent",
  "dayTitle": "后端补点与可靠性",
  "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
  "phase": "阶段 3：Tool / Agent / MCP",
  "path": "/advanced/week-14/day-03",
  "lessonPath": "/advanced-track/lessons/week-14/day-03.md",
  "reviewPath": "/advanced-track/reviews/week-14.md",
  "mode": "agent",
  "build": "同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。",
  "skills": [
    "Workflow",
    "Agent Loop",
    "State Machine",
    "Trace",
    "终止条件"
  ],
  "proof": [
    "两种实现对比",
    "Agent Trace 日志",
    "死循环防护案例"
  ],
  "interview": "我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

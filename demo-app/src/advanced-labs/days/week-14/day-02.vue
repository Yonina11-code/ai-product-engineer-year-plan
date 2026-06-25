<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W14D02",
  "week": "14",
  "day": "02",
  "title": "Workflow vs Agent：什么时候不该用 Agent",
  "dayTitle": "最小代码闭环",
  "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
  "phase": "阶段 3：Tool / Agent / MCP",
  "path": "/advanced/week-14/day-02",
  "lessonPath": "/advanced-track/lessons/week-14/day-02.md",
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

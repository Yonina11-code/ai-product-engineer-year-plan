<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W14D05",
  "week": "14",
  "day": "05",
  "title": "Workflow vs Agent：状态机、Trace 与终止条件",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "工具调用与 Agent",
  "path": "/advanced/week-14/day-05",
  "lessonPath": "/advanced-track/lessons/week-14/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-14.md",
  "mode": "agent",
  "build": "同一个任务分别实现 Workflow 和 Agent 版本，对比可测试性和失败边界。",
  "skills": [
    "Workflow",
    "Agent Loop",
    "Trace",
    "终止条件"
  ],
  "proof": [
    "两种实现对比",
    "Trace 日志",
    "死循环防护"
  ],
  "interview": "讲清 Agent 不是越自由越好。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

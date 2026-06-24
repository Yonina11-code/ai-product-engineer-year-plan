<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W06D05",
  "week": "06",
  "day": "05",
  "title": "项目一：AI 职场沟通助手工程化重做",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "项目一",
  "path": "/advanced/week-06/day-05",
  "lessonPath": "/advanced-track/lessons/week-06/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-06.md",
  "mode": "engineering",
  "build": "完成职场沟通助手 MVP：真实模型、结构化输出、评测集、复制结果、失败降级。",
  "skills": [
    "端到端闭环",
    "真实用户输入",
    "可复制输出",
    "失败兜底"
  ],
  "proof": [
    "在线或本地演示",
    "30 条评测结果",
    "成本和延迟记录"
  ],
  "interview": "把这个项目讲成“我如何把不稳定模型变成可用产品功能”。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

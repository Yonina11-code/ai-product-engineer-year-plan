<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W23D05",
  "week": "23",
  "day": "05",
  "title": "简历、岗位匹配与投递材料",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "求职作品集",
  "path": "/advanced/week-23/day-05",
  "lessonPath": "/advanced-track/lessons/week-23/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-23.md",
  "mode": "portfolio",
  "build": "改造简历项目描述，准备 AI Product Engineer / AI Engineer 两版表达。",
  "skills": [
    "简历表达",
    "JD 匹配",
    "项目量化",
    "能力定位"
  ],
  "proof": [
    "两版简历项目描述",
    "10 个岗位 JD 拆解",
    "投递优先级表"
  ],
  "interview": "讲清你从前端转 AI 的独特优势。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W05D03",
  "week": "05",
  "day": "03",
  "title": "评测集、回归测试与质量门禁",
  "dayTitle": "可靠性增强",
  "dayGoal": "补错误处理、结构校验、边界条件和可观测信息。",
  "phase": "AI 应用工程底座",
  "path": "/advanced/week-05/day-03",
  "lessonPath": "/advanced-track/lessons/week-05/day-03.md",
  "reviewPath": "/advanced-track/reviews/week-05.md",
  "mode": "eval",
  "build": "为一个 AI 功能建立 30 条评测集，跑自动评分和人工复核记录。",
  "skills": [
    "Eval Dataset",
    "规则评分",
    "人工复核",
    "CI 质量门禁"
  ],
  "proof": [
    "30 条评测样本",
    "评分脚本",
    "一次回归报告"
  ],
  "interview": "讲清你怎么证明一次 Prompt 或模型升级没有把功能改坏。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

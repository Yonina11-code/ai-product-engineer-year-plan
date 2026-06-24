<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W11D01",
  "week": "11",
  "day": "01",
  "title": "RAG 评测：命中率、正确性与引用质量",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "RAG 工程",
  "path": "/advanced/week-11/day-01",
  "lessonPath": "/advanced-track/lessons/week-11/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-11.md",
  "mode": "eval",
  "build": "构造 50 条 RAG 评测集，区分检索失败、生成失败和数据缺失。",
  "skills": [
    "Retrieval Eval",
    "Answer Eval",
    "Citation Eval",
    "失败归因"
  ],
  "proof": [
    "50 条评测集",
    "失败分类表",
    "优化前后指标"
  ],
  "interview": "用指标讲 RAG 项目，而不是用“效果还不错”讲。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

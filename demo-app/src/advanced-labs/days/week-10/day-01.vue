<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W10D01",
  "week": "10",
  "day": "01",
  "title": "引用、拒答与可信回答",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "RAG 工程",
  "path": "/advanced/week-10/day-01",
  "lessonPath": "/advanced-track/lessons/week-10/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-10.md",
  "mode": "rag",
  "build": "让回答必须带来源引用；证据不足时拒答；冲突证据时提示不确定。",
  "skills": [
    "Grounded Answer",
    "Citation",
    "Refusal",
    "冲突证据处理"
  ],
  "proof": [
    "有引用回答",
    "拒答案例",
    "冲突证据案例"
  ],
  "interview": "讲清“有检索结果”不等于“可以回答”。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

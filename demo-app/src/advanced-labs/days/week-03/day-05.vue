<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W03D05",
  "week": "03",
  "day": "05",
  "title": "结构化输出、Schema 与自动修复",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "沉淀架构图、代码证据、指标和三分钟讲法。",
  "phase": "AI 应用工程底座",
  "path": "/advanced/week-03/day-05",
  "lessonPath": "/advanced-track/lessons/week-03/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-03.md",
  "mode": "schema",
  "build": "设计 JSON 输出契约、运行时校验、失败重试和一次自动修复流程。",
  "skills": [
    "JSON Schema",
    "运行时校验",
    "Repair Prompt",
    "业务字段契约"
  ],
  "proof": [
    "Schema 文件",
    "10 条格式失败样本",
    "修复前后对照"
  ],
  "interview": "讲清格式正确、内容合格、业务成功三者不是一回事。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

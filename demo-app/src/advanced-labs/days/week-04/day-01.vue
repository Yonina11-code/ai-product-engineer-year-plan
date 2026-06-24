<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W04D01",
  "week": "04",
  "day": "01",
  "title": "Prompt Registry、版本管理与灰度",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "AI 应用工程底座",
  "path": "/advanced/week-04/day-01",
  "lessonPath": "/advanced-track/lessons/week-04/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-04.md",
  "mode": "prompt-registry",
  "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本、变更原因和回滚策略。",
  "skills": [
    "Prompt 版本",
    "任务路由",
    "配置与代码分离",
    "灰度/回滚"
  ],
  "proof": [
    "Prompt Registry 代码",
    "版本变更记录",
    "一次回归对比"
  ],
  "interview": "讲清为什么 Prompt 不是散落在代码里的字符串。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

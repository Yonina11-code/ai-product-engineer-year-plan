<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W04D05",
  "week": "04",
  "day": "05",
  "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 1：AI 应用工程底座",
  "path": "/advanced/week-04/day-05",
  "lessonPath": "/advanced-track/lessons/week-04/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-04.md",
  "mode": "prompt-registry",
  "build": "实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。",
  "skills": [
    "Prompt Registry",
    "Prompt Version",
    "Eval Dataset",
    "回归测试",
    "灰度 / 回滚"
  ],
  "proof": [
    "Prompt Registry 代码",
    "30 条评测样本",
    "v1 / v2 回归对比表"
  ],
  "interview": "Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W04D03",
  "week": "04",
  "day": "03",
  "title": "Prompt Registry 与评测：不要把 Prompt 写成散落字符串",
  "dayTitle": "后端补点与可靠性",
  "dayGoal": "补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。",
  "phase": "阶段 1：AI 应用工程底座",
  "path": "/advanced/week-04/day-03",
  "lessonPath": "/advanced-track/lessons/week-04/day-03.md",
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

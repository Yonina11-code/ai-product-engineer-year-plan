<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W03D05",
  "week": "03",
  "day": "05",
  "title": "结构化输出：让模型结果能进入业务系统",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 1：AI 应用工程底座",
  "path": "/advanced/week-03/day-05",
  "lessonPath": "/advanced-track/lessons/week-03/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-03.md",
  "mode": "schema",
  "build": "为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。",
  "skills": [
    "结构化输出",
    "Schema 校验",
    "Repair Prompt",
    "业务字段契约",
    "降级策略"
  ],
  "proof": [
    "Schema 文件或类型定义",
    "10 条格式失败样本",
    "修复前后对照日志"
  ],
  "interview": "我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

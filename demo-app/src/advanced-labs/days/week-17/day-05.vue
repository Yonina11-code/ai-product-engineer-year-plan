<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W17D05",
  "week": "17",
  "day": "05",
  "title": "AI 产品边界：睡眠 / 情绪助手为什么难",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 4：产品化与安全",
  "path": "/advanced/week-17/day-05",
  "lessonPath": "/advanced-track/lessons/week-17/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-17.md",
  "mode": "product",
  "build": "设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。",
  "skills": [
    "AI Product Boundary",
    "Safety Policy",
    "Crisis Escalation",
    "隐私最小化",
    "非医疗建议"
  ],
  "proof": [
    "产品边界文档",
    "高风险样本测试",
    "安全提示截图"
  ],
  "interview": "我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

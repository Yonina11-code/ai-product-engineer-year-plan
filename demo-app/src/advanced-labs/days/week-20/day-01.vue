<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W20D01",
  "week": "20",
  "day": "01",
  "title": "项目三：AI 睡眠/情绪教练 MVP",
  "dayTitle": "架构判断",
  "dayGoal": "读代码、画边界、明确这项能力解决什么工程问题。",
  "phase": "项目三",
  "path": "/advanced/week-20/day-01",
  "lessonPath": "/advanced-track/lessons/week-20/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-20.md",
  "mode": "product",
  "build": "完成一个非医疗化建议助手：日志录入、周总结、建议生成、安全提示。",
  "skills": [
    "产品定义",
    "个性化上下文",
    "非医疗边界",
    "用户反馈"
  ],
  "proof": [
    "可演示 MVP",
    "10 条用户反馈",
    "安全样本测试"
  ],
  "interview": "讲清你怎么判断一个 AI 产品是否真的需要 AI。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

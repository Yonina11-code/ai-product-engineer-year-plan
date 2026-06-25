<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W05D04",
  "week": "05",
  "day": "04",
  "title": "会话、日志、成本：AI 功能上线前必须补的后端基础",
  "dayTitle": "失败样本与评测",
  "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
  "phase": "阶段 1：AI 应用工程底座",
  "path": "/advanced/week-05/day-04",
  "lessonPath": "/advanced-track/lessons/week-05/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-05.md",
  "mode": "observability",
  "build": "为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。",
  "skills": [
    "调用日志",
    "Token Usage",
    "Cost Tracking",
    "脱敏",
    "问题复盘"
  ],
  "proof": [
    "调用日志样例",
    "一次失败 requestId 追踪记录",
    "成本 / 延迟统计截图或表格"
  ],
  "interview": "我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

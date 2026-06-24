<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W19D02",
  "week": "19",
  "day": "02",
  "title": "安全、隐私与高风险边界",
  "dayTitle": "最小实现",
  "dayGoal": "写一个能跑的薄切片，不追求大而全。",
  "phase": "产品化与上线",
  "path": "/advanced/week-19/day-02",
  "lessonPath": "/advanced-track/lessons/week-19/day-02.md",
  "reviewPath": "/advanced-track/reviews/week-19.md",
  "mode": "product",
  "build": "为一个助手设计敏感数据最小化、危机场景升级、免责声明和拒答策略。",
  "skills": [
    "数据最小化",
    "安全策略",
    "危机升级",
    "隐私删除"
  ],
  "proof": [
    "安全边界文档",
    "高风险样本测试",
    "拒答截图"
  ],
  "interview": "讲清你如何避免 AI 产品伤害用户或制造合规风险。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

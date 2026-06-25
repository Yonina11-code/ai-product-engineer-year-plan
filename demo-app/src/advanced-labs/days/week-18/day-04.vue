<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W18D04",
  "week": "18",
  "day": "04",
  "title": "项目四：AI 睡眠 / 情绪教练 MVP",
  "dayTitle": "失败样本与评测",
  "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
  "phase": "阶段 4 项目验收",
  "path": "/advanced/week-18/day-04",
  "lessonPath": "/advanced-track/lessons/week-18/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-18.md",
  "mode": "product",
  "build": "完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。",
  "skills": [
    "AI Product MVP",
    "个性化上下文",
    "用户反馈",
    "安全边界",
    "产品验证"
  ],
  "proof": [
    "可演示 MVP",
    "10 条用户反馈样本",
    "安全与失败测试报告"
  ],
  "interview": "这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

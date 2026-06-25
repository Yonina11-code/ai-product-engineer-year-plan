<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W10D01",
  "week": "10",
  "day": "01",
  "title": "RAG 评测：把“效果还行”变成指标",
  "dayTitle": "真实场景与边界",
  "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-10/day-01",
  "lessonPath": "/advanced-track/lessons/week-10/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-10.md",
  "mode": "eval",
  "build": "准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。",
  "skills": [
    "Retrieval Eval",
    "Answer Eval",
    "Citation Eval",
    "Failure Taxonomy",
    "回归指标"
  ],
  "proof": [
    "50 条 RAG 评测集",
    "失败分类表",
    "优化前后指标"
  ],
  "interview": "我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

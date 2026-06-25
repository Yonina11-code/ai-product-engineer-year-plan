<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W10D02",
  "week": "10",
  "day": "02",
  "title": "RAG 评测：把“效果还行”变成指标",
  "dayTitle": "最小代码闭环",
  "dayGoal": "只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-10/day-02",
  "lessonPath": "/advanced-track/lessons/week-10/day-02.md",
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

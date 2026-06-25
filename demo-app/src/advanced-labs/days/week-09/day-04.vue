<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W09D04",
  "week": "09",
  "day": "04",
  "title": "可信回答：引用、拒答与冲突证据",
  "dayTitle": "失败样本与评测",
  "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-09/day-04",
  "lessonPath": "/advanced-track/lessons/week-09/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-09.md",
  "mode": "rag",
  "build": "让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。",
  "skills": [
    "Grounded Answer",
    "Citation",
    "Refusal",
    "Conflict Handling",
    "字段不猜测"
  ],
  "proof": [
    "有引用回答案例",
    "拒答案例",
    "冲突证据案例"
  ],
  "interview": "我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W09D05",
  "week": "09",
  "day": "05",
  "title": "可信回答：引用、拒答与冲突证据",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 2：RAG 工程",
  "path": "/advanced/week-09/day-05",
  "lessonPath": "/advanced-track/lessons/week-09/day-05.md",
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

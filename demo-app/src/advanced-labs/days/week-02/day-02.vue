<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W02D02",
  "week": "02",
  "day": "02",
  "title": "Streaming、取消生成与体验状态机",
  "dayTitle": "最小实现",
  "dayGoal": "写一个能跑的薄切片，不追求大而全。",
  "phase": "AI 应用工程底座",
  "path": "/advanced/week-02/day-02",
  "lessonPath": "/advanced-track/lessons/week-02/day-02.md",
  "reviewPath": "/advanced-track/reviews/week-02.md",
  "mode": "streaming",
  "build": "实现 SSE 流式输出、取消生成、重新生成和前端状态机。",
  "skills": [
    "SSE",
    "AbortController",
    "首字延迟",
    "加载/取消/失败状态"
  ],
  "proof": [
    "流式输出 Demo",
    "取消生成截图",
    "状态机说明"
  ],
  "interview": "讲清 AI 响应慢时，前端怎样设计体验，而不是只加 loading。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

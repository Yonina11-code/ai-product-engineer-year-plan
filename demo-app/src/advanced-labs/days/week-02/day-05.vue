<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W02D05",
  "week": "02",
  "day": "05",
  "title": "Streaming：AI 响应慢时前端体验怎么做",
  "dayTitle": "作品集与面试表达",
  "dayGoal": "整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。",
  "phase": "阶段 1：AI 应用工程底座",
  "path": "/advanced/week-02/day-05",
  "lessonPath": "/advanced-track/lessons/week-02/day-05.md",
  "reviewPath": "/advanced-track/reviews/week-02.md",
  "mode": "streaming",
  "build": "把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。",
  "skills": [
    "SSE",
    "流式输出",
    "取消生成",
    "前端状态机",
    "首字延迟"
  ],
  "proof": [
    "流式输出录屏或截图",
    "取消生成的 Network / 日志证据",
    "状态机图：idle -> streaming -> done / cancelled / failed"
  ],
  "interview": "AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

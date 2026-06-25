<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W02D04",
  "week": "02",
  "day": "04",
  "title": "Streaming：AI 响应慢时前端体验怎么做",
  "dayTitle": "失败样本与评测",
  "dayGoal": "不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。",
  "phase": "阶段 1：AI 应用工程底座",
  "path": "/advanced/week-02/day-04",
  "lessonPath": "/advanced-track/lessons/week-02/day-04.md",
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

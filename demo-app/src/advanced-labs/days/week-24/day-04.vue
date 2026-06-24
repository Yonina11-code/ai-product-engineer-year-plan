<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W24D04",
  "week": "24",
  "day": "04",
  "title": "最终答辩与下一阶段计划",
  "dayTitle": "评测与失败分析",
  "dayGoal": "构造样本集，记录失败原因，避免只看成功演示。",
  "phase": "毕业验收",
  "path": "/advanced/week-24/day-04",
  "lessonPath": "/advanced-track/lessons/week-24/day-04.md",
  "reviewPath": "/advanced-track/reviews/week-24.md",
  "mode": "portfolio",
  "build": "完成一次 45 分钟项目答辩：架构、代码、评测、产品、失败和下一步。",
  "skills": [
    "答辩",
    "综合复盘",
    "能力矩阵",
    "下一阶段规划"
  ],
  "proof": [
    "答辩稿",
    "能力矩阵",
    "下一阶段学习计划"
  ],
  "interview": "这是把你送进面试状态的最后验收。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = {
  "id": "W12D01",
  "week": "12",
  "day": "01",
  "title": "Tool Calling：模型建议，程序裁决",
  "dayTitle": "真实场景与边界",
  "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
  "phase": "阶段 3：Tool / Agent / MCP",
  "path": "/advanced/week-12/day-01",
  "lessonPath": "/advanced-track/lessons/week-12/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-12.md",
  "mode": "tool",
  "build": "给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。",
  "skills": [
    "Tool Calling",
    "Tool Schema",
    "参数校验",
    "只读工具",
    "Trace"
  ],
  "proof": [
    "两个工具定义",
    "异常参数拒绝记录",
    "工具调用 Trace 截图"
  ],
  "interview": "我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。"
}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>

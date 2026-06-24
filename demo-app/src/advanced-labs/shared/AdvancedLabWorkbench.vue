<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { AdvancedLabDefinition } from '../registry'

interface TraceItem {
  step: string
  status: 'success' | 'warning' | 'blocked'
  detail: string
}

const props = defineProps<{
  lab: AdvancedLabDefinition
}>()

const input = ref('')
const secondaryInput = ref('')
const strictMode = ref(true)
const output = ref('')
const trace = ref<TraceItem[]>([])

const modeName = computed(() => {
  const names: Record<string, string> = {
    gateway: 'AI Gateway 工程台',
    streaming: 'Streaming 体验台',
    schema: '结构化输出实验台',
    'prompt-registry': 'Prompt Registry 实验台',
    eval: '评测与质量门禁实验台',
    rag: 'RAG 工程实验台',
    tool: 'Tool Calling 权限实验台',
    agent: 'Agent Trace 实验台',
    mcp: 'MCP Server 实验台',
    observability: '可观测性实验台',
    product: '产品安全边界实验台',
    portfolio: '作品集面试实验台',
    engineering: 'AI 工程实验台',
  }
  return names[props.lab.mode]
})

const inputLabel = computed(() => {
  const labels: Record<string, string> = {
    gateway: '模型调用场景',
    streaming: '用户生成请求',
    schema: '模型原始输出',
    'prompt-registry': '任务类型与变更说明',
    eval: '待评测样本或输出',
    rag: '用户问题或文档片段',
    tool: '用户想执行的任务',
    agent: 'Agent 目标',
    mcp: 'MCP 工具参数',
    observability: '线上异常现象',
    product: '用户场景和风险',
    portfolio: '项目经历描述',
    engineering: '工程问题描述',
  }
  return labels[props.lab.mode]
})

const placeholder = computed(() => {
  const values: Record<string, string> = {
    gateway: '例如：用户请求 DeepSeek 改写一句工作消息，要求 8 秒超时、失败可降级。',
    streaming: '例如：生成一段较长建议，用户可能中途取消。',
    schema: '{"rewrittenText":"","reason":"缺少原文"}',
    'prompt-registry': '例如：workplace_rewrite v2 增加“不承诺排期”约束。',
    eval: '例如：我们保证下周一上线新方案。',
    rag: '例如：v2 用户详情接口的姓名字段是什么？',
    tool: '例如：提交删除用户 1001 的请求。',
    agent: '例如：根据接口契约生成开发清单，并标出未知字段。',
    mcp: '{"fieldName":"userName","version":"v2"}',
    observability: '例如：P95 延迟从 3 秒涨到 11 秒，错误率 8%。',
    product: '例如：用户连续失眠并询问是否需要吃药。',
    portfolio: '例如：我做了一个 RAG 助手，可以查询接口字段。',
    engineering: '描述今天要验证的 AI 工程问题。',
  }
  return values[props.lab.mode]
})

function push(step: string, status: TraceItem['status'], detail: string) {
  trace.value.push({ step, status, detail })
}

function runGateway() {
  push(
    'Provider 选择',
    'success',
    strictMode.value ? '优先真实模型，失败降级 mock' : '只走当前 provider',
  )
  push('敏感配置', 'success', 'API Key 只在服务端读取，前端不能看到')
  push(
    '超时边界',
    input.value.includes('超时') ? 'warning' : 'success',
    '需要设置请求超时、错误归类和用户可见提示',
  )
  output.value =
    'Gateway 的价值不是把 fetch 包一层，而是统一模型供应商、错误、日志、成本和降级策略。'
}

function runStreaming() {
  push('首字延迟', 'success', '先显示流式状态，而不是等待完整回答')
  push(
    '取消生成',
    input.value.includes('取消') ? 'success' : 'warning',
    '需要 AbortController 或等价取消机制',
  )
  push('状态机', 'success', 'idle → streaming → done / cancelled / failed')
  output.value =
    'Streaming Demo 要证明体验状态可控：可取消、可重试、失败不丢用户输入。'
}

function runSchema() {
  try {
    const parsed = JSON.parse(input.value || '{}')
    const hasText =
      typeof parsed?.rewrittenText === 'string' && parsed.rewrittenText.trim()
    push('JSON 语法', 'success', '可以解析')
    push(
      '业务字段',
      hasText ? 'success' : 'blocked',
      hasText ? 'rewrittenText 有效' : '缺少有效 rewrittenText',
    )
    output.value = hasText
      ? '格式校验通过，下一步仍要做内容质量校验。'
      : '模型有返回但业务失败，应触发修复或降级。'
  } catch {
    push('JSON 语法', 'blocked', '无法解析模型输出')
    output.value = '这类失败不能直接交给前端渲染，要在服务端拦截。'
  }
}

function runPromptRegistry() {
  const hasVersion = /v\d+/i.test(input.value)
  push(
    '任务路由',
    input.value.includes('task') || input.value.includes('任务')
      ? 'success'
      : 'warning',
    '需要按 taskType 选择模板',
  )
  push(
    '版本记录',
    hasVersion ? 'success' : 'warning',
    'Prompt 变更必须记录版本和原因',
  )
  push('回归影响', 'success', '每次变更都应跑评测集')
  output.value =
    'Prompt Registry 解决的是可维护性、回滚和质量门禁，不是让 Prompt 写得更玄学。'
}

function runEval() {
  const risky = /(保证|一定|下周|本周五|诊断|删除)/.test(input.value)
  push('正常样本', input.value.trim() ? 'success' : 'warning', '至少要覆盖真实输入')
  push(
    '风险样本',
    risky ? 'blocked' : 'success',
    risky ? '命中高风险词，需要人工复核或拒绝' : '当前未命中简单风险词',
  )
  push('回归门禁', 'success', '升级模型或 Prompt 前后要对比指标')
  output.value = '评测集的作用是把“感觉不错”变成可回归证据。'
}

function runRag() {
  const asksUnknown = /(字段|接口|来源|引用)/.test(input.value)
  push(
    '检索问题',
    input.value.trim() ? 'success' : 'warning',
    '用户问题需要被转换为可检索查询',
  )
  push(
    '证据来源',
    asksUnknown ? 'success' : 'warning',
    '答案必须绑定 chunk、文档和位置',
  )
  push(
    '拒答条件',
    strictMode.value ? 'success' : 'warning',
    '证据不足时拒答，不让模型补字段',
  )
  output.value = 'RAG Demo 要看检索证据、引用和拒答，而不是只看回答像不像。'
}

function runTool() {
  const write = /(提交|删除|修改|创建|发送)/.test(input.value)
  push('工具选择', 'success', write ? '写操作工具' : '只读查询工具')
  push('参数校验', input.value.trim() ? 'success' : 'blocked', '模型参数不能直接信任')
  push(
    '用户确认',
    write ? 'blocked' : 'success',
    write ? '写操作必须二次确认' : '只读操作不需要额外确认',
  )
  output.value = write
    ? '工具调用被拦截：有副作用操作必须由程序和用户确认兜底。'
    : '只读工具可以执行，但仍要记录 Trace 和权限边界。'
}

function runAgent() {
  push('任务拆解', 'success', '理解目标 → 选择工具 → 执行 → 检查证据 → 输出')
  push(
    '终止条件',
    strictMode.value ? 'success' : 'warning',
    '需要 maxSteps、成功条件和失败条件',
  )
  push('Trace', 'success', '每一步都要留下输入、工具、结果和判断')
  output.value = 'Agent 的核心不是自由，而是可观察、可终止、可回放。'
}

function runMcp() {
  try {
    const parsed = JSON.parse(input.value || '{}')
    push(
      'Schema',
      typeof parsed === 'object' ? 'success' : 'blocked',
      'MCP Tool 参数必须先过 Schema',
    )
    push('Server 边界', 'success', '模型只能请求调用，真正权限在 Server')
    push(
      '资源暴露',
      strictMode.value ? 'success' : 'warning',
      '只暴露任务需要的最小资源',
    )
    output.value =
      'MCP Demo 要证明工具契约、权限和资源边界，而不是只展示能连上。'
  } catch {
    push('Schema', 'blocked', '参数不是有效 JSON')
    output.value = 'MCP Server 应拒绝非法参数，真实业务函数不能执行。'
  }
}

function runObservability() {
  push(
    '延迟',
    /(P95|秒|延迟)/i.test(input.value) ? 'warning' : 'success',
    '记录首字延迟、总耗时和超时率',
  )
  push('成本', 'success', '记录 token usage 与 provider')
  push('质量抽样', 'success', '线上不能只看 200 状态码，还要看内容质量')
  output.value = 'AI 可观测性要同时看性能、成本、错误和质量。'
}

function runProduct() {
  const highRisk = /(药|诊断|自杀|伤害|治疗|抑郁)/.test(input.value)
  push('用户问题', input.value.trim() ? 'success' : 'warning', '需要明确目标用户和场景')
  push(
    'AI 必要性',
    secondaryInput.value.trim() ? 'success' : 'warning',
    '说明为什么规则或普通表单不够',
  )
  push(
    '风险边界',
    highRisk ? 'blocked' : 'success',
    highRisk ? '触发高风险边界，需要专业建议或拒答' : '当前未命中高风险词',
  )
  output.value = '偏产品项目要证明你能定义边界，不只是生成温柔文案。'
}

function runPortfolio() {
  const signals = ['问题', '架构', '评测', '失败', '成本', '结果']
  const found = signals.filter((signal) => input.value.includes(signal))
  for (const signal of signals) {
    push(
      signal,
      found.includes(signal) ? 'success' : 'warning',
      found.includes(signal) ? '已有证据' : '建议补充',
    )
  }
  output.value = `作品集完整度：${Math.round(
    (found.length / signals.length) * 100,
  )}%。面试材料要用证据讲，不堆技术名词。`
}

function runDemo() {
  trace.value = []
  output.value = ''
  const runners: Record<string, () => void> = {
    gateway: runGateway,
    streaming: runStreaming,
    schema: runSchema,
    'prompt-registry': runPromptRegistry,
    eval: runEval,
    rag: runRag,
    tool: runTool,
    agent: runAgent,
    mcp: runMcp,
    observability: runObservability,
    product: runProduct,
    portfolio: runPortfolio,
    engineering: runGateway,
  }
  ;(runners[props.lab.mode] ?? runGateway)()
}
</script>

<template>
  <section class="advanced-lab">
    <RouterLink class="back-link" to="/">← 返回高级 Demo 列表</RouterLink>

    <header class="advanced-hero">
      <div>
        <p class="eyebrow">
          W{{ lab.week }} · Day {{ lab.day }} · {{ lab.phase }}
        </p>
        <h1>{{ lab.title }}</h1>
        <p>{{ lab.dayTitle }}：{{ lab.dayGoal }}</p>
      </div>
      <div class="mode-badge">{{ modeName }}</div>
    </header>

    <div class="skill-list">
      <span v-for="skill in lab.skills" :key="skill">{{ skill }}</span>
    </div>

    <div class="advanced-workbench">
      <section class="advanced-control">
        <h2>本日 Demo 输入</h2>

        <label>
          <span>{{ inputLabel }}</span>
          <textarea v-model="input" rows="6" :placeholder="placeholder" />
        </label>

        <label v-if="lab.mode === 'product'" class="extra-field">
          <span>为什么 AI 是必要的？</span>
          <textarea
            v-model="secondaryInput"
            rows="3"
            placeholder="说明普通规则、表单或人工流程为什么不足"
          />
        </label>

        <label class="inline-control">
          <input v-model="strictMode" type="checkbox" />
          <span>启用严格工程边界</span>
        </label>

        <button type="button" @click="runDemo">
          运行 W{{ lab.week }} D{{ lab.day }} Demo
        </button>
      </section>

      <aside class="advanced-task">
        <h2>今天要证明什么</h2>
        <p>{{ lab.build }}</p>
        <h3>课程文件</h3>
        <p>{{ lab.lessonPath }}</p>
        <h3>复盘文件</h3>
        <p>{{ lab.reviewPath }}</p>
        <h3>本周证据</h3>
        <ul>
          <li v-for="item in lab.proof" :key="item">{{ item }}</li>
        </ul>
        <h3>面试表达</h3>
        <p>{{ lab.interview }}</p>
      </aside>
    </div>

    <section v-if="trace.length || output" class="advanced-result">
      <h2>运行证据</h2>
      <div class="trace-grid">
        <article
          v-for="item in trace"
          :key="`${item.step}-${item.detail}`"
          class="trace-card"
          :class="item.status"
        >
          <strong>{{ item.step }}</strong>
          <p>{{ item.detail }}</p>
        </article>
      </div>
      <div v-if="output" class="output-box">
        <strong>工程结论</strong>
        <p>{{ output }}</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.advanced-lab {
  display: grid;
  gap: 24px;
}

.back-link {
  width: fit-content;
  color: #5265d8;
  text-decoration: none;
}

.advanced-hero {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
}

.advanced-hero > div:first-child {
  max-width: 820px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #5769d8;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  font-size: clamp(30px, 5vw, 46px);
}

.advanced-hero p:last-child {
  color: #657086;
  line-height: 1.7;
}

.mode-badge {
  flex: none;
  padding: 10px 14px;
  border-radius: 999px;
  color: #4354c6;
  background: #edf0ff;
  font-weight: 800;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-list span {
  padding: 6px 10px;
  border-radius: 8px;
  color: #59647a;
  background: #fff;
  font-size: 13px;
}

.advanced-workbench {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 20px;
  align-items: start;
}

.advanced-control,
.advanced-task,
.advanced-result {
  padding: 24px;
  border: 1px solid #e2e6ef;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(30, 46, 80, 0.06);
}

.advanced-control {
  display: grid;
  gap: 20px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #cfd5e2;
  border-radius: 10px;
  resize: vertical;
  font: inherit;
  line-height: 1.6;
}

.inline-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.inline-control input {
  width: 18px;
  height: 18px;
}

button {
  border: 0;
  border-radius: 10px;
  padding: 13px 18px;
  color: #fff;
  background: #5365d8;
  cursor: pointer;
  font: inherit;
  font-weight: 800;
}

.advanced-task {
  position: sticky;
  top: 92px;
}

.advanced-task h3 {
  margin: 22px 0 8px;
}

.advanced-task p,
.advanced-task li {
  color: #657086;
  line-height: 1.7;
}

.trace-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.trace-card {
  padding: 16px;
  border: 1px solid #e1e5ee;
  border-radius: 12px;
  background: #f8f9fc;
}

.trace-card p {
  margin-bottom: 0;
  color: #657086;
  line-height: 1.6;
}

.trace-card.success {
  border-color: #bfe6d2;
  background: #f1fbf6;
}

.trace-card.warning {
  border-color: #f0d4a9;
  background: #fff8ed;
}

.trace-card.blocked {
  border-color: #f0bdc3;
  background: #fff3f4;
}

.output-box {
  margin-top: 16px;
  padding: 18px;
  border-radius: 12px;
  background: #edf0ff;
}

.output-box p {
  margin-bottom: 0;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .advanced-workbench {
    grid-template-columns: 1fr;
  }

  .advanced-task {
    position: static;
  }
}

@media (max-width: 640px) {
  .advanced-hero {
    align-items: start;
    flex-direction: column;
  }
}
</style>

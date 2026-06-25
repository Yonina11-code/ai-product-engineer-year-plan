<script setup lang="ts">
import { ref } from 'vue'

type TraceStatus = 'success' | 'warning' | 'blocked'

interface TraceItem {
  step: string
  status: TraceStatus
  detail: string
}

const lab = {
  "id": "W20D01",
  "week": "20",
  "day": "01",
  "title": "作品集、简历与 45 分钟项目答辩",
  "dayTitle": "真实场景与边界",
  "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
  "phase": "阶段 5：求职验收",
  "path": "/advanced/week-20/day-01",
  "apiPath": "/api/advanced/week-20/day-01",
  "lessonPath": "/advanced-track/lessons/week-20/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-20.md",
  "mode": "portfolio",
  "build": "整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。",
  "skills": [
    "Portfolio",
    "Resume",
    "Interview",
    "Architecture Storytelling",
    "项目答辩"
  ],
  "proof": [
    "作品集首页",
    "两版简历项目描述",
    "45 分钟模拟答辩稿"
  ],
  "interview": "我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。",
  "flowSteps": [
    "从真实问题开始：最终目标是换工作，所以你要把项目包装成招聘方能判断能力的证据，而不是一堆学习笔记。",
    "确认前端入口：作品集页面本身也要体现前端能力：结构清楚、交互顺、证据可点开。",
    "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
    "打开本日课程文件：advanced-track/lessons/week-20/day-01.md。",
    "本日不急着写完整功能，先确认这条链路为什么必须存在。",
    "重点看证据是否能被面试官快速检查。"
  ],
  "codeFiles": [
    "demo-app/src/advanced-labs/days/week-20/day-01.vue",
    "demo-app/server/advanced-labs/week-20/day-01.js",
    "portfolio/",
    "advanced-track/reviews/",
    "README.md"
  ],
  "backendFocus": [
    "项目 README 标准",
    "架构图表达",
    "指标展示",
    "面试追问准备",
    "技术取舍复盘"
  ],
  "acceptanceChecks": [
    "页面能说明今天的代码流程，而不是只展示概念。",
    "能指出至少一个服务端边界。",
    "能画出边界图。",
    "能说清今天为什么不是纯前端功能。",
    "本周证据至少推进一项：作品集首页"
  ]
}

const input = ref('')
const secondaryInput = ref('')
const strictMode = ref(true)
const output = ref('')
const trace = ref<TraceItem[]>([])
const isRunning = ref(false)
const errorMessage = ref('')

const modeNames: Record<string, string> = {
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

const inputLabels: Record<string, string> = {
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

const placeholders: Record<string, string> = {
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

const modeName = modeNames[lab.mode] ?? 'AI 工程实验台'
const inputLabel = inputLabels[lab.mode] ?? '工程问题描述'
const placeholder = placeholders[lab.mode] ?? '描述今天要验证的 AI 工程问题。'

function push(step: string, status: TraceStatus, detail: string) {
  trace.value.push({ step, status, detail })
}

function runGatewayDemo() {
  push('页面入口', 'success', '用户先在当天页面输入模型调用场景。')
  push('服务端边界', 'success', '前端只请求 /api/ai/chat，API Key 不进入浏览器。')
  push('Provider 分发', strictMode.value ? 'success' : 'warning', '服务端决定 mock / deepseek，并统一响应结构。')
  push('失败处理', input.value.includes('超时') ? 'warning' : 'success', '无 Key、超时、Provider 错误都要归类。')
  output.value = '今天重点不是 UI，而是看清 UI -> Server API -> Provider -> 统一响应的边界。'
}

function runStreamingDemo() {
  push('用户输入', 'success', '页面保留原始输入，避免取消后丢失。')
  push('服务端流', 'success', 'SSE 逐段返回内容，前端不等完整结果。')
  push('取消生成', input.value.includes('取消') ? 'success' : 'warning', '需要 AbortController 或等价取消机制。')
  push('状态机', 'success', 'idle -> streaming -> done / cancelled / failed。')
  output.value = 'Streaming 的核心是体验状态可控，不是单纯把文字一点点显示出来。'
}

function runSchemaDemo() {
  try {
    const parsed = JSON.parse(input.value || '{}')
    const hasText = typeof parsed?.rewrittenText === 'string' && parsed.rewrittenText.trim()
    push('JSON 解析', 'success', '模型原始输出至少是可解析 JSON。')
    push('字段校验', hasText ? 'success' : 'blocked', hasText ? 'rewrittenText 有效。' : '缺少有效 rewrittenText。')
    push('业务入口', hasText ? 'success' : 'warning', '只有校验后的结果才能进入页面展示。')
    output.value = hasText ? '结构化输出通过最小校验。' : '模型有返回，但业务不可用，需要 repair 或降级。'
  } catch {
    push('JSON 解析', 'blocked', '模型输出不是合法 JSON。')
    output.value = '这类失败必须在服务端拦截，不能直接交给前端渲染。'
  }
}

function runPromptRegistryDemo() {
  const hasVersion = /v\d+/i.test(input.value)
  push('任务路由', input.value.includes('task') || input.value.includes('任务') ? 'success' : 'warning', '前端传 taskType，不传完整 Prompt。')
  push('版本记录', hasVersion ? 'success' : 'warning', 'Prompt 变更必须有版本号和原因。')
  push('回归评测', 'success', '每次改 Prompt 都要跑样本集。')
  output.value = 'Prompt Registry 解决的是可维护性、回滚和质量门禁。'
}

function runEvalDemo() {
  const risky = /(保证|一定|下周|本周五|诊断|删除)/.test(input.value)
  push('样本覆盖', input.value.trim() ? 'success' : 'warning', '至少要覆盖真实用户输入。')
  push('风险样本', risky ? 'blocked' : 'success', risky ? '命中高风险表达，需要复核。' : '当前没有命中简单风险词。')
  push('质量门禁', 'success', '升级模型或 Prompt 前后要对比指标。')
  output.value = '评测让 AI 功能从“感觉不错”变成可回归证据。'
}

function runRagDemo() {
  const asksEvidence = /(字段|接口|来源|引用|证据)/.test(input.value)
  push('查询理解', input.value.trim() ? 'success' : 'warning', '用户问题要转换成可检索查询。')
  push('召回证据', asksEvidence ? 'success' : 'warning', '候选 chunk 必须带 metadata 和来源。')
  push('拒答边界', strictMode.value ? 'success' : 'warning', '证据不足就拒答，不让模型补字段。')
  output.value = 'RAG 页面要看证据、引用和拒答，不是只看最终回答像不像。'
}

function runToolDemo() {
  const write = /(提交|删除|修改|创建|发送)/.test(input.value)
  push('工具意图', 'success', write ? '识别为写操作。' : '识别为只读查询。')
  push('参数校验', input.value.trim() ? 'success' : 'blocked', '模型生成的工具参数不能直接信任。')
  push('确认边界', write ? 'blocked' : 'success', write ? '写操作必须二次确认。' : '只读操作可以直接返回 Trace。')
  output.value = write ? '工具调用被拦截：有副作用操作必须用户确认。' : '只读工具可以执行，但仍然要记录 Trace。'
}

function runAgentDemo() {
  push('任务拆解', 'success', '理解目标 -> 选择工具 -> 执行 -> 检查证据 -> 输出。')
  push('终止条件', strictMode.value ? 'success' : 'warning', '需要 maxSteps、成功条件和失败条件。')
  push('Trace 回放', 'success', '每一步都要留下输入、工具、结果和判断。')
  output.value = 'Agent 的核心不是自由，而是可观察、可终止、可回放。'
}

function runMcpDemo() {
  try {
    JSON.parse(input.value || '{}')
    push('参数 Schema', 'success', 'MCP Tool 参数必须先过 Schema。')
    push('服务端边界', 'success', '模型只能请求调用，真正权限在 MCP Server。')
    push('资源最小化', strictMode.value ? 'success' : 'warning', '只暴露任务需要的最小资源。')
    output.value = 'MCP 页面要看工具契约、权限和资源边界。'
  } catch {
    push('参数 Schema', 'blocked', '参数不是有效 JSON。')
    output.value = 'MCP Server 应拒绝非法参数，真实业务函数不能执行。'
  }
}

function runObservabilityDemo() {
  push('requestId', 'success', '用户反馈问题时可以定位到一次调用。')
  push('性能与成本', /(P95|秒|延迟|成本|token)/i.test(input.value) ? 'warning' : 'success', '记录耗时、token、provider 和错误类型。')
  push('质量抽样', 'success', '线上不能只看 200 状态码，还要看内容质量。')
  output.value = 'AI 可观测性要同时看性能、成本、错误和质量。'
}

function runProductDemo() {
  const highRisk = /(药|诊断|自杀|伤害|治疗|抑郁)/.test(input.value)
  push('用户场景', input.value.trim() ? 'success' : 'warning', '先明确目标用户和使用边界。')
  push('AI 必要性', secondaryInput.value.trim() ? 'success' : 'warning', '说明为什么规则或普通表单不够。')
  push('安全边界', highRisk ? 'blocked' : 'success', highRisk ? '触发高风险边界，需要拒答或升级。' : '当前未命中高风险词。')
  output.value = '偏产品项目要证明你能定义边界，不只是生成温柔文案。'
}

function runPortfolioDemo() {
  const signals = ['问题', '架构', '评测', '失败', '成本', '结果']
  const found = signals.filter((signal) => input.value.includes(signal))
  for (const signal of signals) {
    push(signal, found.includes(signal) ? 'success' : 'warning', found.includes(signal) ? '已有证据。' : '建议补充。')
  }
  output.value = '作品集要用证据讲，不堆技术名词。'
}

async function runDemo() {
  trace.value = []
  output.value = ''
  errorMessage.value = ''
  isRunning.value = true

  try {
    const response = await fetch(lab.apiPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: input.value,
        secondaryInput: secondaryInput.value,
        strictMode: strictMode.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.message || '当天服务端 Demo 执行失败。')
    }

    trace.value = data.trace ?? []
    output.value = data.output ?? ''
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : '当天服务端 Demo 执行失败。'
    trace.value = [
      {
        step: '服务端请求',
        status: 'blocked',
        detail: errorMessage.value,
      },
    ]
    output.value = '请确认 npm run demo 已启动，且当天服务端接口存在。'
  } finally {
    isRunning.value = false
  }
}
</script>

<template>
  <section class="advanced-lab-page">
    <RouterLink class="back-link" to="/">← 返回高级 Demo 列表</RouterLink>

    <header class="hero">
      <div>
        <p class="eyebrow">W{{ lab.week }} · Day {{ lab.day }} · {{ lab.phase }}</p>
        <h1>{{ lab.title }}</h1>
        <p>{{ lab.dayTitle }}：{{ lab.dayGoal }}</p>
      </div>
      <div class="mode-badge">{{ modeName }}</div>
    </header>

    <section class="flow-panel">
      <div class="flow-title">
        <div>
          <p class="eyebrow">TODAY CODE FLOW</p>
          <h2>今天这个页面背后的代码流程</h2>
        </div>
        <span>本页面请求当天独立服务端接口：{{ lab.apiPath }}</span>
      </div>

      <div class="flow-grid">
        <article class="card main-flow">
          <h3>执行链路</h3>
          <ol>
            <li v-for="step in lab.flowSteps" :key="step">{{ step }}</li>
          </ol>
        </article>

        <article class="card">
          <h3>重点文件</h3>
          <ul>
            <li v-for="file in lab.codeFiles" :key="file"><code>{{ file }}</code></li>
          </ul>
        </article>

        <article class="card">
          <h3>后端补点</h3>
          <ul>
            <li v-for="item in lab.backendFocus" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="card">
          <h3>验收动作</h3>
          <ul>
            <li v-for="item in lab.acceptanceChecks" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <div class="workbench">
      <section class="card control">
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

        <button type="button" :disabled="isRunning" @click="runDemo">
          {{ isRunning ? '运行中...' : `运行 W${lab.week} D${lab.day} Demo` }}
        </button>
      </section>

      <aside class="card task">
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

    <section v-if="trace.length || output" class="card result">
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
.advanced-lab-page {
  display: grid;
  gap: 24px;
}

.back-link {
  width: fit-content;
  color: #5265d8;
  text-decoration: none;
}

.hero,
.flow-title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
}

.hero > div:first-child {
  max-width: 840px;
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

h2,
h3 {
  margin-top: 0;
}

.hero p:last-child,
.task p,
.task li,
.card li {
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

.card,
.flow-panel {
  padding: 24px;
  border: 1px solid #e2e6ef;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(30, 46, 80, 0.06);
}

.flow-panel {
  display: grid;
  gap: 18px;
}

.flow-title span {
  color: #657086;
  font-size: 13px;
}

.flow-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.8fr);
  gap: 14px;
}

.flow-grid .card {
  padding: 18px;
  background: #f8f9fc;
  box-shadow: none;
}

.main-flow {
  grid-row: span 3;
  background: #f3f5ff !important;
}

ol,
ul {
  margin: 0;
  padding-left: 20px;
}

code {
  color: #4354c6;
  font-size: 12px;
  word-break: break-all;
}

.workbench {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 20px;
  align-items: start;
}

.control {
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

.task {
  position: sticky;
  top: 92px;
}

.task h3 {
  margin: 22px 0 8px;
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
  .workbench,
  .flow-grid {
    grid-template-columns: 1fr;
  }

  .main-flow {
    grid-row: auto;
  }

  .task {
    position: static;
  }
}

@media (max-width: 640px) {
  .hero,
  .flow-title {
    align-items: start;
    flex-direction: column;
  }
}
</style>

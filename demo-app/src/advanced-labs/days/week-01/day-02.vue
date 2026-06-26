<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type Provider = 'mock' | 'deepseek'
type TraceStatus = 'success' | 'warning' | 'blocked'

interface TraceItem {
  step: string
  status: TraceStatus
  detail: string
}

interface ChatResponse {
  requestId?: string
  provider?: Provider
  model?: string
  content?: string
  usage?: {
    prompt_tokens?: number
    completion_tokens?: number
    total_tokens?: number
  } | null
  durationMs?: number
  error?: {
    type?: string
    message?: string
  }
}

interface DeepSeekStatus {
  configured?: boolean
  model?: string
  baseUrl?: string
}

const lab = {
  id: 'W01D02',
  week: '01',
  day: '02',
  title: 'AI Gateway：接入真实大模型',
  dayTitle: '最小代码闭环',
  dayGoal:
    '从 Vue 页面发起请求，经由自己的 Node 服务端进入 AI Gateway，再调用 mock 或 DeepSeek Provider。',
  phase: '阶段 1：AI 应用工程底座',
  apiPath: '/api/ai/chat',
  lessonPath: '/advanced-track/lessons/week-01/day-02.md',
  reviewPath: '/advanced-track/reviews/week-01.md',
  codeFiles: [
    'demo-app/src/advanced-labs/days/week-01/day-02.vue',
    'demo-app/server/index.js',
    'demo-app/server/ai-gateway/handleChat.js',
    'demo-app/server/providers/mockProvider.js',
    'demo-app/server/providers/deepseekProvider.js',
    'demo-app/server/shared/deepseek-client.js',
    '.env',
  ],
  flowSteps: [
    '页面只请求自己的服务端 /api/ai/chat。',
    '服务端读取 .env 中的 DEEPSEEK_API_KEY，浏览器不接触 Key。',
    'AI Gateway 根据 provider 选择 mock 或 DeepSeek。',
    'Provider 返回内容后，服务端统一补充 requestId、model、usage 和 durationMs。',
    '页面展示结果、错误和本次请求证据。',
  ],
  acceptanceChecks: [
    'Network 中只能看到 /api/ai/chat，不能看到 DeepSeek API Key。',
    '成功响应中能看到 requestId、provider、model 和 durationMs。',
    '失败时能看到统一错误类型和用户可理解的提示。',
    '服务端控制台能用 requestId 对应本次调用日志。',
  ],
}

const input = ref('请用 3 句话解释为什么 AI Gateway 不能让前端直接调用大模型。')
const provider = ref<Provider>('deepseek')
const isRunning = ref(false)
const isCheckingStatus = ref(false)
const output = ref('')
const errorMessage = ref('')
const trace = ref<TraceItem[]>([])
const requestEvidence = ref<ChatResponse | null>(null)
const deepSeekStatus = ref<DeepSeekStatus | null>(null)

const providerLabel = computed(() =>
  provider.value === 'deepseek' ? 'DeepSeek 真实模型' : '教学 Mock',
)

const statusText = computed(() => {
  if (!deepSeekStatus.value) {
    return '正在读取服务端配置状态'
  }

  return deepSeekStatus.value.configured
    ? `DeepSeek 已配置，模型：${deepSeekStatus.value.model || '未返回模型名'}`
    : 'DeepSeek 未配置，可先用 Mock 跑通链路'
})

function resetResult() {
  output.value = ''
  errorMessage.value = ''
  trace.value = []
  requestEvidence.value = null
}

function push(step: string, status: TraceStatus, detail: string) {
  trace.value.push({ step, status, detail })
}

function formatTokenUsage(usage: ChatResponse['usage']) {
  if (!usage) {
    return '无 token 统计'
  }

  const prompt = usage.prompt_tokens ?? 0
  const completion = usage.completion_tokens ?? 0
  const total = usage.total_tokens ?? prompt + completion

  return `输入 ${prompt} / 输出 ${completion} / 总计 ${total}`
}

async function checkDeepSeekStatus() {
  isCheckingStatus.value = true

  try {
    const response = await fetch('/api/providers/deepseek')
    const data = (await response.json()) as DeepSeekStatus
    deepSeekStatus.value = data
    provider.value = data.configured ? 'deepseek' : 'mock'
  } catch {
    deepSeekStatus.value = {
      configured: false,
    }
    provider.value = 'mock'
  } finally {
    isCheckingStatus.value = false
  }
}

async function runDemo() {
  resetResult()
  isRunning.value = true

  const trimmedInput = input.value.trim()

  push('页面输入', trimmedInput ? 'success' : 'blocked', trimmedInput || '输入为空')
  push(
    '服务端边界',
    'success',
    `浏览器请求 ${lab.apiPath}，provider=${provider.value}，不会携带 API Key。`,
  )

  try {
    const response = await fetch(lab.apiPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: input.value,
        provider: provider.value,
      }),
    })

    const data = (await response.json()) as ChatResponse
    requestEvidence.value = data

    if (!response.ok || data.error) {
      const message = data.error?.message || 'AI Gateway 调用失败。'
      push('Provider 调用', 'blocked', message)
      push(
        '统一错误',
        'warning',
        `requestId=${data.requestId || '未返回'}，type=${data.error?.type || 'unknown'}`,
      )
      throw new Error(message)
    }

    push(
      'Provider 调用',
      'success',
      `${data.provider || provider.value} 返回成功，模型：${data.model || '未返回模型名'}。`,
    )
    push(
      '运行证据',
      'success',
      `requestId=${data.requestId}，耗时 ${data.durationMs ?? 0}ms，${formatTokenUsage(data.usage)}。`,
    )

    output.value = data.content || ''
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'AI Gateway 调用失败。'
  } finally {
    isRunning.value = false
  }
}

onMounted(() => {
  checkDeepSeekStatus()
})
</script>

<template>
  <section class="advanced-lab-page">
    <RouterLink class="back-link" to="/">返回高级 Demo 列表</RouterLink>

    <header class="hero">
      <div>
        <p class="eyebrow">W{{ lab.week }} / Day {{ lab.day }} / {{ lab.phase }}</p>
        <h1>{{ lab.title }}</h1>
        <p>{{ lab.dayTitle }}：{{ lab.dayGoal }}</p>
      </div>
      <div class="mode-badge">{{ providerLabel }}</div>
    </header>

    <section class="flow-panel">
      <div class="flow-title">
        <div>
          <p class="eyebrow">TODAY CODE FLOW</p>
          <h2>今天要跑通的真实链路</h2>
        </div>
        <span>页面请求：{{ lab.apiPath }}</span>
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
            <li v-for="file in lab.codeFiles" :key="file">
              <code>{{ file }}</code>
            </li>
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
        <div class="section-heading">
          <div>
            <p class="eyebrow">REAL MODEL CALL</p>
            <h2>本日 Demo 输入</h2>
          </div>
          <button
            class="secondary-button"
            type="button"
            :disabled="isCheckingStatus"
            @click="checkDeepSeekStatus"
          >
            {{ isCheckingStatus ? '检查中...' : '刷新配置' }}
          </button>
        </div>

        <p class="status-line" :class="{ ready: deepSeekStatus?.configured }">
          {{ statusText }}
        </p>

        <fieldset>
          <legend>模型来源</legend>
          <label class="radio-control">
            <input v-model="provider" type="radio" value="deepseek" />
            <span>DeepSeek 真实模型</span>
          </label>
          <label class="radio-control">
            <input v-model="provider" type="radio" value="mock" />
            <span>教学 Mock</span>
          </label>
        </fieldset>

        <label>
          <span>发送给模型的内容</span>
          <textarea
            v-model="input"
            rows="6"
            placeholder="输入一个你想让大模型回答的问题"
          />
        </label>

        <button type="button" :disabled="isRunning" @click="runDemo">
          {{ isRunning ? '调用中...' : `运行 ${providerLabel}` }}
        </button>
      </section>

      <aside class="card task">
        <h2>今天要证明什么</h2>
        <p>
          前端页面没有直接请求模型供应商，而是通过自己的 Node 服务端进入
          AI Gateway。API Key 只在服务端读取。
        </p>
        <h3>课程文件</h3>
        <p>{{ lab.lessonPath }}</p>
        <h3>复盘文件</h3>
        <p>{{ lab.reviewPath }}</p>
        <h3>排查要点</h3>
        <ul>
          <li>Network 中检查请求地址。</li>
          <li>响应中记录 requestId。</li>
          <li>服务端控制台查同一个 requestId。</li>
          <li>失败时确认 error.type 和 message。</li>
        </ul>
      </aside>
    </div>

    <section v-if="trace.length || output || errorMessage" class="card result">
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
        <strong>模型输出</strong>
        <p>{{ output }}</p>
      </div>

      <div v-if="errorMessage" class="error-box">
        <strong>调用失败</strong>
        <p>{{ errorMessage }}</p>
      </div>

      <dl v-if="requestEvidence" class="evidence-grid">
        <div>
          <dt>requestId</dt>
          <dd>{{ requestEvidence.requestId || '未返回' }}</dd>
        </div>
        <div>
          <dt>provider</dt>
          <dd>{{ requestEvidence.provider || provider }}</dd>
        </div>
        <div>
          <dt>model</dt>
          <dd>{{ requestEvidence.model || '未返回' }}</dd>
        </div>
        <div>
          <dt>duration</dt>
          <dd>{{ requestEvidence.durationMs ?? 0 }}ms</dd>
        </div>
        <div>
          <dt>usage</dt>
          <dd>{{ formatTokenUsage(requestEvidence.usage) }}</dd>
        </div>
        <div v-if="requestEvidence.error">
          <dt>error</dt>
          <dd>
            {{ requestEvidence.error.type || 'unknown' }} /
            {{ requestEvidence.error.message || '未返回错误信息' }}
          </dd>
        </div>
      </dl>
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
.flow-title,
.section-heading {
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
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  gap: 14px;
}

.flow-grid .card {
  padding: 18px;
  background: #f8f9fc;
  box-shadow: none;
}

.main-flow {
  grid-row: span 2;
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

.status-line {
  margin: 0;
  padding: 12px 14px;
  border: 1px solid #f0d4a9;
  border-radius: 10px;
  color: #8a5a16;
  background: #fff8ed;
  line-height: 1.6;
}

.status-line.ready {
  border-color: #bfe6d2;
  color: #20764f;
  background: #f1fbf6;
}

fieldset {
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 14px;
  border: 1px solid #dfe4ee;
  border-radius: 12px;
}

legend {
  padding: 0 6px;
  font-weight: 800;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

.radio-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-control input {
  width: 18px;
  height: 18px;
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

button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.secondary-button {
  padding: 10px 14px;
  color: #4354c6;
  background: #edf0ff;
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

.output-box,
.error-box,
.evidence-grid {
  margin-top: 16px;
  padding: 18px;
  border-radius: 12px;
}

.output-box {
  background: #edf0ff;
}

.error-box {
  border: 1px solid #f0bdc3;
  color: #8a1f2c;
  background: #fff3f4;
}

.output-box p,
.error-box p {
  margin-bottom: 0;
  line-height: 1.7;
  white-space: pre-wrap;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  background: #f8f9fc;
}

.evidence-grid div {
  display: grid;
  gap: 4px;
}

.evidence-grid dt {
  color: #657086;
  font-size: 13px;
  font-weight: 800;
}

.evidence-grid dd {
  margin: 0;
  color: #1f2937;
  word-break: break-all;
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
  .flow-title,
  .section-heading {
    align-items: start;
    flex-direction: column;
  }

  fieldset {
    flex-direction: column;
  }
}
</style>

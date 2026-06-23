<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { generateComparison } from './api'
import type { GenerationResult } from './types'

const originalText = ref('这个需求根本做不了，你们先想清楚再说。')
const temperature = ref(0.2)
const isLoading = ref(false)
const errorMessage = ref('')
const results = ref<GenerationResult[]>([])
const notice = ref('')

const temperatureLabel = computed(() => {
  if (temperature.value <= 0.3) {
    return '偏稳定'
  }

  if (temperature.value <= 0.7) {
    return '平衡'
  }

  return '偏多样'
})

async function handleGenerate() {
  const text = originalText.value.trim()

  if (!text) {
    errorMessage.value = '请输入需要改写的内容。'
    results.value = []
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await generateComparison(text, temperature.value)
    results.value = data.results
    notice.value = data.notice
  } catch (error) {
    results.value = []
    errorMessage.value =
      error instanceof Error ? error.message : '发生未知错误。'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="lab-view">
    <RouterLink class="back-link" to="/">← 返回实验列表</RouterLink>

    <header class="lesson-header">
      <p class="eyebrow">LAB 02 · 模型不确定性</p>
      <h1>相同输入，为什么结果会变化？</h1>
      <p>
        调整模拟 Temperature，一次生成三个结果。这里展示的是教学模拟，
        用来建立生成倾向的直觉，不代表真实模型的精确行为。
      </p>
    </header>

    <div class="workspace">
      <section class="control-panel">
        <label>
          <span>用户原话</span>
          <textarea v-model="originalText" rows="5" />
        </label>

        <label>
          <span>
            Temperature：{{ temperature.toFixed(1) }}
            <strong>{{ temperatureLabel }}</strong>
          </span>
          <input
            v-model.number="temperature"
            type="range"
            min="0"
            max="1"
            step="0.1"
          />
        </label>

        <div class="temperature-notes">
          <span>0：更集中</span>
          <span>1：更多样</span>
        </div>

        <button type="button" :disabled="isLoading" @click="handleGenerate">
          {{ isLoading ? '生成中…' : '生成三个结果' }}
        </button>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </section>

      <section class="knowledge-panel">
        <h2>先记住三件事</h2>
        <ol>
          <li>Temperature 调整的是生成倾向，不是答案质量。</li>
          <li>低 Temperature 也不能保证事实正确。</li>
          <li>输出不同不一定失败，违反产品标准才是问题。</li>
        </ol>
      </section>
    </div>

    <section v-if="results.length" class="result-section">
      <div class="result-heading">
        <h2>本轮生成结果</h2>
        <p>{{ notice }}</p>
      </div>

      <div class="result-grid">
        <article v-for="result in results" :key="result.id" class="result-card">
          <span>结果 {{ result.id }}</span>
          <p>{{ result.text }}</p>

          <div v-if="result.addedInformation.length" class="risk">
            <strong>模拟风险提示</strong>
            <ul>
              <li v-for="item in result.addedInformation" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="evaluation">
        <h2>不要只选“最好听”的</h2>
        <ul>
          <li>原意保持：有没有改变用户立场？</li>
          <li>事实可靠：有没有增加原因、时间或承诺？</li>
          <li>语气匹配：是否专业，但没有过度示弱？</li>
          <li>可直接使用：是否适合真实工作场景？</li>
        </ul>
      </div>
    </section>
  </section>
</template>

<style scoped>
.lab-view {
  display: grid;
  gap: 24px;
}

.back-link {
  width: fit-content;
  color: #5265d8;
  text-decoration: none;
}

.lesson-header {
  max-width: 800px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #5769d8;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  font-size: clamp(30px, 5vw, 44px);
}

.lesson-header > p:last-child,
.result-heading p {
  color: #657086;
  line-height: 1.7;
}

.workspace {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 20px;
}

.control-panel,
.knowledge-panel,
.result-card,
.evaluation {
  border: 1px solid #e2e6ef;
  border-radius: 16px;
  background: #fff;
}

.control-panel,
.knowledge-panel,
.evaluation {
  padding: 24px;
}

.control-panel {
  display: grid;
  gap: 20px;
}

label {
  display: grid;
  gap: 10px;
  font-weight: 700;
}

label span {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

label strong {
  color: #5769d8;
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

input[type='range'] {
  width: 100%;
  accent-color: #5365d8;
}

.temperature-notes {
  display: flex;
  margin-top: -12px;
  justify-content: space-between;
  color: #7a8497;
  font-size: 13px;
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
  cursor: wait;
  opacity: 0.65;
}

.knowledge-panel h2,
.evaluation h2 {
  margin-top: 0;
}

.knowledge-panel ol,
.evaluation ul {
  padding-left: 22px;
  color: #566077;
  line-height: 1.9;
}

.error {
  margin: 0;
  color: #bd2c3c;
}

.result-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.result-heading h2,
.result-heading p {
  margin-bottom: 10px;
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.result-card {
  padding: 20px;
}

.result-card > span {
  color: #5769d8;
  font-size: 13px;
  font-weight: 800;
}

.result-card > p {
  line-height: 1.75;
}

.risk {
  margin-top: 16px;
  padding: 12px;
  border-radius: 10px;
  color: #9a3b25;
  background: #fff3ed;
  font-size: 14px;
}

.risk ul {
  margin-bottom: 0;
  padding-left: 18px;
}

.evaluation {
  margin-top: 20px;
}

@media (max-width: 900px) {
  .workspace,
  .result-grid {
    grid-template-columns: 1fr;
  }
}
</style>

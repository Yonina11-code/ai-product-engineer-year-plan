<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { rewriteMessage } from './api'
import type { RewriteResult } from './types'

const audience = ref('同事')
const tone = ref('专业、直接')
const originalText = ref('')
const isLoading = ref(false)
const status = ref('')
const errorMessage = ref('')
const result = ref<RewriteResult | null>(null)

async function handleSubmit() {
  const text = originalText.value.trim()

  if (!text) {
    errorMessage.value = '请先输入需要改写的内容。'
    status.value = ''
    result.value = null
    return
  }

  isLoading.value = true
  status.value = '请求已发给服务端…'
  errorMessage.value = ''
  result.value = null

  try {
    result.value = await rewriteMessage({
      originalText: text,
      audience: audience.value,
      tone: tone.value,
    })
    status.value = '改写完成。'
  } catch (error) {
    status.value = ''
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

    <div class="lab-layout">
      <article class="lesson-panel">
        <p class="eyebrow">LAB 01 · AI 应用完整链路</p>
        <h1>职场沟通助手</h1>
        <p class="description">
          这个实验使用模拟模型，重点观察 Vue 页面、服务端、Prompt
          和输出校验之间的关系。
        </p>

        <form class="rewrite-form" @submit.prevent="handleSubmit">
          <label>
            <span>沟通对象</span>
            <select v-model="audience">
              <option value="同事">同事</option>
              <option value="产品经理">产品经理</option>
              <option value="直属领导">直属领导</option>
              <option value="客户">客户</option>
            </select>
          </label>

          <label>
            <span>期望语气</span>
            <select v-model="tone">
              <option value="专业、直接">专业、直接</option>
              <option value="坚定但不对抗">坚定但不对抗</option>
              <option value="友好、简洁">友好、简洁</option>
            </select>
          </label>

          <label>
            <span>你的原话</span>
            <textarea
              v-model="originalText"
              rows="6"
              placeholder="例如：这个需求根本做不了，你们先想清楚再说。"
            />
          </label>

          <button type="submit" :disabled="isLoading">
            {{ isLoading ? '正在改写…' : '帮我改写' }}
          </button>
        </form>

        <p v-if="status" class="status success" aria-live="polite">
          {{ status }}
        </p>
        <p v-if="errorMessage" class="status error" aria-live="polite">
          {{ errorMessage }}
        </p>

        <section v-if="result" class="result-panel">
          <h2>改写结果</h2>
          <p>{{ result.rewrittenText }}</p>
          <h3>修改说明</h3>
          <p>{{ result.explanation }}</p>
        </section>
      </article>

      <aside class="observation-panel">
        <h2>本节观察重点</h2>
        <ol>
          <li>Vue 收集三个表单字段。</li>
          <li>前端向实验 01 的 API 发请求。</li>
          <li>服务端将字段组合成 Prompt。</li>
          <li>模拟模型返回不可靠的外部结果。</li>
          <li>服务端校验成功后才交给页面。</li>
        </ol>

        <div class="test-box">
          <strong>失败实验</strong>
          <code>[返回空结果]</code>
          <code>[返回错误格式]</code>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.lab-view {
  display: grid;
  gap: 20px;
}

.back-link {
  width: fit-content;
  color: #5265d8;
  text-decoration: none;
}

.lab-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;
}

.lesson-panel,
.observation-panel {
  border: 1px solid #e2e6ef;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(30, 46, 80, 0.07);
}

.lesson-panel {
  padding: 32px;
}

.observation-panel {
  padding: 24px;
  position: sticky;
  top: 92px;
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
  font-size: clamp(28px, 5vw, 38px);
}

.description {
  margin: 12px 0 28px;
  color: #657086;
  line-height: 1.7;
}

.rewrite-form {
  display: grid;
  gap: 18px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

select,
textarea {
  width: 100%;
  border: 1px solid #cfd5e2;
  border-radius: 10px;
  padding: 12px 14px;
  color: #172033;
  background: #fff;
  font: inherit;
}

textarea {
  resize: vertical;
  line-height: 1.6;
}

select:focus,
textarea:focus {
  border-color: #6878e6;
  outline: 3px solid rgba(104, 120, 230, 0.14);
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

.status {
  margin: 18px 0 0;
}

.success {
  color: #16784b;
}

.error {
  color: #bd2c3c;
}

.result-panel {
  margin-top: 18px;
  padding: 20px;
  border-radius: 12px;
  background: #f7f8fc;
}

.result-panel h2,
.result-panel h3 {
  margin-top: 0;
}

.result-panel h3 {
  margin-top: 20px;
  font-size: 16px;
}

.result-panel p {
  margin-bottom: 0;
  line-height: 1.75;
}

.observation-panel h2 {
  margin-top: 0;
  font-size: 18px;
}

.observation-panel ol {
  padding-left: 20px;
  color: #566077;
  line-height: 1.8;
}

.test-box {
  display: grid;
  gap: 8px;
  margin-top: 20px;
  padding: 16px;
  border-radius: 12px;
  background: #f3f5fb;
}

.test-box code {
  color: #a12a39;
}

@media (max-width: 860px) {
  .lab-layout {
    grid-template-columns: 1fr;
  }

  .observation-panel {
    position: static;
  }
}

@media (max-width: 600px) {
  .lesson-panel {
    padding: 22px;
  }
}
</style>

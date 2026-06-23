<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { labs } from '@/labs/registry'

const search = ref('')
const selectedModule = ref('全部')

const modules = computed(() => [
  '全部',
  ...new Set(labs.map((lab) => lab.module).filter(Boolean)),
])

const filteredLabs = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  return labs.filter((lab) => {
    const matchesModule =
      selectedModule.value === '全部' || lab.module === selectedModule.value
    const matchesKeyword =
      !keyword ||
      [lab.id, lab.title, lab.description, ...lab.topics]
        .join(' ')
        .toLowerCase()
        .includes(keyword)
    return matchesModule && matchesKeyword
  })
})
</script>

<template>
  <section class="home-view">
    <div class="hero">
      <p class="eyebrow">LEARN BY BUILDING</p>
      <h1>AI Product Engineer 实验室</h1>
      <p>
        所有课程 Demo 都收纳在这个 Vue 项目中。每个实验独立编号，
        但共享统一工程、开发规范和服务端。
      </p>
    </div>

    <div class="lab-filters">
      <input
        v-model="search"
        type="search"
        placeholder="搜索课程、知识点或 LAB 编号"
      />
      <select v-model="selectedModule">
        <option v-for="module in modules" :key="module" :value="module">
          {{ module }}
        </option>
      </select>
    </div>

    <div class="lab-grid">
      <article v-for="lab in filteredLabs" :key="lab.id" class="lab-card">
        <div class="lab-heading">
          <span class="lab-number">LAB {{ lab.id }}</span>
          <span
            class="lab-status"
            :class="{ pending: lab.status === 'coming-soon' }"
          >
            {{ lab.status === 'available' ? '可以学习' : '后续开放' }}
          </span>
        </div>

        <h2>{{ lab.title }}</h2>
        <small>{{ lab.module }}</small>
        <p>{{ lab.description }}</p>

        <ul class="topic-list">
          <li v-for="topic in lab.topics" :key="topic">{{ topic }}</li>
        </ul>

        <RouterLink
          v-if="lab.status === 'available'"
          class="lab-link"
          :to="lab.path"
        >
          进入实验
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.lab-filters {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 12px;
  margin-top: 32px;
}

.lab-filters input,
.lab-filters select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cfd5e2;
  border-radius: 10px;
  color: #172033;
  background: #fff;
  font: inherit;
}

.lab-card small {
  color: #8a93a5;
}

@media (max-width: 640px) {
  .lab-filters {
    grid-template-columns: 1fr;
  }
}
</style>

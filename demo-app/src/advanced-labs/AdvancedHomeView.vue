<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getAdvancedWeeks } from './registry'

const search = ref('')
const selectedPhase = ref('全部')
const weeks = getAdvancedWeeks()

const phases = computed(() => [
  '全部',
  ...new Set(weeks.map((week) => week.phase).filter(Boolean)),
])

const filteredWeeks = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  return weeks.filter((week) => {
    const matchesPhase =
      selectedPhase.value === '全部' || week.phase === selectedPhase.value
    const text = `${week.week} ${week.title} ${week.phase} ${week.labs
      .flatMap((lab) => lab.skills)
      .join(' ')}`.toLowerCase()
    return matchesPhase && (!keyword || text.includes(keyword))
  })
})
</script>

<template>
  <section class="advanced-home">
    <div class="hero">
      <p class="eyebrow">ADVANCED JOB TRACK</p>
      <h1>AI Engineer 求职向高级 Demo</h1>
      <p>
        这里是新的主线 Demo。每周一个真实能力主题，每天一个独立入口，
        目标是产出可面试、可展示、可复盘的工程证据。
      </p>
    </div>

    <div class="track-links">
      <RouterLink to="/advanced/week-01/day-01">开始 W01 Day01</RouterLink>
      <RouterLink to="/legacy-labs">查看旧入门 Demo</RouterLink>
    </div>

    <div class="advanced-filters">
      <input
        v-model="search"
        type="search"
        placeholder="搜索周次、能力、主题"
      />
      <select v-model="selectedPhase">
        <option v-for="phase in phases" :key="phase" :value="phase">
          {{ phase }}
        </option>
      </select>
    </div>

    <div class="advanced-grid">
      <article
        v-for="week in filteredWeeks"
        :key="week.week"
        class="advanced-card"
      >
        <div class="advanced-card-header">
          <span>W{{ week.week }}</span>
          <small>{{ week.phase }}</small>
        </div>

        <h2>{{ week.title }}</h2>
        <p>{{ week.labs[0]?.build }}</p>

        <div class="day-entry-list">
          <RouterLink
            v-for="lab in week.labs"
            :key="lab.id"
            :to="lab.path"
          >
            D{{ lab.day }} {{ lab.dayTitle }}
          </RouterLink>
        </div>

        <RouterLink class="primary-entry" :to="week.labs[0]?.path ?? '/'">
          进入本周
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.track-links,
.advanced-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.track-links a {
  padding: 10px 14px;
  border-radius: 999px;
  color: #5265d8;
  background: #edf0ff;
  text-decoration: none;
  font-weight: 800;
}

.advanced-filters {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
}

.advanced-filters input,
.advanced-filters select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cfd5e2;
  border-radius: 10px;
  color: #172033;
  background: #fff;
  font: inherit;
}

.advanced-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.advanced-card {
  padding: 24px;
  border: 1px solid #e2e6ef;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(30, 46, 80, 0.05);
}

.advanced-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.advanced-card-header span {
  color: #5265d8;
  font-size: 13px;
  font-weight: 900;
}

.advanced-card-header small {
  padding: 5px 9px;
  border-radius: 999px;
  color: #16784b;
  background: #e9f8f0;
}

.advanced-card h2 {
  margin: 18px 0 10px;
}

.advanced-card p {
  color: #657086;
  line-height: 1.7;
}

.day-entry-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}

.day-entry-list a {
  padding: 7px 9px;
  border: 1px solid #dfe4f0;
  border-radius: 999px;
  color: #5265d8;
  background: #f8f9ff;
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
}

.primary-entry {
  display: inline-flex;
  color: #5265d8;
  font-weight: 900;
  text-decoration: none;
}

@media (max-width: 640px) {
  .advanced-filters {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { labs } from '@/labs/registry'
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

    <div class="lab-grid">
      <article v-for="lab in labs" :key="lab.id" class="lab-card">
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

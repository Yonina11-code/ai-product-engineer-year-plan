<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">AI</span>
        <span>
          <strong>AI Engineer Advanced Labs</strong>
          <small>求职向高级训练项目</small>
        </span>
      </RouterLink>
      <nav class="app-nav">
        <RouterLink to="/">高级 Demo</RouterLink>
        <RouterLink to="/legacy-labs">旧入门 Demo</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

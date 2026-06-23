<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">AI</span>
        <span>
          <strong>Product Engineer Labs</strong>
          <small>年度学习实验项目</small>
        </span>
      </RouterLink>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

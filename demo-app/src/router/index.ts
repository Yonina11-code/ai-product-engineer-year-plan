import { createRouter, createWebHistory } from 'vue-router'
import LabHomeView from '@/views/LabHomeView.vue'
import AiAppChainView from '@/labs/01-ai-app-chain/AiAppChainView.vue'
import ModelUncertaintyView from '@/labs/02-model-uncertainty/ModelUncertaintyView.vue'
import CurriculumLabView from '@/labs/03-48-curriculum/CurriculumLabView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LabHomeView,
    },
    {
      path: '/labs/01-ai-app-chain',
      name: 'lab-01-ai-app-chain',
      component: AiAppChainView,
    },
    {
      path: '/labs/02-model-uncertainty',
      name: 'lab-02-model-uncertainty',
      component: ModelUncertaintyView,
    },
    {
      path: '/labs/:labId(\\d+)',
      name: 'curriculum-lab',
      component: CurriculumLabView,
    },
    {
      path: '/labs/week-:week',
      name: 'legacy-curriculum-lab',
      component: CurriculumLabView,
    },
  ],
})

export default router

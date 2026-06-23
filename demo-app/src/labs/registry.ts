export interface LabDefinition {
  id: string
  title: string
  description: string
  path: string
  status: 'available' | 'coming-soon'
  topics: string[]
}

export const labs: LabDefinition[] = [
  {
    id: '01',
    title: 'AI 应用完整链路',
    description: '观察页面、服务端、Prompt、模型和输出校验如何协作。',
    path: '/labs/01-ai-app-chain',
    status: 'available',
    topics: ['Vue', 'HTTP API', 'Prompt', '输出校验'],
  },
  {
    id: '02',
    title: '真实模型 API',
    description: '安全地接入真实大模型，并处理密钥、超时和错误。',
    path: '',
    status: 'coming-soon',
    topics: ['模型 API', '环境变量', '错误处理'],
  },
]

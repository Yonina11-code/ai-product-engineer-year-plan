import { generatedLabs } from './generated-labs'

export type LabMode =
  | 'custom'
  | 'model'
  | 'prompt'
  | 'evaluation'
  | 'schema'
  | 'tool'
  | 'agent'
  | 'mcp'
  | 'rag'
  | 'product'
  | 'project'
  | 'operations'
  | 'portfolio'

export interface LabDefinition {
  id: string
  title: string
  description: string
  path: string
  status: 'available' | 'coming-soon'
  topics: string[]
  module?: string
  mode?: LabMode
  practice?: string
  deliverable?: string
  lessonPath?: string
}

const customLabs: LabDefinition[] = [
  {
    id: '01',
    title: 'AI 应用完整链路',
    description: '观察页面、服务端、Prompt、模型和输出校验如何协作。',
    path: '/labs/01-ai-app-chain',
    status: 'available',
    topics: ['Vue', 'HTTP API', 'Prompt', '输出校验'],
    module: '模型基础',
    mode: 'custom',
  },
  {
    id: '02',
    title: '模型不确定性',
    description: '比较不同生成倾向，理解 Temperature、波动和评测标准。',
    path: '/labs/02-model-uncertainty',
    status: 'available',
    topics: ['Temperature', '不确定性', '幻觉', '评测'],
    module: '模型基础',
    mode: 'custom',
  },
]

export const labs: LabDefinition[] = [...customLabs, ...generatedLabs]

export function getLabById(id: string) {
  return labs.find((lab) => lab.id === id)
}

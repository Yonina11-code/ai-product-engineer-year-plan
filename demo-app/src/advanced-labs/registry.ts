import { generatedAdvancedLabs } from './generated-advanced-labs'

export type AdvancedLabMode =
  | 'gateway'
  | 'streaming'
  | 'schema'
  | 'prompt-registry'
  | 'eval'
  | 'rag'
  | 'tool'
  | 'agent'
  | 'mcp'
  | 'observability'
  | 'product'
  | 'portfolio'
  | 'engineering'

export interface AdvancedLabDefinition {
  id: string
  week: string
  day: string
  title: string
  dayTitle: string
  dayGoal: string
  phase: string
  path: string
  lessonPath: string
  reviewPath: string
  mode: AdvancedLabMode
  build: string
  skills: string[]
  proof: string[]
  interview: string
}

export const advancedLabs = generatedAdvancedLabs

export function getAdvancedLab(week: string, day: string) {
  return advancedLabs.find((lab) => lab.week === week && lab.day === day)
}

export function getAdvancedWeeks() {
  const map = new Map<string, AdvancedLabDefinition[]>()
  for (const lab of advancedLabs) {
    const labs = map.get(lab.week) ?? []
    labs.push(lab)
    map.set(lab.week, labs)
  }
  return [...map.entries()].map(([week, labs]) => ({
    week,
    title: labs[0]?.title ?? '',
    phase: labs[0]?.phase ?? '',
    labs,
  }))
}

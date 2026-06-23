export interface DeepSeekStatus {
  configured: boolean
  model: string
  baseUrl: string
}

export async function getDeepSeekStatus(): Promise<DeepSeekStatus> {
  const response = await fetch('/api/providers/deepseek')

  if (!response.ok) {
    throw new Error('无法读取 DeepSeek 配置状态。')
  }

  return (await response.json()) as DeepSeekStatus
}

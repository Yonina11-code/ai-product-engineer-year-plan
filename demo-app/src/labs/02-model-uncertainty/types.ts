export interface GenerationResult {
  id: number
  text: string
  addedInformation: string[]
}

export interface GenerateResponse {
  temperature: number
  results: GenerationResult[]
  notice: string
  metadata: {
    provider: 'mock' | 'deepseek'
    model: string
    usage: {
      prompt_tokens?: number
      completion_tokens?: number
      total_tokens?: number
    } | null
  }
}

export interface ApiError {
  message?: string
}

export interface RewriteRequest {
  originalText: string
  audience: string
  tone: string
  provider: 'mock' | 'deepseek'
}

export interface RewriteResult {
  rewrittenText: string
  explanation: string
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

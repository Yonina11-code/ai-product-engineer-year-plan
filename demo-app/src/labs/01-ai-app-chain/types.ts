export interface RewriteRequest {
  originalText: string
  audience: string
  tone: string
}

export interface RewriteResult {
  rewrittenText: string
  explanation: string
}

export interface ApiError {
  message?: string
}

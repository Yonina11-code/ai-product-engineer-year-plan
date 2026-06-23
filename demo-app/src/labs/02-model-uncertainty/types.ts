export interface GenerationResult {
  id: number
  text: string
  addedInformation: string[]
}

export interface GenerateResponse {
  temperature: number
  results: GenerationResult[]
  notice: string
}

export interface ApiError {
  message?: string
}

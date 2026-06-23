import type { ApiError, GenerateResponse } from './types'

export async function generateComparison(
  originalText: string,
  temperature: number,
): Promise<GenerateResponse> {
  const response = await fetch('/api/labs/02/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      originalText,
      temperature,
    }),
  })

  const data = (await response.json()) as GenerateResponse | ApiError

  if (!response.ok) {
    throw new Error(
      'message' in data && data.message
        ? data.message
        : '生成失败，请稍后重试。',
    )
  }

  return data as GenerateResponse
}

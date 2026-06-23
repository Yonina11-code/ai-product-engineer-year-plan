import type {
  ApiError,
  RewriteRequest,
  RewriteResult,
} from './types'

export async function rewriteMessage(
  request: RewriteRequest,
): Promise<RewriteResult> {
  const response = await fetch('/api/labs/01/rewrite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  const data = (await response.json()) as RewriteResult | ApiError

  if (!response.ok) {
    throw new Error(
      'message' in data && data.message
        ? data.message
        : '改写失败，请稍后重试。',
    )
  }

  return data as RewriteResult
}

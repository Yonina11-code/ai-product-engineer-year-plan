const defaultBaseUrl = 'https://api.deepseek.com'
const defaultModel = 'deepseek-v4-flash'
const timeoutMilliseconds = 30_000

export function getDeepSeekConfig() {
  return {
    apiKey: process.env.DEEPSEEK_API_KEY?.trim() || '',
    baseUrl: process.env.DEEPSEEK_BASE_URL?.trim() || defaultBaseUrl,
    model: process.env.DEEPSEEK_MODEL?.trim() || defaultModel,
  }
}

export function getDeepSeekStatus() {
  const config = getDeepSeekConfig()

  return {
    configured: Boolean(config.apiKey),
    model: config.model,
    baseUrl: config.baseUrl,
  }
}

function mapDeepSeekError(statusCode) {
  const messages = {
    400: 'DeepSeek 请求格式不正确。',
    401: 'DeepSeek API Key 无效，请检查本地 .env。',
    402: 'DeepSeek 账户余额不足。',
    422: 'DeepSeek 请求参数无效。',
    429: 'DeepSeek 请求过于频繁，请稍后重试。',
    500: 'DeepSeek 服务暂时异常，请稍后重试。',
    503: 'DeepSeek 服务当前繁忙，请稍后重试。',
  }

  return messages[statusCode] || `DeepSeek 请求失败（${statusCode}）。`
}

export async function createDeepSeekChatCompletion({
  messages,
  temperature,
  responseFormat,
  maxTokens = 500,
}) {
  const config = getDeepSeekConfig()

  if (!config.apiKey) {
    throw new Error(
      '尚未配置 DEEPSEEK_API_KEY，请先在工程根目录创建 .env。',
    )
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMilliseconds)

  try {
    const requestBody = {
      model: config.model,
      messages,
      thinking: {
        type: 'disabled',
      },
      stream: false,
      max_tokens: maxTokens,
    }

    if (typeof temperature === 'number') {
      requestBody.temperature = temperature
    }

    if (responseFormat) {
      requestBody.response_format = responseFormat
    }

    const response = await fetch(
      `${config.baseUrl.replace(/\/$/, '')}/chat/completions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      },
    )

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      throw new Error(mapDeepSeekError(response.status))
    }

    const content = data?.choices?.[0]?.message?.content

    if (typeof content !== 'string' || !content.trim()) {
      throw new Error('DeepSeek 没有返回有效内容。')
    }

    return {
      content: content.trim(),
      usage: data?.usage ?? null,
      model: data?.model || config.model,
    }
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error('DeepSeek 请求超时，请稍后重试。')
    }

    throw error
  } finally {
    clearTimeout(timeout)
  }
}

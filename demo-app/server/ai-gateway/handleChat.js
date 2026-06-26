import { callDeepSeekProvider } from '../providers/deepseekProvider.js';
import { callMockProvider } from '../providers/mockProvider.js';

function createRequestId() {
  return `ai_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
}

function normalizeProvider(provider) {
  return provider === 'deepseek' ? 'deepseek' : 'mock';
}

function toUserError(error) {
  const message =
    error instanceof Error ? error.message : 'AI 服务暂时不可用。';

  if (message.includes('API Key')) {
    return {
      type: 'missing_api_key',
      message: '服务端还没有配置模型 API Key，请先检查 .env。',
    };
  }

  if (message.includes('超时')) {
    return {
      type: 'timeout',
      message: '模型响应超时，请稍后重试。',
    };
  }

  return {
    type: 'provider_error',
    message,
  };
}

export async function handleAiChat({ readJsonBody, response, sendJson }) {
  const requestId = createRequestId();
  const startedAt = Date.now();

  try {
    const data = await readJsonBody();
    const input = data?.input?.trim();
    const provider = normalizeProvider(data?.provider);

    if (!input) {
      sendJson(response, 400, {
        requestId,
        error: {
          type: 'invalid_input',
          message: '请输入要发送给模型的内容。',
        },
      });
      return;
    }

    const messages = [
      {
        role: 'system',
        content: '你是一个 AI Gateway 教学助手，请用简洁中文回答。',
      },
      {
        role: 'user',
        content: input,
      },
    ];

    const result =
      provider === 'deepseek'
        ? await callDeepSeekProvider({ messages, requestId })
        : await callMockProvider({ messages, requestId });

    const durationMs = Date.now() - startedAt;

    console.log('[AI Gateway] success', {
      requestId,
      provider: result.provider,
      model: result.model,
      durationMs,
      result: result,
    });

    sendJson(response, 200, {
      requestId,
      provider: result.provider,
      model: result.model,
      content: result.content,
      usage: result.usage,
      durationMs,
    });
  } catch (error) {
    const durationMs = Date.now() - startedAt;
    const normalizedError = toUserError(error);

    console.error('[AI Gateway] failed', {
      requestId,
      durationMs,
      error: normalizedError,
    });

    sendJson(response, 500, {
      requestId,
      durationMs,
      error: normalizedError,
    });
  }
}

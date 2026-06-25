import { createDeepSeekChatCompletion } from '../shared/deepseek-client.js'

export async function callDeepSeekProvider({ messages, requestId }) {
  const completion = await createDeepSeekChatCompletion({
    messages,
    temperature: 0.4,
    maxTokens: 500,
  })

  return {
    provider: 'deepseek',
    model: completion.model,
    content: completion.content,
    usage: completion.usage,
    requestId,
  }
}

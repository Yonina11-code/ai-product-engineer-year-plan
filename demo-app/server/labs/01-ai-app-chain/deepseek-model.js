import { createDeepSeekChatCompletion } from '../../shared/deepseek-client.js'

const systemPrompt = `你是一名职场沟通助手。

请根据用户提供的沟通对象、期望语气和原话进行改写。

要求：
1. 不改变用户的核心事实和立场。
2. 不虚构原因、时间、排期或承诺。
3. 不增加用户没有提供的信息。
4. 表达专业、清晰，不要过度道歉。
5. 只输出 JSON，不要输出 Markdown。

JSON 格式示例：
{
  "rewrittenText": "改写后的工作消息",
  "explanation": "一句简短的修改说明"
}`

export async function callDeepSeekModel({ originalText, audience, tone }) {
  const userPrompt = `请输出 json。

沟通对象：${audience}
期望语气：${tone}
用户原话：${originalText}`

  const completion = await createDeepSeekChatCompletion({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: userPrompt,
      },
    ],
    temperature: 0.4,
    responseFormat: {
      type: 'json_object',
    },
    maxTokens: 400,
  })

  try {
    return {
      result: JSON.parse(completion.content),
      metadata: {
        model: completion.model,
        usage: completion.usage,
      },
    }
  } catch {
    throw new Error('DeepSeek 返回的 JSON 无法解析。')
  }
}

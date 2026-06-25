export async function callMockProvider({ messages, requestId }) {
  const userMessage = messages.findLast((message) => message.role === 'user')
  const content = userMessage?.content?.trim() || '未提供用户输入。'

  return {
    provider: 'mock',
    model: 'teaching-mock',
    content: `这是 mock provider 返回：我已收到你的输入「${content}」。`,
    usage: null,
    requestId,
  }
}

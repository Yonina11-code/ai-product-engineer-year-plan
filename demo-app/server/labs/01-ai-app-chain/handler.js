import { buildPrompt } from './build-prompt.js'
import { callDeepSeekModel } from './deepseek-model.js'
import { callMockModel } from './mock-model.js'
import { validateModelResult } from './validate-result.js'

export async function handleLab01Rewrite({
  request,
  response,
  readJsonBody,
  sendJson,
}) {
  try {
    const data = await readJsonBody(request)
    const originalText = data?.originalText?.trim()
    const provider = data?.provider === 'deepseek' ? 'deepseek' : 'mock'

    if (!originalText) {
      sendJson(response, 400, {
        message: '请输入需要改写的内容。',
      })
      return
    }

    console.log('\n--- LAB 01：收到用户输入 ---')
    console.log(originalText)

    const prompt = buildPrompt({
      originalText,
      audience: data?.audience,
      tone: data?.tone,
    })

    console.log('\n--- LAB 01：服务端构造的 Prompt ---')
    console.log(prompt)

    let modelResult
    let metadata = {
      provider: 'mock',
      model: 'teaching-mock',
      usage: null,
    }

    if (provider === 'deepseek') {
      const deepSeekResponse = await callDeepSeekModel({
        originalText,
        audience: data?.audience,
        tone: data?.tone,
      })
      modelResult = deepSeekResponse.result
      metadata = {
        provider: 'deepseek',
        ...deepSeekResponse.metadata,
      }
    } else {
      modelResult = await callMockModel({
        originalText,
        prompt,
      })
    }

    console.log(`\n--- LAB 01：${metadata.model} 返回 ---`)
    console.log(modelResult)

    const result = validateModelResult(modelResult)
    sendJson(response, 200, {
      ...result,
      metadata,
    })
  } catch (error) {
    console.error('\n--- LAB 01：请求失败 ---')
    console.error(error)

    sendJson(response, 500, {
      message: error instanceof Error ? error.message : '服务暂时不可用。',
    })
  }
}

import { createDeepSeekChatCompletion } from '../../shared/deepseek-client.js'

const stableResults = [
  '当前需求在现有条件下存在实现困难，建议先明确需求范围和实现条件，再评估可行方案。',
  '当前需求存在实现上的困难，建议我们先确认需求边界和前置条件，再讨论可行方案。',
  '基于现有条件，该需求暂时难以实现，建议先补充需求范围和约束，再进行评估。',
]

const balancedResults = [
  '从目前的信息来看，这项需求存在一定实现难度。建议我们先对齐需求目标、范围和限制条件，再共同确认可行的处理方式。',
  '当前方案在现有条件下较难直接落地。我们可以先梳理核心目标和实现约束，再评估是否需要调整方案。',
  '这个需求目前还有一些实现条件需要明确。建议先补充关键背景，再一起判断最合适的实现路径。',
  '现阶段直接实现可能存在风险。建议我们先确认优先级和验收范围，再给出更准确的技术评估。',
]

const diverseResults = [
  {
    text: '这个需求目前不具备直接落地条件。建议本周五前补齐业务规则，我们将在下周一提供新的技术方案。',
    addedInformation: ['擅自增加了时间承诺', '擅自承诺提供新方案'],
  },
  {
    text: '从现有架构和排期来看，该需求实现成本较高。建议产品侧重新评估优先级，并考虑缩小首期范围。',
    addedInformation: ['用户没有提供架构和排期信息'],
  },
  {
    text: '当前需求存在较大实现难度。为了保证项目进度，建议先明确核心目标，再共同讨论可以落地的替代方案。',
    addedInformation: ['增加了项目进度方面的推断'],
  },
  {
    text: '这个方向值得继续讨论，但目前的需求描述还不足以支持技术实现。建议先补充边界条件，再进行可行性评审。',
    addedInformation: [],
  },
  {
    text: '以目前的信息还无法确认该需求是否可行。建议先补充关键场景和约束，我们再给出更可靠的评估。',
    addedInformation: [],
  },
]

function sample(array, count) {
  const copy = [...array]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[target]] = [copy[target], copy[index]]
  }

  return copy.slice(0, count)
}

function buildResults(temperature) {
  if (temperature <= 0.3) {
    return stableResults.map((text, index) => ({
      id: index + 1,
      text,
      addedInformation: [],
    }))
  }

  if (temperature <= 0.7) {
    return sample(balancedResults, 3).map((text, index) => ({
      id: index + 1,
      text,
      addedInformation: [],
    }))
  }

  return sample(diverseResults, 3).map((result, index) => ({
    id: index + 1,
    ...result,
  }))
}

export async function handleLab02Generate({
  request,
  response,
  readJsonBody,
  sendJson,
}) {
  try {
    const data = await readJsonBody(request)
    const originalText = data?.originalText?.trim()
    const temperature = Number(data?.temperature)
    const provider = data?.provider === 'deepseek' ? 'deepseek' : 'mock'

    if (!originalText) {
      sendJson(response, 400, {
        message: '请输入需要改写的内容。',
      })
      return
    }

    if (
      !Number.isFinite(temperature) ||
      temperature < 0 ||
      temperature > 1
    ) {
      sendJson(response, 400, {
        message: 'Temperature 必须在 0 到 1 之间。',
      })
      return
    }

    if (provider === 'deepseek') {
      const completion = await createDeepSeekChatCompletion({
        messages: [
          {
            role: 'system',
            content: `你是一名职场沟通改写助手。

任务：针对同一条用户原话生成 3 个不同的专业改写结果。

要求：
1. 保持原意和立场。
2. 不虚构原因、时间、排期或承诺。
3. 每个结果都应适合真实职场沟通。
4. 只输出 JSON，不要输出 Markdown。

JSON 格式：
{
  "results": [
    { "text": "结果一" },
    { "text": "结果二" },
    { "text": "结果三" }
  ]
}`,
          },
          {
            role: 'user',
            content: `请输出 json。\n\n用户原话：${originalText}`,
          },
        ],
        temperature,
        responseFormat: {
          type: 'json_object',
        },
        maxTokens: 700,
      })

      let parsed

      try {
        parsed = JSON.parse(completion.content)
      } catch {
        throw new Error('DeepSeek 返回的 JSON 无法解析。')
      }

      if (!Array.isArray(parsed?.results) || parsed.results.length < 3) {
        throw new Error('DeepSeek 没有返回三个有效结果。')
      }

      const results = parsed.results.slice(0, 3).map((item, index) => ({
        id: index + 1,
        text: typeof item?.text === 'string' ? item.text.trim() : '',
        addedInformation: [],
      }))

      if (results.some((item) => !item.text)) {
        throw new Error('DeepSeek 返回的结果存在空内容。')
      }

      sendJson(response, 200, {
        temperature,
        results,
        notice:
          '本轮结果来自 DeepSeek。是否存在无依据信息，需要你根据原始输入自行评测。',
        metadata: {
          provider: 'deepseek',
          model: completion.model,
          usage: completion.usage,
        },
      })
      return
    }

    sendJson(response, 200, {
      temperature,
      results: buildResults(temperature),
      notice:
        '这是教学模拟，用于观察生成倾向；真实模型的行为还受模型版本、Prompt 和参数等因素影响。',
      metadata: {
        provider: 'mock',
        model: 'teaching-mock',
        usage: null,
      },
    })
  } catch (error) {
    sendJson(response, 500, {
      message: error instanceof Error ? error.message : '服务暂时不可用。',
    })
  }
}

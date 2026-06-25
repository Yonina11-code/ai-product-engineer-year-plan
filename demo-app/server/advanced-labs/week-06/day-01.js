const lab = {
  "id": "W06D01",
  "week": "06",
  "day": "01",
  "title": "项目一：AI 职场沟通助手工程化版本",
  "dayTitle": "真实场景与边界",
  "dayGoal": "先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。",
  "phase": "阶段 1 项目验收",
  "path": "/advanced/week-06/day-01",
  "apiPath": "/api/advanced/week-06/day-01",
  "lessonPath": "/advanced-track/lessons/week-06/day-01.md",
  "reviewPath": "/advanced-track/reviews/week-06.md",
  "mode": "engineering",
  "build": "完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。",
  "skills": [
    "端到端闭环",
    "产品交互",
    "评测证据",
    "失败兜底",
    "项目表达"
  ],
  "proof": [
    "可演示项目",
    "30 条评测结果",
    "项目 README 与架构图"
  ],
  "interview": "我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。",
  "flowSteps": [
    "从真实问题开始：这个项目不是练 Prompt，而是证明你能把一个 AI 文本能力做成可用、可测、可复盘的小产品。",
    "确认前端入口：做一个像真实功能的页面：输入原话、选择目标语气、展示改写结果、解释改写原因、复制输出。",
    "画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。",
    "打开本日课程文件：advanced-track/lessons/week-06/day-01.md。",
    "本日不急着写完整功能，先确认这条链路为什么必须存在。",
    "重点看端到端链路是否清楚。"
  ],
  "codeFiles": [
    "demo-app/src/advanced-labs/days/week-06/day-01.vue",
    "demo-app/server/advanced-labs/week-06/day-01.js",
    "demo-app/server/index.js",
    "demo-app/server/shared/"
  ],
  "backendFocus": [
    "端到端接口设计",
    "DTO / ViewModel 边界",
    "错误码到 UI 状态映射",
    "最小验收接口",
    "本地部署"
  ],
  "acceptanceChecks": [
    "页面能说明今天的代码流程，而不是只展示概念。",
    "能指出至少一个服务端边界。",
    "能画出边界图。",
    "能说清今天为什么不是纯前端功能。",
    "本周证据至少推进一项：可演示项目"
  ]
}

function push(trace, step, status, detail) {
  trace.push({ step, status, detail })
}

function buildGatewayResult({ trace, input, strictMode }) {
  const shouldInspectFailureBoundary = Boolean(input.trim())
  push(trace, '页面入口', 'success', '用户先在当天页面输入模型调用场景。')
  push(trace, '服务端边界', 'success', '前端请求当天独立接口，API Key 不进入浏览器。')
  push(trace, 'Provider 分发', strictMode ? 'success' : 'warning', '服务端决定 mock / deepseek，并统一响应结构。')
  push(trace, '失败处理', shouldInspectFailureBoundary ? 'warning' : 'success', '无 Key、超时、Provider 错误都要归类。')
  return '今天重点不是 UI，而是看清 UI -> Day API -> Provider -> 统一响应的边界。'
}

function buildStreamingResult({ trace, input }) {
  push(trace, '用户输入', 'success', '页面保留原始输入，避免取消后丢失。')
  push(trace, '服务端流', 'success', 'SSE 逐段返回内容，前端不等完整结果。')
  push(trace, '取消生成', input.includes('取消') ? 'success' : 'warning', '需要 AbortController 或等价取消机制。')
  push(trace, '状态机', 'success', 'idle -> streaming -> done / cancelled / failed。')
  return 'Streaming 的核心是体验状态可控，不是单纯把文字一点点显示出来。'
}

function buildSchemaResult({ trace, input }) {
  try {
    const parsed = JSON.parse(input || '{}')
    const hasText = typeof parsed?.rewrittenText === 'string' && parsed.rewrittenText.trim()
    push(trace, 'JSON 解析', 'success', '模型原始输出至少是可解析 JSON。')
    push(trace, '字段校验', hasText ? 'success' : 'blocked', hasText ? 'rewrittenText 有效。' : '缺少有效 rewrittenText。')
    push(trace, '业务入口', hasText ? 'success' : 'warning', '只有校验后的结果才能进入页面展示。')
    return hasText ? '结构化输出通过最小校验。' : '模型有返回，但业务不可用，需要 repair 或降级。'
  } catch {
    push(trace, 'JSON 解析', 'blocked', '模型输出不是合法 JSON。')
    return '这类失败必须在服务端拦截，不能直接交给前端渲染。'
  }
}

function buildPromptRegistryResult({ trace, input }) {
  const hasVersion = /v\d+/i.test(input)
  push(trace, '任务路由', input.includes('task') || input.includes('任务') ? 'success' : 'warning', '前端传 taskType，不传完整 Prompt。')
  push(trace, '版本记录', hasVersion ? 'success' : 'warning', 'Prompt 变更必须有版本号和原因。')
  push(trace, '回归评测', 'success', '每次改 Prompt 都要跑样本集。')
  return 'Prompt Registry 解决的是可维护性、回滚和质量门禁。'
}

function buildEvalResult({ trace, input }) {
  const risky = /(保证|一定|下周|本周五|诊断|删除)/.test(input)
  push(trace, '样本覆盖', input.trim() ? 'success' : 'warning', '至少要覆盖真实用户输入。')
  push(trace, '风险样本', risky ? 'blocked' : 'success', risky ? '命中高风险表达，需要复核。' : '当前没有命中简单风险词。')
  push(trace, '质量门禁', 'success', '升级模型或 Prompt 前后要对比指标。')
  return '评测让 AI 功能从“感觉不错”变成可回归证据。'
}

function buildRagResult({ trace, input, strictMode }) {
  const asksEvidence = /(字段|接口|来源|引用|证据)/.test(input)
  push(trace, '查询理解', input.trim() ? 'success' : 'warning', '用户问题要转换成可检索查询。')
  push(trace, '召回证据', asksEvidence ? 'success' : 'warning', '候选 chunk 必须带 metadata 和来源。')
  push(trace, '拒答边界', strictMode ? 'success' : 'warning', '证据不足就拒答，不让模型补字段。')
  return 'RAG 页面要看证据、引用和拒答，不是只看最终回答像不像。'
}

function buildToolResult({ trace, input }) {
  const write = /(提交|删除|修改|创建|发送)/.test(input)
  push(trace, '工具意图', 'success', write ? '识别为写操作。' : '识别为只读查询。')
  push(trace, '参数校验', input.trim() ? 'success' : 'blocked', '模型生成的工具参数不能直接信任。')
  push(trace, '确认边界', write ? 'blocked' : 'success', write ? '写操作必须二次确认。' : '只读操作可以直接返回 Trace。')
  return write ? '工具调用被拦截：有副作用操作必须用户确认。' : '只读工具可以执行，但仍然要记录 Trace。'
}

function buildAgentResult({ trace, strictMode }) {
  push(trace, '任务拆解', 'success', '理解目标 -> 选择工具 -> 执行 -> 检查证据 -> 输出。')
  push(trace, '终止条件', strictMode ? 'success' : 'warning', '需要 maxSteps、成功条件和失败条件。')
  push(trace, 'Trace 回放', 'success', '每一步都要留下输入、工具、结果和判断。')
  return 'Agent 的核心不是自由，而是可观察、可终止、可回放。'
}

function buildMcpResult({ trace, input, strictMode }) {
  try {
    JSON.parse(input || '{}')
    push(trace, '参数 Schema', 'success', 'MCP Tool 参数必须先过 Schema。')
    push(trace, '服务端边界', 'success', '模型只能请求调用，真正权限在 MCP Server。')
    push(trace, '资源最小化', strictMode ? 'success' : 'warning', '只暴露任务需要的最小资源。')
    return 'MCP 页面要看工具契约、权限和资源边界。'
  } catch {
    push(trace, '参数 Schema', 'blocked', '参数不是有效 JSON。')
    return 'MCP Server 应拒绝非法参数，真实业务函数不能执行。'
  }
}

function buildObservabilityResult({ trace, input }) {
  push(trace, 'requestId', 'success', '用户反馈问题时可以定位到一次调用。')
  push(trace, '性能与成本', /(P95|秒|延迟|成本|token)/i.test(input) ? 'warning' : 'success', '记录耗时、token、provider 和错误类型。')
  push(trace, '质量抽样', 'success', '线上不能只看 200 状态码，还要看内容质量。')
  return 'AI 可观测性要同时看性能、成本、错误和质量。'
}

function buildProductResult({ trace, input, secondaryInput }) {
  const highRisk = /(药|诊断|自杀|伤害|治疗|抑郁)/.test(input)
  push(trace, '用户场景', input.trim() ? 'success' : 'warning', '先明确目标用户和使用边界。')
  push(trace, 'AI 必要性', secondaryInput.trim() ? 'success' : 'warning', '说明为什么规则或普通表单不够。')
  push(trace, '安全边界', highRisk ? 'blocked' : 'success', highRisk ? '触发高风险边界，需要拒答或升级。' : '当前未命中高风险词。')
  return '偏产品项目要证明你能定义边界，不只是生成温柔文案。'
}

function buildPortfolioResult({ trace, input }) {
  const signals = ['问题', '架构', '评测', '失败', '成本', '结果']
  const found = signals.filter((signal) => input.includes(signal))
  for (const signal of signals) {
    push(trace, signal, found.includes(signal) ? 'success' : 'warning', found.includes(signal) ? '已有证据。' : '建议补充。')
  }
  return '作品集要用证据讲，不堆技术名词。'
}

function buildResult({ input, secondaryInput, strictMode }) {
  const trace = []
  const context = { trace, input, secondaryInput, strictMode }
  const builders = {
    gateway: buildGatewayResult,
    streaming: buildStreamingResult,
    schema: buildSchemaResult,
    'prompt-registry': buildPromptRegistryResult,
    eval: buildEvalResult,
    rag: buildRagResult,
    tool: buildToolResult,
    agent: buildAgentResult,
    mcp: buildMcpResult,
    observability: buildObservabilityResult,
    product: buildProductResult,
    portfolio: buildPortfolioResult,
    engineering: buildGatewayResult,
  }
  const output = (builders[lab.mode] || buildGatewayResult)(context)
  return { trace, output }
}

export async function handleAdvancedW06D01({ readJsonBody, response, sendJson }) {
  try {
    const body = await readJsonBody()
    const input = typeof body?.input === 'string' ? body.input : ''
    const secondaryInput =
      typeof body?.secondaryInput === 'string' ? body.secondaryInput : ''
    const strictMode = body?.strictMode !== false
    const result = buildResult({ input, secondaryInput, strictMode })

    sendJson(response, 200, {
      labId: lab.id,
      apiPath: lab.apiPath,
      ...result,
    })
  } catch (error) {
    sendJson(response, 500, {
      labId: lab.id,
      message:
        error instanceof Error
          ? error.message
          : '当天服务端 Demo 执行失败。',
    })
  }
}

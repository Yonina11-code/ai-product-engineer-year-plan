import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const trackRoot = path.join(root, 'advanced-track')
const weeksRoot = path.join(trackRoot, 'weeks')
const lessonsRoot = path.join(trackRoot, 'lessons')
const reviewsRoot = path.join(trackRoot, 'reviews')

const dayPlan = [
  {
    day: '01',
    title: '真实场景与边界',
    goal: '先判断这个能力在真实产品里解决什么问题，以及前端、服务端、模型分别负责什么。',
  },
  {
    day: '02',
    title: '最小代码闭环',
    goal: '只写一条能跑通的端到端链路，优先把输入、服务端、模型或数据、输出串起来。',
  },
  {
    day: '03',
    title: '后端补点与可靠性',
    goal: '补上这周必须懂的后端基础，并处理超时、校验、权限、日志或失败兜底。',
  },
  {
    day: '04',
    title: '失败样本与评测',
    goal: '不要只看成功演示，构造失败样本，把问题归因到数据、模型、代码或产品边界。',
  },
  {
    day: '05',
    title: '作品集与面试表达',
    goal: '整理架构图、关键代码、日志、评测结果和一段能被面试追问的讲法。',
  },
]

const weeks = [
  {
    week: 1,
    phase: '阶段 1：AI 应用工程底座',
    title: 'AI Gateway：前端如何安全接入真实模型',
    realProblem: '前端不能直接把 API Key 暴露给浏览器，也不能把模型错误、超时、供应商差异全部丢给页面处理。本周你要做的是 AI 应用的服务端入口。',
    build: '在 demo-app 里做一个 Node AI Gateway：前端只请求自己的服务端，服务端支持 mock / DeepSeek Provider，统一返回格式、错误类型和 requestId。',
    frontendEntry: '用你熟悉的 Vue 页面发起请求、展示 loading / success / error，并观察 Network 里前端到底看不到哪些敏感信息。',
    backendBasics: ['Node HTTP 路由', '环境变量读取', 'Provider service 分层', '请求超时', '错误分类'],
    skills: ['AI Gateway', 'Provider 抽象', 'API Key 服务端隔离', '统一响应契约', 'requestId'],
    codeTasks: [
      '新增或整理 /api/ai/chat 接口，前端只调用自己的服务端。',
      '实现 mockProvider 和 deepseekProvider 的统一接口。',
      '给请求加 requestId、timeoutMs、错误类型和用户可见错误文案。',
    ],
    proof: ['一张 AI Gateway 边界图', '一次真实 DeepSeek 调用日志', '三类失败日志：无 Key、超时、Provider 错误'],
    interview: '我没有在前端直接调模型，而是在服务端做 Gateway，隔离 API Key，并统一 Provider、错误、日志和降级策略。',
  },
  {
    week: 2,
    phase: '阶段 1：AI 应用工程底座',
    title: 'Streaming：AI 响应慢时前端体验怎么做',
    realProblem: 'AI 不是普通接口，用户可能等 10 秒才看到完整结果。前端要处理首字延迟、流式输出、中途取消、重试和失败恢复。',
    build: '把上周 Gateway 扩展成流式输出：服务端通过 SSE 返回 token，前端实现 streaming / cancelled / failed / done 状态机。',
    frontendEntry: '你重点练的是状态机和交互体验：按钮什么时候禁用、取消后输入是否保留、失败后是否能重试。',
    backendBasics: ['SSE 响应头', 'ReadableStream 基础', 'AbortController', '连接断开处理', '首字延迟记录'],
    skills: ['SSE', '流式输出', '取消生成', '前端状态机', '首字延迟'],
    codeTasks: [
      '新增 /api/ai/stream 接口，先用 mock stream 跑通，再接真实 Provider。',
      '前端把完整 loading 改成 token 逐步展示。',
      '实现取消生成和重新生成，保留用户原始输入。',
    ],
    proof: ['流式输出录屏或截图', '取消生成的 Network / 日志证据', '状态机图：idle -> streaming -> done / cancelled / failed'],
    interview: 'AI 慢不是只加 loading，我会用流式输出降低感知等待，并用状态机保证取消、重试和失败恢复可控。',
  },
  {
    week: 3,
    phase: '阶段 1：AI 应用工程底座',
    title: '结构化输出：让模型结果能进入业务系统',
    realProblem: '模型输出一段自然语言很容易，但业务系统需要稳定字段。你要解决的是格式错误、字段缺失、内容不合格和自动修复。',
    build: '为一个职场沟通改写功能设计 JSON 输出契约，服务端用 Schema 校验，不合格时自动 repair 一次，仍失败就降级。',
    frontendEntry: '前端只展示已经校验过的结果，不直接相信模型原文；错误状态要能告诉用户是格式失败还是内容失败。',
    backendBasics: ['运行时 Schema 校验', 'JSON parse 防御', '错误码设计', '一次重试策略', '服务端字段契约'],
    skills: ['结构化输出', 'Schema 校验', 'Repair Prompt', '业务字段契约', '降级策略'],
    codeTasks: [
      '定义 rewriteResult schema：rewrittenText、tone、riskFlags、reason。',
      '服务端校验模型 JSON，失败后只 repair 一次。',
      '前端分别展示成功、格式失败、内容不合格和降级结果。',
    ],
    proof: ['Schema 文件或类型定义', '10 条格式失败样本', '修复前后对照日志'],
    interview: '我区分了格式正确、内容合格和业务成功，模型结果必须先过 Schema 和业务校验才能进入页面。',
  },
  {
    week: 4,
    phase: '阶段 1：AI 应用工程底座',
    title: 'Prompt Registry 与评测：不要把 Prompt 写成散落字符串',
    realProblem: '你已经知道 Prompt 会影响结果，真正需要学的是 Prompt 怎么版本化、怎么灰度、怎么回滚、怎么证明没有变差。',
    build: '实现 Prompt Registry：按 taskType 选择模板，记录版本和变更原因，并为职场改写功能建立第一批 30 条评测样本。',
    frontendEntry: '前端传 taskType 和用户输入，不传完整 Prompt；页面展示当前 promptVersion，便于调试和复盘。',
    backendBasics: ['配置与代码分离', '任务路由', '版本号设计', '评测脚本', '回归报告'],
    skills: ['Prompt Registry', 'Prompt Version', 'Eval Dataset', '回归测试', '灰度 / 回滚'],
    codeTasks: [
      '把 Prompt 从接口逻辑里抽到 registry。',
      '为 workplace_rewrite 准备 v1 / v2 两个版本。',
      '写最小评测脚本，对 30 条输入输出进行规则评分。',
    ],
    proof: ['Prompt Registry 代码', '30 条评测样本', 'v1 / v2 回归对比表'],
    interview: 'Prompt 在我的项目里不是玄学字符串，而是有任务路由、版本记录、评测集和回滚策略的工程配置。',
  },
  {
    week: 5,
    phase: '阶段 1：AI 应用工程底座',
    title: '会话、日志、成本：AI 功能上线前必须补的后端基础',
    realProblem: 'AI 功能上线后，最常见的问题是慢、贵、偶发失败、无法复盘。你需要能保存调用记录并定位问题。',
    build: '为前 4 周能力加调用日志：requestId、userInput 摘要、provider、model、耗时、token、错误类型、promptVersion。',
    frontendEntry: '前端展示 requestId，用户反馈问题时能把 requestId 给到开发定位。',
    backendBasics: ['日志模型设计', '简单持久化 JSON / SQLite 思路', 'token 与成本字段', '敏感信息脱敏', '请求追踪'],
    skills: ['调用日志', 'Token Usage', 'Cost Tracking', '脱敏', '问题复盘'],
    codeTasks: [
      '设计 ai_call_logs 数据结构，不保存完整敏感输入。',
      '每次模型调用都写入日志，失败也要写。',
      '做一个简单日志查看页面或命令，按 requestId 查询。',
    ],
    proof: ['调用日志样例', '一次失败 requestId 追踪记录', '成本 / 延迟统计截图或表格'],
    interview: '我不只看接口 200，还会记录模型、耗时、token、成本、错误类型和质量样本，用 requestId 复盘问题。',
  },
  {
    week: 6,
    phase: '阶段 1 项目验收',
    title: '项目一：AI 职场沟通助手工程化版本',
    realProblem: '这个项目不是练 Prompt，而是证明你能把一个 AI 文本能力做成可用、可测、可复盘的小产品。',
    build: '完成职场沟通助手 MVP：真实模型、结构化输出、Prompt Registry、评测集、日志、复制结果、失败降级。',
    frontendEntry: '做一个像真实功能的页面：输入原话、选择目标语气、展示改写结果、解释改写原因、复制输出。',
    backendBasics: ['端到端接口设计', 'DTO / ViewModel 边界', '错误码到 UI 状态映射', '最小验收接口', '本地部署'],
    skills: ['端到端闭环', '产品交互', '评测证据', '失败兜底', '项目表达'],
    codeTasks: [
      '把前 5 周能力收敛到一个完整页面和一个清晰 API。',
      '补齐 30 条评测样本和失败样本。',
      '整理 README：如何运行、如何验证、有什么边界。',
    ],
    proof: ['可演示项目', '30 条评测结果', '项目 README 与架构图'],
    interview: '我做的是一个可上线雏形：前端体验、服务端 Gateway、结构化校验、Prompt 版本、评测和日志都有闭环。',
  },
  {
    week: 7,
    phase: '阶段 2：RAG 工程',
    title: 'RAG 数据准备：文档解析、Chunk 与 Metadata',
    realProblem: 'RAG 失败很多时候不是模型问题，而是资料切错了、来源丢了、metadata 不够，导致回答无法追溯。',
    build: '建立一个小型接口契约知识库导入流程：导入 markdown / json 文档，切 chunk，写 metadata，保留来源位置。',
    frontendEntry: '你从前端开发痛点切入：字段来自哪个接口、类型是什么、哪个页面用过、来源在哪里。',
    backendBasics: ['文件读取', '数据清洗', 'chunk 策略', 'metadata 设计', '导入脚本'],
    skills: ['Document Ingestion', 'Chunk', 'Metadata', 'Source Trace', '接口契约知识库'],
    codeTasks: [
      '准备一批模拟接口文档和页面字段说明。',
      '写 ingest 脚本，把文档切成 chunk。',
      '每个 chunk 保留 docId、sourcePath、section、fieldName 等 metadata。',
    ],
    proof: ['导入脚本', 'chunk 样例', 'metadata 字段说明'],
    interview: 'RAG 不是把文档扔进向量库，我会先设计 chunk 和 metadata，保证答案能追溯到来源。',
  },
  {
    week: 8,
    phase: '阶段 2：RAG 工程',
    title: '检索实现：关键词、向量与混合召回',
    realProblem: '真实用户不会按文档原字段名提问，纯关键词和纯向量都会失败。你要学会比较召回效果。',
    build: '实现关键词检索、向量检索和混合召回，针对接口字段问题输出候选 chunk 和得分。',
    frontendEntry: '前端做一个检索调试台：输入问题后展示候选文档、分数、metadata 和被选中的上下文。',
    backendBasics: ['embedding 调用', '向量相似度', 'topK', '关键词索引', '召回结果合并'],
    skills: ['Embedding', 'Vector Search', 'Keyword Search', 'Hybrid Search', '检索调试'],
    codeTasks: [
      '先实现本地关键词检索，保证可跑。',
      '再接 embedding，保存向量并做 topK 检索。',
      '实现 hybrid merge，展示每条候选的来源和分数。',
    ],
    proof: ['三种检索结果对比', '10 条失败查询归因', '检索调试页面截图'],
    interview: '我能解释检索失败来自哪里，并知道什么时候关键词比向量更可靠，什么时候需要混合召回。',
  },
  {
    week: 9,
    phase: '阶段 2：RAG 工程',
    title: '可信回答：引用、拒答与冲突证据',
    realProblem: 'RAG 项目最怕模型拿到一点资料就开始补全。接口字段、类型、来源不明确时必须拒答或追问。',
    build: '让接口契约问答必须带引用；证据不足时拒答；证据冲突时输出不确定原因和待确认字段。',
    frontendEntry: '页面不能只展示答案，还要展示引用来源、chunk 片段和“不确定”的原因。',
    backendBasics: ['上下文拼装', '引用结构', '拒答规则', '冲突检测', '答案后校验'],
    skills: ['Grounded Answer', 'Citation', 'Refusal', 'Conflict Handling', '字段不猜测'],
    codeTasks: [
      '回答结构增加 answer、citations、confidence、unknownFields。',
      '证据不足时返回拒答，不让模型自由补字段。',
      '实现引用点击或来源展示，能看到原始 chunk。',
    ],
    proof: ['有引用回答案例', '拒答案例', '冲突证据案例'],
    interview: '我做 RAG 时不会让模型猜字段，证据不足就拒答或追问，并把引用展示给用户。',
  },
  {
    week: 10,
    phase: '阶段 2：RAG 工程',
    title: 'RAG 评测：把“效果还行”变成指标',
    realProblem: 'RAG Demo 很容易看起来能用，但一换问题就失败。你要建立能反复跑的评测集和失败归因。',
    build: '准备 50 条接口契约问答评测，区分检索失败、引用错误、生成错误、资料缺失和应该拒答。',
    frontendEntry: '做一个评测结果页或表格，能看到每条样本的问题、期望、实际、引用和失败类型。',
    backendBasics: ['评测数据格式', '批量运行脚本', '指标计算', '失败归因', '回归对比'],
    skills: ['Retrieval Eval', 'Answer Eval', 'Citation Eval', 'Failure Taxonomy', '回归指标'],
    codeTasks: [
      '整理 50 条 eval cases，覆盖字段来源、类型、枚举值、未知字段。',
      '写批量评测脚本，输出 JSON / markdown 报告。',
      '至少优化一轮检索或回答规则，并记录指标变化。',
    ],
    proof: ['50 条 RAG 评测集', '失败分类表', '优化前后指标'],
    interview: '我不用“感觉不错”讲 RAG，而是用检索命中、答案正确、引用正确和拒答准确率讲。',
  },
  {
    week: 11,
    phase: '阶段 2 项目验收',
    title: '项目二：前端接口契约 RAG 助手',
    realProblem: '这是最贴合你前端背景的核心项目：把你对字段契约、接口联调、页面排查的经验变成 AI 助手。',
    build: '完成一个接口契约 RAG 助手：能查字段来源、类型、枚举、页面使用点；不能确定时拒答或追问。',
    frontendEntry: '做一个真实可演示的查询页面，展示答案、引用、未知字段、相关页面和失败原因。',
    backendBasics: ['RAG API 分层', '知识库更新流程', '缓存策略', '权限边界', '项目 README'],
    skills: ['接口契约助手', 'RAG 闭环', '字段来源', '引用定位', '未知追问'],
    codeTasks: [
      '把 W7-W10 能力收敛成一个完整项目。',
      '补齐 50 条评测与 5 个失败案例。',
      '整理项目故事：为什么这是前端转 AI 的优势项目。',
    ],
    proof: ['可演示 RAG 项目', '50 条评测报告', '字段引用截图与架构图'],
    interview: '这个项目证明我不是只会调模型，而是能把 AI 用在前端真实工程痛点：接口字段、契约和排查效率。',
  },
  {
    week: 12,
    phase: '阶段 3：Tool / Agent / MCP',
    title: 'Tool Calling：模型建议，程序裁决',
    realProblem: 'Tool Calling 不是让模型直接执行函数，而是让模型提出工具调用意图，再由程序做参数校验、权限判断和执行。',
    build: '给接口契约助手增加两个只读工具：lookupApiField 和 searchCodeReference，工具参数必须过 Schema。',
    frontendEntry: '前端展示工具调用 Trace：模型为什么选这个工具、传了什么参数、工具返回了什么。',
    backendBasics: ['Tool Schema', '参数校验', '只读工具', '工具结果归一化', 'Trace 记录'],
    skills: ['Tool Calling', 'Tool Schema', '参数校验', '只读工具', 'Trace'],
    codeTasks: [
      '定义 lookupApiField 工具输入输出。',
      '定义 searchCodeReference 工具输入输出。',
      '前端展示工具调用 Trace，而不是只展示最终答案。',
    ],
    proof: ['两个工具定义', '异常参数拒绝记录', '工具调用 Trace 截图'],
    interview: '我不会直接相信模型生成的工具参数，工具执行前必须经过 Schema、权限和业务规则校验。',
  },
  {
    week: 13,
    phase: '阶段 3：Tool / Agent / MCP',
    title: '写操作边界：确认、幂等与审计',
    realProblem: '一旦工具有写操作，风险就完全不同。删除、修改、发送、创建都必须有确认、幂等和审计。',
    build: '实现一个模拟写工具 createDevTask，只允许生成待确认任务，不允许模型直接提交最终结果。',
    frontendEntry: '前端必须出现二次确认面板：展示将要执行的动作、参数、影响范围和取消按钮。',
    backendBasics: ['写操作权限', '幂等键', '审计日志', '二次确认 token', '副作用隔离'],
    skills: ['Write Tool', 'Human Confirmation', 'Idempotency', 'Audit Log', '副作用边界'],
    codeTasks: [
      '实现 createDevTaskDraft，只生成草稿。',
      '实现 confirmDevTask，必须携带 confirmationId。',
      '记录 audit log：谁、何时、确认了什么。',
    ],
    proof: ['写操作确认流程截图', '重复提交防护日志', '审计日志样例'],
    interview: '我会把只读工具和写工具分开，写操作必须用户确认、幂等防重复，并留下审计日志。',
  },
  {
    week: 14,
    phase: '阶段 3：Tool / Agent / MCP',
    title: 'Workflow vs Agent：什么时候不该用 Agent',
    realProblem: '很多任务用固定 workflow 更稳定。只有当下一步依赖中间结果、流程不固定时，才考虑 Agent。',
    build: '同一个“生成开发清单”任务分别做 workflow 版和 agent loop 版，对比可控性、可测试性和失败边界。',
    frontendEntry: '前端展示两种模式的执行步骤，让你直观看到固定流程和 Agent 动态决策的差异。',
    backendBasics: ['状态机', 'Agent Loop', 'maxSteps', '终止条件', '可回放 Trace'],
    skills: ['Workflow', 'Agent Loop', 'State Machine', 'Trace', '终止条件'],
    codeTasks: [
      '实现固定 workflow：检索 -> 生成清单 -> 校验 -> 输出。',
      '实现受限 Agent：最多 5 步，只能调用只读工具。',
      '对比两种模式的失败样本和可测试性。',
    ],
    proof: ['两种实现对比', 'Agent Trace 日志', '死循环防护案例'],
    interview: '我不会为了炫技乱用 Agent，能写死流程就用 workflow，只有流程依赖中间结果时才用受限 Agent。',
  },
  {
    week: 15,
    phase: '阶段 3：Tool / Agent / MCP',
    title: 'MCP Server：把你的工具标准化暴露给 AI',
    realProblem: 'MCP 不是另一个模型，而是把工具和资源用统一协议提供给 AI 客户端。它适合封装公司内部查询能力。',
    build: '用 Node 写一个最小 MCP Server，暴露 lookupApiField 工具和 api-doc resource。',
    frontendEntry: '前端仍然通过你的应用使用能力，但你要理解 MCP Server 在架构中位于工具服务层。',
    backendBasics: ['MCP Tool', 'MCP Resource', 'JSON Schema', '最小权限暴露', '本地调试'],
    skills: ['MCP Server', 'Tool', 'Resource', 'Schema', '权限边界'],
    codeTasks: [
      '实现一个最小 MCP Server。',
      '把 lookupApiField 封装成 MCP Tool。',
      '只暴露必要资源，非法参数要拒绝。',
    ],
    proof: ['最小 MCP Server 代码', '工具调用截图或日志', '非法参数拒绝记录'],
    interview: 'MCP 和普通 API 的关系是：普通 API 给业务系统用，MCP 把受控工具和资源以标准方式给 AI 客户端用。',
  },
  {
    week: 16,
    phase: '阶段 3 项目验收',
    title: '项目三：MCP + RAG + Tool 综合接口助手',
    realProblem: '这一周把 RAG、Tool、Agent 和 MCP 串成一个真正能讲清楚的综合项目。',
    build: '让助手通过 RAG 找证据，通过 Tool 查询结构化字段，通过受限 Agent 决定是否继续查，并把工具封装成 MCP。',
    frontendEntry: '前端重点展示完整 Trace：检索了什么、调用了什么工具、为什么拒答或继续查。',
    backendBasics: ['多能力编排', 'Trace 数据结构', '错误传播', '权限分层', '综合项目验收'],
    skills: ['RAG + Tool', '受限 Agent', 'MCP 封装', 'Trace', '综合架构'],
    codeTasks: [
      '整合 RAG 检索、lookupApiField 工具和 Agent workflow。',
      '输出完整 Trace，能回放每一步。',
      '整理综合项目架构图和失败样本。',
    ],
    proof: ['综合 Demo', '多工具 Trace', '项目架构图与失败样本'],
    interview: '我能讲清一个 AI 系统里模型、RAG、Tool、Agent、MCP 分别解决什么问题，以及为什么不混用。',
  },
  {
    week: 17,
    phase: '阶段 4：产品化与安全',
    title: 'AI 产品边界：睡眠 / 情绪助手为什么难',
    realProblem: '情绪和睡眠助手适合你的兴趣，但也有高风险边界：不能诊断、不能替代医生、不能处理危机不升级。',
    build: '设计 AI 睡眠 / 情绪教练 MVP 的产品边界：目标用户、输入输出、禁止回答、危机场景、隐私策略。',
    frontendEntry: '前端做用户日志录入、周总结、建议展示和安全提示，不做医疗诊断 UI 暗示。',
    backendBasics: ['用户数据最小化', '敏感内容分类', '安全策略路由', '拒答 / 升级', '隐私删除'],
    skills: ['AI Product Boundary', 'Safety Policy', 'Crisis Escalation', '隐私最小化', '非医疗建议'],
    codeTasks: [
      '定义 sleep_log / mood_log 最小数据结构。',
      '实现高风险输入识别，命中后走安全提示。',
      '写产品边界文档：能做什么，不能做什么。',
    ],
    proof: ['产品边界文档', '高风险样本测试', '安全提示截图'],
    interview: '我做 AI 产品时会先定义边界，尤其在健康和情绪场景里，安全策略和隐私最小化是功能的一部分。',
  },
  {
    week: 18,
    phase: '阶段 4 项目验收',
    title: '项目四：AI 睡眠 / 情绪教练 MVP',
    realProblem: '这是偏 AI 产品工程师方向的项目，重点证明你能把用户场景、AI 能力、工程边界和安全策略结合起来。',
    build: '完成一个非医疗化 AI 教练 MVP：日志录入、周总结、建议生成、用户反馈、安全拒答、调用日志。',
    frontendEntry: '前端做成完整产品感：今日记录、趋势摘要、建议卡片、反馈按钮、安全提示。',
    backendBasics: ['用户上下文组装', '历史摘要', '反馈数据', '安全分类', '上线前验收'],
    skills: ['AI Product MVP', '个性化上下文', '用户反馈', '安全边界', '产品验证'],
    codeTasks: [
      '实现日志录入和历史摘要输入。',
      '模型生成周总结和建议卡片，必须经过安全规则。',
      '加入用户反馈：有用 / 不准确 / 不安全。',
    ],
    proof: ['可演示 MVP', '10 条用户反馈样本', '安全与失败测试报告'],
    interview: '这个项目证明我不只是写 AI 接口，还能判断产品是否需要 AI、如何控制风险、如何收集反馈迭代。',
  },
  {
    week: 19,
    phase: '阶段 5：上线与作品集',
    title: '部署、监控与成本：作品集也要像真实项目',
    realProblem: '求职项目如果只能本地跑，可信度会弱。你至少要能讲清部署、环境变量、日志、成本和线上故障排查。',
    build: '为核心项目整理部署方案和监控面板：环境变量、日志查看、错误率、延迟、token、成本估算。',
    frontendEntry: '前端展示一个简单运营 / 调试面板：调用次数、失败率、平均延迟、成本估算。',
    backendBasics: ['部署环境变量', 'CORS', '限流', '日志查询', '成本估算', '故障复盘'],
    skills: ['Deployment', 'Observability', 'Rate Limit', 'Cost', 'Incident Review'],
    codeTasks: [
      '整理本地和部署环境变量说明。',
      '实现最小监控数据展示。',
      '写一次故障复盘：慢、错、贵或失败。',
    ],
    proof: ['部署说明', '监控 / 日志截图', '一次故障复盘文档'],
    interview: '我能讲 AI 功能上线后看哪些指标：延迟、错误、token、成本、质量抽样和用户反馈。',
  },
  {
    week: 20,
    phase: '阶段 5：求职验收',
    title: '作品集、简历与 45 分钟项目答辩',
    realProblem: '最终目标是换工作，所以你要把项目包装成招聘方能判断能力的证据，而不是一堆学习笔记。',
    build: '整理作品集首页、三个核心项目页、简历项目描述、30 个面试追问和一次 45 分钟模拟答辩。',
    frontendEntry: '作品集页面本身也要体现前端能力：结构清楚、交互顺、证据可点开。',
    backendBasics: ['项目 README 标准', '架构图表达', '指标展示', '面试追问准备', '技术取舍复盘'],
    skills: ['Portfolio', 'Resume', 'Interview', 'Architecture Storytelling', '项目答辩'],
    codeTasks: [
      '整理项目首页：问题、方案、架构、证据、失败和下一步。',
      '写 AI Engineer 和 AI Product Engineer 两版简历项目描述。',
      '准备 30 个追问，用自己的项目回答。',
    ],
    proof: ['作品集首页', '两版简历项目描述', '45 分钟模拟答辩稿'],
    interview: '我能把前端经验转化成 AI 应用工程优势：体验、接口契约、状态机、可靠性、评测和产品边界。',
  },
]

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function emptyDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
  }
  fs.mkdirSync(dir, { recursive: true })
}

function weekNumber(week) {
  return String(week).padStart(2, '0')
}

function list(items) {
  return items.map((item) => `- ${item}`).join('\n')
}

function checklist(items) {
  return items.map((item) => `- [ ] ${item}`).join('\n')
}

function makeWeekPage(item) {
  const number = weekNumber(item.week)
  return `# W${number}：${item.title}

阶段：${item.phase}

## 为什么这周适合你

${item.realProblem}

你是有经验的前端，所以本周不会停留在概念解释，而是从“一个真实 AI 功能如何进入现有前端系统”开始。

## 本周要构建什么

${item.build}

## 前端切入点

${item.frontendEntry}

## 本周必须补的后端基础

${list(item.backendBasics)}

## 本周核心能力

${list(item.skills)}

## 一周节奏（每天 2～3 小时）

${dayPlan
  .map(
    ({ day, title, goal }) =>
      `- [Day ${day}：${title}](../lessons/week-${number}/day-${day}.md) — ${goal}`,
  )
  .join('\n')}

## 本周代码任务

${checklist(item.codeTasks)}

## 本周交付证据

${checklist(item.proof)}

## 面试讲法

${item.interview}

## 通过标准

- 能跑出端到端最小闭环；
- 能说清前端、服务端、模型、数据各自边界；
- 有失败样本和处理策略；
- 有日志、评测、截图、Trace 或架构图证据；
- 能把本周能力写进作品集项目，而不是只背概念。
`
}

function makeDayTasks(item, day) {
  const handlers = {
    '01': [
      `用一句话写清楚真实问题：${item.realProblem}`,
      '画出前端、服务端、模型 / 数据、验证层之间的边界。',
      `写清楚前端切入点：${item.frontendEntry}`,
      `列出本周必须补的后端基础：${item.backendBasics.join('、')}。`,
      '列出本周不做什么，避免范围失控。',
    ],
    '02': [
      item.codeTasks[0],
      '只跑通一条成功链路，不追求完整产品。',
      '前端必须通过自己的服务端接口进入 AI 能力。',
      '记录一次成功请求的输入、输出、requestId 或 Trace。',
    ],
    '03': [
      item.codeTasks[1],
      `补一个后端基础点：${item.backendBasics.slice(0, 2).join(' / ')}。`,
      '把错误、空结果、超时、非法参数或权限问题纳入服务端处理。',
      '把用户可见错误文案和开发者日志区分开。',
    ],
    '04': [
      item.codeTasks[2],
      '准备至少 10 条样本，覆盖正常、边界、失败和恶意输入。',
      '每次只改一个变量，记录结果差异。',
      '把失败归因到数据、检索、模型、代码或产品约束。',
    ],
    '05': [
      '整理本周架构图、关键代码、日志、截图和评测证据。',
      '写一段 30 秒版本和 3 分钟版本的面试讲法。',
      `用自己的项目表达这句话：${item.interview}`,
      '明确下周要继承的代码和要还的技术债。',
    ],
  }
  return handlers[day]
}

function makeSpecialIntro(item, day) {
  if (item.week !== 1 || day !== '01') return ''

  return `## 开课前先把四个词串起来

你已经认识真实模型、RAG、Agent、MCP 这些名词，现在要解决的是“什么时候用谁，以及它们怎么串”。

先用这个判断表：

| 能力 | 解决什么问题 | 什么时候用 | 什么时候不要用 |
| --- | --- | --- | --- |
| 真实模型 | 生成、改写、总结、判断开放文本 | 任务需要语言理解或生成 | 需要确定事实但没有资料时 |
| RAG | 先找资料，再基于资料回答 | 模型需要你的私有文档、接口契约、代码知识 | 只是改写语气、总结用户输入时 |
| Tool / MCP | 让 AI 调用受控外部能力 | 需要查系统、读文件、调接口、执行动作 | 模型自己回答就够时 |
| Agent | 根据中间结果动态决定下一步 | 流程不固定，需要多步查证 | 固定流程能完成时 |
| Multi-Agent | 多个角色长期协作 | 大任务确实有不同职责和独立状态 | 一个 Agent 或 workflow 能完成时 |
| Skill | 固化长期复用的做事规则 | 规则稳定、可复用、希望每次都遵守 | 临时任务或一次性业务参数 |

最重要的口诀：

\`\`\`text
能写死流程，就不要 Agent；
能一个 Agent 完成，就不要 Multi-Agent；
需要执行动作，才做 Tool / MCP；
需要查资料，才做 RAG；
需要长期复用的做事规范，才放 Skill。
\`\`\`

以前端接口契约助手为例：

- RAG：查接口文档、代码片段、历史需求；
- Tool / MCP：提供 lookupApiField、searchCodeReference、readFile 这类受控工具；
- Skill：字段不能猜、不允许多字段兜底、一个前端字段只对应一个明确后端字段；
- Workflow / Agent：理解问题 -> 查契约 -> 查代码 -> 判断是否明确 -> 不明确追问 -> 明确给方案；
- Multi-Agent：只有任务大到需要不同角色长期协作时才拆，例如接口契约 Agent、代码引用 Agent、测试风险 Agent。

所以第一周先做 AI Gateway。它是后面所有能力的入口：没有稳定的模型调用边界，RAG、Agent、MCP 都只是能演示但不可靠的玩具。

`
}

function makeLessonPage(item, dayItem) {
  const number = weekNumber(item.week)
  const tasks = makeDayTasks(item, dayItem.day)
  return `# W${number} Day ${dayItem.day}：${dayItem.title}

本周主题：${item.title}

建议时间：2～3 小时

## 今天的目标

${dayItem.goal}

${makeSpecialIntro(item, dayItem.day)}## 今天不学什么

- 不学概念名词堆砌；
- 不重复基础前端知识；
- 不为了炫技引入暂时用不上的框架；
- 不做和求职项目无关的玩具功能。

## 真实任务背景

${item.realProblem}

本周构建目标：

> ${item.build}

## 前端怎么入手

${item.frontendEntry}

## 今天要完成

${checklist(tasks)}

## 今天要补的后端知识

${list(item.backendBasics)}

> 只补到能完成今天任务，不要求一次学成后端工程师。

## 工程约束

- 每次只扩展一个明确能力；
- 前端不直接持有模型 API Key；
- 服务端要处理失败、空响应、格式错误、超时和非法参数；
- 不确定的接口字段、数据类型、业务含义不能猜；
- 涉及 RAG、Tool、Agent、MCP 的能力必须留下 Trace 或可验证证据；
- 结论优先沉淀通用规律，不把单个 Demo 案例当成全部知识。

## 产出物

${list(item.proof)}

## 今日复盘问题

1. 今天这项能力解决了真实 AI 项目里的什么问题？
2. 前端负责什么？服务端负责什么？模型或数据层负责什么？
3. 今天补的后端知识为什么是必要的？
4. 如果模型、检索或工具调用失败，用户会看到什么，开发者能看到什么？
5. 这项能力能怎样写进你的求职项目？

## 写入位置

把今天结论和你问我的问题写入：

\`advanced-track/lessons/week-${number}/day-${dayItem.day}.md\`

周总结写入：

\`advanced-track/reviews/week-${number}.md\`

## 学习问答记录

### Q1：我学完今天后，最低通过标准是什么？

直接结论：不是“看懂概念”，而是能跑出或画出一条可验证链路，并能解释失败时怎么处理。

工程解释：AI 应用和普通 CRUD 最大的差异在于不确定性。模型可能慢、错、空、格式乱、成本高，所以每一天都必须留下运行证据或失败证据。

对应知识点：端到端闭环、服务端边界、失败兜底、日志 / Trace、面试证据。
`
}

function makeReviewPage(item) {
  const number = weekNumber(item.week)
  return `# W${number} 复盘：${item.title}

## 本周投入时间

-

## 本周完成的工程证据

${checklist(item.proof)}

## 本周补齐的后端基础

${item.backendBasics.map((basic) => `- [ ] ${basic}`).join('\n')}

## 核心架构图

\`\`\`mermaid
flowchart LR
  A["User / Vue UI"] --> B["Your Server API"]
  B --> C["AI / RAG / Tool Layer"]
  C --> D["Validation / Safety / Eval"]
  D --> E["User-visible Result"]
  B --> F["Logs / Trace / Cost"]
\`\`\`

## 成功链路

- 输入：
- 服务端处理：
- AI / 数据层处理：
- 输出：
- 证据：

## 失败案例

- 现象：
- 原因：
- 修复或兜底：
- 下次如何提前发现：

## 可面试表达

### 30 秒版本


### 3 分钟版本


### 可能被追问

1.
2.
3.

## 下周继承

-
`
}

function makeIndex() {
  return `# 前端老手转 AI 应用工程实战 Track

适用对象：6～7 年前端经验，已有服务端基础，但缺少 AI 应用工程实战闭环。

目标岗位：AI Product Engineer / AI Application Engineer / 偏技术 AI 产品经理。

节奏：每天 2～3 小时，每周 5 天。总长度 20 周。可以压缩或拉长，目标不是刷周数，而是拿到能面试的项目证据。

## 这版课程为什么调整

你已经不需要“Prompt 不同输出不同”这种入门内容。你真正缺的是：

- 前端如何接入真实模型；
- 哪些能力必须放服务端；
- RAG、Tool、Agent、MCP 在一个项目里怎么串；
- 如何做日志、评测、失败样本和作品集；
- 如何把前端经验转成 AI 应用工程优势。

## 学习原则

- 每周做一个真实工程切片；
- 每周补一个必要后端基础点；
- 每天都要有代码、日志、Trace、评测或架构证据；
- 不追求概念完整性，追求项目闭环；
- 能写死流程就不使用 Agent，能一个 Agent 完成就不拆 Multi-Agent；
- 涉及字段契约不猜测、不多字段兜底、不把模型回答当事实。

## 周计划

${weeks
  .map((item) => {
    const number = weekNumber(item.week)
    return `- [W${number}：${item.title}](./weeks/week-${number}.md) — ${item.phase}`
  })
  .join('\n')}

## 最终应具备的证据

- 一个真实模型 Gateway / Streaming / 结构化输出工程底座；
- 一个带 Prompt Registry、日志和评测集的 AI 职场沟通助手；
- 一个前端接口契约 RAG 助手；
- 一个 MCP + RAG + Tool + 受限 Agent 综合 Demo；
- 一个偏产品方向的 AI 睡眠 / 情绪教练 MVP；
- 一套作品集、简历项目描述、面试问答和 45 分钟答辩稿。
`
}

function getDemoMode(item) {
  const text = `${item.phase} ${item.title}`
  if (text.includes('Gateway')) return 'gateway'
  if (text.includes('Streaming')) return 'streaming'
  if (text.includes('结构化')) return 'schema'
  if (text.includes('Prompt')) return 'prompt-registry'
  if (text.includes('评测')) return 'eval'
  if (text.includes('RAG') || text.includes('检索') || text.includes('Chunk') || text.includes('引用')) return 'rag'
  if (text.includes('Tool Calling') || text.includes('写操作')) return 'tool'
  if (text.includes('Agent') || text.includes('Workflow')) return 'agent'
  if (text.includes('MCP')) return 'mcp'
  if (text.includes('部署') || text.includes('监控') || text.includes('成本')) return 'observability'
  if (text.includes('睡眠') || text.includes('情绪') || text.includes('产品边界')) return 'product'
  if (text.includes('作品集') || text.includes('简历') || text.includes('答辩')) return 'portfolio'
  return 'engineering'
}

function getModeFiles(mode) {
  const files = {
    gateway: [
      'demo-app/server/index.js',
      'demo-app/server/ai-gateway/handleChat.js',
      'demo-app/server/providers/mockProvider.js',
      'demo-app/server/providers/deepseekProvider.js',
      '.env',
    ],
    streaming: [
      'demo-app/server/index.js',
      'demo-app/server/streaming/streamResponse.js',
      'demo-app/server/streaming/abortController.js',
    ],
    schema: [
      'demo-app/server/schemas/rewriteResult.js',
      'demo-app/server/services/repairModelOutput.js',
      'demo-app/server/services/validateModelOutput.js',
    ],
    'prompt-registry': [
      'demo-app/server/prompts/registry.js',
      'demo-app/server/evals/workplace-rewrite.cases.json',
      'demo-app/server/evals/runEval.js',
    ],
    eval: [
      'demo-app/server/evals/cases.json',
      'demo-app/server/evals/runEval.js',
      'advanced-track/reviews/',
    ],
    rag: [
      'demo-app/server/rag/ingest.js',
      'demo-app/server/rag/search.js',
      'demo-app/server/rag/answer.js',
      'demo-app/server/rag/eval-cases.json',
    ],
    tool: [
      'demo-app/server/tools/registry.js',
      'demo-app/server/tools/auditLog.js',
      'demo-app/server/tools/validateToolInput.js',
    ],
    agent: [
      'demo-app/server/agent/workflow.js',
      'demo-app/server/agent/agentLoop.js',
      'demo-app/server/agent/trace.js',
    ],
    mcp: [
      'demo-app/mcp/server.js',
      'demo-app/mcp/tools/lookupApiField.js',
      'demo-app/mcp/resources/apiDocs.js',
    ],
    observability: [
      'demo-app/server/logs/aiCallLogs.js',
      'demo-app/server/metrics/cost.js',
      'demo-app/server/metrics/latency.js',
    ],
    product: [
      'demo-app/server/product/safetyPolicy.js',
      'demo-app/server/product/userLogs.js',
      'demo-app/server/product/riskClassifier.js',
    ],
    portfolio: [
      'portfolio/',
      'advanced-track/reviews/',
      'README.md',
    ],
    engineering: [
      'demo-app/server/index.js',
      'demo-app/server/shared/',
    ],
  }

  return files[mode] ?? files.engineering
}

function makeFlowSteps(item, dayItem, mode) {
  const dayFlows = {
    '01': [
      `从真实问题开始：${item.realProblem}`,
      `确认前端入口：${item.frontendEntry}`,
      '画出 UI -> Server API -> AI / Data Layer -> Validation -> Result 的边界。',
      `打开本日课程文件：advanced-track/lessons/week-${weekNumber(item.week)}/day-${dayItem.day}.md。`,
      '本日不急着写完整功能，先确认这条链路为什么必须存在。',
    ],
    '02': [
      '从当天 Vue 页面触发一次用户输入。',
      '前端调用自己的服务端 API，而不是直接请求模型供应商。',
      `服务端执行第一条代码任务：${item.codeTasks[0]}`,
      '服务端返回统一响应，前端展示成功或失败状态。',
      '记录一次成功链路的 requestId / Trace / Network 证据。',
    ],
    '03': [
      `继续执行第二条代码任务：${item.codeTasks[1]}`,
      `补后端基础：${item.backendBasics.slice(0, 2).join(' / ')}。`,
      '给空输入、非法参数、超时、Provider 异常增加服务端处理。',
      '前端只展示用户能理解的错误，开发日志保留技术细节。',
      '确认失败链路不会让页面卡死或吞掉用户输入。',
    ],
    '04': [
      `继续执行第三条代码任务：${item.codeTasks[2]}`,
      '准备至少 10 条正常、边界、失败和恶意输入。',
      '运行样本并记录每条结果。',
      '把失败归因到数据、检索、模型、代码或产品边界。',
      '只改一个变量再复测，避免不知道是哪次修改生效。',
    ],
    '05': [
      '收集本周架构图、关键代码、日志、Trace、截图或评测报告。',
      '把本周能力写成 30 秒版本和 3 分钟版本。',
      `围绕这句话组织面试表达：${item.interview}`,
      '标记下周要继承的代码和暂时不处理的技术债。',
      '如果没有可验证证据，本周不算通过。',
    ],
  }

  const modeReminder = {
    gateway: '重点看 API Key 是否只在服务端，以及 Provider 错误是否被统一归类。',
    streaming: '重点看流式状态是否可取消、可重试、可恢复。',
    schema: '重点看模型输出是否先过 Schema，再进入页面。',
    'prompt-registry': '重点看 Prompt 是否从业务代码中抽离，并能按版本评测。',
    eval: '重点看评测样本是否能重复运行，而不是手工感觉。',
    rag: '重点看答案是否有证据来源，证据不足是否拒答。',
    tool: '重点看工具参数是否校验，写操作是否需要确认。',
    agent: '重点看 Agent 是否有 maxSteps、终止条件和可回放 Trace。',
    mcp: '重点看 MCP 暴露的是最小工具和资源，不是把系统全开放。',
    observability: '重点看 requestId、耗时、token、成本和错误类型是否能串起来。',
    product: '重点看安全边界、隐私最小化和高风险输入处理。',
    portfolio: '重点看证据是否能被面试官快速检查。',
    engineering: '重点看端到端链路是否清楚。',
  }

  return [...dayFlows[dayItem.day], modeReminder[mode]]
}

function makeAcceptanceChecks(item, dayItem) {
  const common = [
    '页面能说明今天的代码流程，而不是只展示概念。',
    '能指出至少一个服务端边界。',
  ]

  const dayChecks = {
    '01': [
      '能画出边界图。',
      '能说清今天为什么不是纯前端功能。',
    ],
    '02': [
      '能跑通一条成功链路。',
      '能在 Network 或日志里找到一次请求证据。',
    ],
    '03': [
      '能触发至少一个失败分支。',
      '用户提示和开发日志没有混在一起。',
    ],
    '04': [
      '至少记录 10 条样本。',
      '每个失败都有归因。',
    ],
    '05': [
      '能讲出 30 秒版本。',
      '有本周可检查证据。',
    ],
  }

  return [...common, ...dayChecks[dayItem.day], `本周证据至少推进一项：${item.proof[0]}`]
}

ensureDir(trackRoot)
emptyDir(weeksRoot)
emptyDir(lessonsRoot)
emptyDir(reviewsRoot)

for (const item of weeks) {
  const number = weekNumber(item.week)
  const weekLessonsRoot = path.join(lessonsRoot, `week-${number}`)
  ensureDir(weekLessonsRoot)
  fs.writeFileSync(path.join(weeksRoot, `week-${number}.md`), makeWeekPage(item))
  fs.writeFileSync(path.join(reviewsRoot, `week-${number}.md`), makeReviewPage(item))
  for (const day of dayPlan) {
    fs.writeFileSync(
      path.join(weekLessonsRoot, `day-${day.day}.md`),
      makeLessonPage(item, day),
    )
  }
}

fs.writeFileSync(path.join(trackRoot, 'README.md'), makeIndex())

const advancedLabs = weeks.flatMap((item) => {
  const number = weekNumber(item.week)
  return dayPlan.map((dayItem) => {
    const mode = getDemoMode(item)
    return {
      id: `W${number}D${dayItem.day}`,
      week: number,
      day: dayItem.day,
      title: item.title,
      dayTitle: dayItem.title,
      dayGoal: dayItem.goal,
      phase: item.phase,
      path: `/advanced/week-${number}/day-${dayItem.day}`,
      apiPath: `/api/advanced/week-${number}/day-${dayItem.day}`,
      lessonPath: `/advanced-track/lessons/week-${number}/day-${dayItem.day}.md`,
      reviewPath: `/advanced-track/reviews/week-${number}.md`,
      mode,
      build: item.build,
      skills: item.skills,
      proof: item.proof,
      interview: item.interview,
      flowSteps: makeFlowSteps(item, dayItem, mode),
      codeFiles: [
        `demo-app/src/advanced-labs/days/week-${number}/day-${dayItem.day}.vue`,
        `demo-app/server/advanced-labs/week-${number}/day-${dayItem.day}.js`,
        ...getModeFiles(mode),
      ],
      backendFocus: item.backendBasics,
      acceptanceChecks: makeAcceptanceChecks(item, dayItem),
    }
  })
})

const advancedLabsRoot = path.join(root, 'demo-app', 'src', 'advanced-labs')
ensureDir(advancedLabsRoot)
fs.writeFileSync(
  path.join(advancedLabsRoot, 'generated-advanced-labs.ts'),
  `import type { AdvancedLabDefinition } from './registry'

// 本文件由 scripts/generate-advanced-job-track.mjs 生成。
// 修改高级轨道后，运行 npm run advanced:generate。
export const generatedAdvancedLabs: AdvancedLabDefinition[] = ${JSON.stringify(advancedLabs, null, 2)}
`,
)

const advancedDaysRoot = path.join(advancedLabsRoot, 'days')
emptyDir(advancedDaysRoot)

function makeStandaloneAdvancedLabVue(lab) {
  return `<script setup lang="ts">
import { ref } from 'vue'

type TraceStatus = 'success' | 'warning' | 'blocked'

interface TraceItem {
  step: string
  status: TraceStatus
  detail: string
}

const lab = ${JSON.stringify(lab, null, 2)}

const input = ref('')
const secondaryInput = ref('')
const strictMode = ref(true)
const output = ref('')
const trace = ref<TraceItem[]>([])
const isRunning = ref(false)
const errorMessage = ref('')

const modeNames: Record<string, string> = {
  gateway: 'AI Gateway 工程台',
  streaming: 'Streaming 体验台',
  schema: '结构化输出实验台',
  'prompt-registry': 'Prompt Registry 实验台',
  eval: '评测与质量门禁实验台',
  rag: 'RAG 工程实验台',
  tool: 'Tool Calling 权限实验台',
  agent: 'Agent Trace 实验台',
  mcp: 'MCP Server 实验台',
  observability: '可观测性实验台',
  product: '产品安全边界实验台',
  portfolio: '作品集面试实验台',
  engineering: 'AI 工程实验台',
}

const inputLabels: Record<string, string> = {
  gateway: '模型调用场景',
  streaming: '用户生成请求',
  schema: '模型原始输出',
  'prompt-registry': '任务类型与变更说明',
  eval: '待评测样本或输出',
  rag: '用户问题或文档片段',
  tool: '用户想执行的任务',
  agent: 'Agent 目标',
  mcp: 'MCP 工具参数',
  observability: '线上异常现象',
  product: '用户场景和风险',
  portfolio: '项目经历描述',
  engineering: '工程问题描述',
}

const placeholders: Record<string, string> = {
  gateway: '例如：用户请求 DeepSeek 改写一句工作消息，要求 8 秒超时、失败可降级。',
  streaming: '例如：生成一段较长建议，用户可能中途取消。',
  schema: '{"rewrittenText":"","reason":"缺少原文"}',
  'prompt-registry': '例如：workplace_rewrite v2 增加“不承诺排期”约束。',
  eval: '例如：我们保证下周一上线新方案。',
  rag: '例如：v2 用户详情接口的姓名字段是什么？',
  tool: '例如：提交删除用户 1001 的请求。',
  agent: '例如：根据接口契约生成开发清单，并标出未知字段。',
  mcp: '{"fieldName":"userName","version":"v2"}',
  observability: '例如：P95 延迟从 3 秒涨到 11 秒，错误率 8%。',
  product: '例如：用户连续失眠并询问是否需要吃药。',
  portfolio: '例如：我做了一个 RAG 助手，可以查询接口字段。',
  engineering: '描述今天要验证的 AI 工程问题。',
}

const modeName = modeNames[lab.mode] ?? 'AI 工程实验台'
const inputLabel = inputLabels[lab.mode] ?? '工程问题描述'
const placeholder = placeholders[lab.mode] ?? '描述今天要验证的 AI 工程问题。'

function push(step: string, status: TraceStatus, detail: string) {
  trace.value.push({ step, status, detail })
}

function runGatewayDemo() {
  push('页面入口', 'success', '用户先在当天页面输入模型调用场景。')
  push('服务端边界', 'success', '前端只请求 /api/ai/chat，API Key 不进入浏览器。')
  push('Provider 分发', strictMode.value ? 'success' : 'warning', '服务端决定 mock / deepseek，并统一响应结构。')
  push('失败处理', input.value.includes('超时') ? 'warning' : 'success', '无 Key、超时、Provider 错误都要归类。')
  output.value = '今天重点不是 UI，而是看清 UI -> Server API -> Provider -> 统一响应的边界。'
}

function runStreamingDemo() {
  push('用户输入', 'success', '页面保留原始输入，避免取消后丢失。')
  push('服务端流', 'success', 'SSE 逐段返回内容，前端不等完整结果。')
  push('取消生成', input.value.includes('取消') ? 'success' : 'warning', '需要 AbortController 或等价取消机制。')
  push('状态机', 'success', 'idle -> streaming -> done / cancelled / failed。')
  output.value = 'Streaming 的核心是体验状态可控，不是单纯把文字一点点显示出来。'
}

function runSchemaDemo() {
  try {
    const parsed = JSON.parse(input.value || '{}')
    const hasText = typeof parsed?.rewrittenText === 'string' && parsed.rewrittenText.trim()
    push('JSON 解析', 'success', '模型原始输出至少是可解析 JSON。')
    push('字段校验', hasText ? 'success' : 'blocked', hasText ? 'rewrittenText 有效。' : '缺少有效 rewrittenText。')
    push('业务入口', hasText ? 'success' : 'warning', '只有校验后的结果才能进入页面展示。')
    output.value = hasText ? '结构化输出通过最小校验。' : '模型有返回，但业务不可用，需要 repair 或降级。'
  } catch {
    push('JSON 解析', 'blocked', '模型输出不是合法 JSON。')
    output.value = '这类失败必须在服务端拦截，不能直接交给前端渲染。'
  }
}

function runPromptRegistryDemo() {
  const hasVersion = /v\\d+/i.test(input.value)
  push('任务路由', input.value.includes('task') || input.value.includes('任务') ? 'success' : 'warning', '前端传 taskType，不传完整 Prompt。')
  push('版本记录', hasVersion ? 'success' : 'warning', 'Prompt 变更必须有版本号和原因。')
  push('回归评测', 'success', '每次改 Prompt 都要跑样本集。')
  output.value = 'Prompt Registry 解决的是可维护性、回滚和质量门禁。'
}

function runEvalDemo() {
  const risky = /(保证|一定|下周|本周五|诊断|删除)/.test(input.value)
  push('样本覆盖', input.value.trim() ? 'success' : 'warning', '至少要覆盖真实用户输入。')
  push('风险样本', risky ? 'blocked' : 'success', risky ? '命中高风险表达，需要复核。' : '当前没有命中简单风险词。')
  push('质量门禁', 'success', '升级模型或 Prompt 前后要对比指标。')
  output.value = '评测让 AI 功能从“感觉不错”变成可回归证据。'
}

function runRagDemo() {
  const asksEvidence = /(字段|接口|来源|引用|证据)/.test(input.value)
  push('查询理解', input.value.trim() ? 'success' : 'warning', '用户问题要转换成可检索查询。')
  push('召回证据', asksEvidence ? 'success' : 'warning', '候选 chunk 必须带 metadata 和来源。')
  push('拒答边界', strictMode.value ? 'success' : 'warning', '证据不足就拒答，不让模型补字段。')
  output.value = 'RAG 页面要看证据、引用和拒答，不是只看最终回答像不像。'
}

function runToolDemo() {
  const write = /(提交|删除|修改|创建|发送)/.test(input.value)
  push('工具意图', 'success', write ? '识别为写操作。' : '识别为只读查询。')
  push('参数校验', input.value.trim() ? 'success' : 'blocked', '模型生成的工具参数不能直接信任。')
  push('确认边界', write ? 'blocked' : 'success', write ? '写操作必须二次确认。' : '只读操作可以直接返回 Trace。')
  output.value = write ? '工具调用被拦截：有副作用操作必须用户确认。' : '只读工具可以执行，但仍然要记录 Trace。'
}

function runAgentDemo() {
  push('任务拆解', 'success', '理解目标 -> 选择工具 -> 执行 -> 检查证据 -> 输出。')
  push('终止条件', strictMode.value ? 'success' : 'warning', '需要 maxSteps、成功条件和失败条件。')
  push('Trace 回放', 'success', '每一步都要留下输入、工具、结果和判断。')
  output.value = 'Agent 的核心不是自由，而是可观察、可终止、可回放。'
}

function runMcpDemo() {
  try {
    JSON.parse(input.value || '{}')
    push('参数 Schema', 'success', 'MCP Tool 参数必须先过 Schema。')
    push('服务端边界', 'success', '模型只能请求调用，真正权限在 MCP Server。')
    push('资源最小化', strictMode.value ? 'success' : 'warning', '只暴露任务需要的最小资源。')
    output.value = 'MCP 页面要看工具契约、权限和资源边界。'
  } catch {
    push('参数 Schema', 'blocked', '参数不是有效 JSON。')
    output.value = 'MCP Server 应拒绝非法参数，真实业务函数不能执行。'
  }
}

function runObservabilityDemo() {
  push('requestId', 'success', '用户反馈问题时可以定位到一次调用。')
  push('性能与成本', /(P95|秒|延迟|成本|token)/i.test(input.value) ? 'warning' : 'success', '记录耗时、token、provider 和错误类型。')
  push('质量抽样', 'success', '线上不能只看 200 状态码，还要看内容质量。')
  output.value = 'AI 可观测性要同时看性能、成本、错误和质量。'
}

function runProductDemo() {
  const highRisk = /(药|诊断|自杀|伤害|治疗|抑郁)/.test(input.value)
  push('用户场景', input.value.trim() ? 'success' : 'warning', '先明确目标用户和使用边界。')
  push('AI 必要性', secondaryInput.value.trim() ? 'success' : 'warning', '说明为什么规则或普通表单不够。')
  push('安全边界', highRisk ? 'blocked' : 'success', highRisk ? '触发高风险边界，需要拒答或升级。' : '当前未命中高风险词。')
  output.value = '偏产品项目要证明你能定义边界，不只是生成温柔文案。'
}

function runPortfolioDemo() {
  const signals = ['问题', '架构', '评测', '失败', '成本', '结果']
  const found = signals.filter((signal) => input.value.includes(signal))
  for (const signal of signals) {
    push(signal, found.includes(signal) ? 'success' : 'warning', found.includes(signal) ? '已有证据。' : '建议补充。')
  }
  output.value = '作品集要用证据讲，不堆技术名词。'
}

async function runDemo() {
  trace.value = []
  output.value = ''
  errorMessage.value = ''
  isRunning.value = true

  try {
    const response = await fetch(lab.apiPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: input.value,
        secondaryInput: secondaryInput.value,
        strictMode: strictMode.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.message || '当天服务端 Demo 执行失败。')
    }

    trace.value = data.trace ?? []
    output.value = data.output ?? ''
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : '当天服务端 Demo 执行失败。'
    trace.value = [
      {
        step: '服务端请求',
        status: 'blocked',
        detail: errorMessage.value,
      },
    ]
    output.value = '请确认 npm run demo 已启动，且当天服务端接口存在。'
  } finally {
    isRunning.value = false
  }
}
</script>

<template>
  <section class="advanced-lab-page">
    <RouterLink class="back-link" to="/">← 返回高级 Demo 列表</RouterLink>

    <header class="hero">
      <div>
        <p class="eyebrow">W{{ lab.week }} · Day {{ lab.day }} · {{ lab.phase }}</p>
        <h1>{{ lab.title }}</h1>
        <p>{{ lab.dayTitle }}：{{ lab.dayGoal }}</p>
      </div>
      <div class="mode-badge">{{ modeName }}</div>
    </header>

    <section class="flow-panel">
      <div class="flow-title">
        <div>
          <p class="eyebrow">TODAY CODE FLOW</p>
          <h2>今天这个页面背后的代码流程</h2>
        </div>
        <span>本页面请求当天独立服务端接口：{{ lab.apiPath }}</span>
      </div>

      <div class="flow-grid">
        <article class="card main-flow">
          <h3>执行链路</h3>
          <ol>
            <li v-for="step in lab.flowSteps" :key="step">{{ step }}</li>
          </ol>
        </article>

        <article class="card">
          <h3>重点文件</h3>
          <ul>
            <li v-for="file in lab.codeFiles" :key="file"><code>{{ file }}</code></li>
          </ul>
        </article>

        <article class="card">
          <h3>后端补点</h3>
          <ul>
            <li v-for="item in lab.backendFocus" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="card">
          <h3>验收动作</h3>
          <ul>
            <li v-for="item in lab.acceptanceChecks" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <div class="workbench">
      <section class="card control">
        <h2>本日 Demo 输入</h2>

        <label>
          <span>{{ inputLabel }}</span>
          <textarea v-model="input" rows="6" :placeholder="placeholder" />
        </label>

        <label v-if="lab.mode === 'product'" class="extra-field">
          <span>为什么 AI 是必要的？</span>
          <textarea
            v-model="secondaryInput"
            rows="3"
            placeholder="说明普通规则、表单或人工流程为什么不足"
          />
        </label>

        <label class="inline-control">
          <input v-model="strictMode" type="checkbox" />
          <span>启用严格工程边界</span>
        </label>

        <button type="button" :disabled="isRunning" @click="runDemo">
          {{ isRunning ? '运行中...' : \`运行 W\${lab.week} D\${lab.day} Demo\` }}
        </button>
      </section>

      <aside class="card task">
        <h2>今天要证明什么</h2>
        <p>{{ lab.build }}</p>
        <h3>课程文件</h3>
        <p>{{ lab.lessonPath }}</p>
        <h3>复盘文件</h3>
        <p>{{ lab.reviewPath }}</p>
        <h3>本周证据</h3>
        <ul>
          <li v-for="item in lab.proof" :key="item">{{ item }}</li>
        </ul>
        <h3>面试表达</h3>
        <p>{{ lab.interview }}</p>
      </aside>
    </div>

    <section v-if="trace.length || output" class="card result">
      <h2>运行证据</h2>
      <div class="trace-grid">
        <article
          v-for="item in trace"
          :key="\`\${item.step}-\${item.detail}\`"
          class="trace-card"
          :class="item.status"
        >
          <strong>{{ item.step }}</strong>
          <p>{{ item.detail }}</p>
        </article>
      </div>
      <div v-if="output" class="output-box">
        <strong>工程结论</strong>
        <p>{{ output }}</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.advanced-lab-page {
  display: grid;
  gap: 24px;
}

.back-link {
  width: fit-content;
  color: #5265d8;
  text-decoration: none;
}

.hero,
.flow-title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
}

.hero > div:first-child {
  max-width: 840px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #5769d8;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  font-size: clamp(30px, 5vw, 46px);
}

h2,
h3 {
  margin-top: 0;
}

.hero p:last-child,
.task p,
.task li,
.card li {
  color: #657086;
  line-height: 1.7;
}

.mode-badge {
  flex: none;
  padding: 10px 14px;
  border-radius: 999px;
  color: #4354c6;
  background: #edf0ff;
  font-weight: 800;
}

.card,
.flow-panel {
  padding: 24px;
  border: 1px solid #e2e6ef;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 50px rgba(30, 46, 80, 0.06);
}

.flow-panel {
  display: grid;
  gap: 18px;
}

.flow-title span {
  color: #657086;
  font-size: 13px;
}

.flow-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.8fr);
  gap: 14px;
}

.flow-grid .card {
  padding: 18px;
  background: #f8f9fc;
  box-shadow: none;
}

.main-flow {
  grid-row: span 3;
  background: #f3f5ff !important;
}

ol,
ul {
  margin: 0;
  padding-left: 20px;
}

code {
  color: #4354c6;
  font-size: 12px;
  word-break: break-all;
}

.workbench {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 20px;
  align-items: start;
}

.control {
  display: grid;
  gap: 20px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 700;
}

textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #cfd5e2;
  border-radius: 10px;
  resize: vertical;
  font: inherit;
  line-height: 1.6;
}

.inline-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.inline-control input {
  width: 18px;
  height: 18px;
}

button {
  border: 0;
  border-radius: 10px;
  padding: 13px 18px;
  color: #fff;
  background: #5365d8;
  cursor: pointer;
  font: inherit;
  font-weight: 800;
}

.task {
  position: sticky;
  top: 92px;
}

.task h3 {
  margin: 22px 0 8px;
}

.trace-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.trace-card {
  padding: 16px;
  border: 1px solid #e1e5ee;
  border-radius: 12px;
  background: #f8f9fc;
}

.trace-card p {
  margin-bottom: 0;
  color: #657086;
  line-height: 1.6;
}

.trace-card.success {
  border-color: #bfe6d2;
  background: #f1fbf6;
}

.trace-card.warning {
  border-color: #f0d4a9;
  background: #fff8ed;
}

.trace-card.blocked {
  border-color: #f0bdc3;
  background: #fff3f4;
}

.output-box {
  margin-top: 16px;
  padding: 18px;
  border-radius: 12px;
  background: #edf0ff;
}

.output-box p {
  margin-bottom: 0;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .workbench,
  .flow-grid {
    grid-template-columns: 1fr;
  }

  .main-flow {
    grid-row: auto;
  }

  .task {
    position: static;
  }
}

@media (max-width: 640px) {
  .hero,
  .flow-title {
    align-items: start;
    flex-direction: column;
  }
}
</style>
`
}

function handlerNameFor(lab) {
  return `handleAdvancedW${lab.week}D${lab.day}`
}

function makeStandaloneAdvancedServerHandler(lab) {
  const handlerName = handlerNameFor(lab)

  return `const lab = ${JSON.stringify(lab, null, 2)}

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
  const hasVersion = /v\\d+/i.test(input)
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

export async function ${handlerName}({ readJsonBody, response, sendJson }) {
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
`
}

for (const lab of advancedLabs) {
  const weekDir = path.join(advancedDaysRoot, `week-${lab.week}`)
  ensureDir(weekDir)
  fs.writeFileSync(
    path.join(weekDir, `day-${lab.day}.vue`),
    makeStandaloneAdvancedLabVue(lab),
  )
}

const advancedServerRoot = path.join(root, 'demo-app', 'server', 'advanced-labs')
emptyDir(advancedServerRoot)

for (const lab of advancedLabs) {
  const weekDir = path.join(advancedServerRoot, `week-${lab.week}`)
  ensureDir(weekDir)
  fs.writeFileSync(
    path.join(weekDir, `day-${lab.day}.js`),
    makeStandaloneAdvancedServerHandler(lab),
  )
}

const advancedApiRoutesSource = `// 本文件由 scripts/generate-advanced-job-track.mjs 生成。
// 每一天都有独立服务端 handler；修改课程后运行 npm run advanced:generate。
${advancedLabs
  .map(
    (lab) =>
      `import { ${handlerNameFor(lab)} } from './week-${lab.week}/day-${lab.day}.js'`,
  )
  .join('\n')}

export const advancedApiRoutes = new Map([
${advancedLabs
  .map(
    (lab) => `  ['${lab.apiPath}', ${handlerNameFor(lab)}],`,
  )
  .join('\n')}
])
`

fs.writeFileSync(
  path.join(advancedServerRoot, 'generated-advanced-api-routes.js'),
  advancedApiRoutesSource,
)

const routesSource = `// 本文件由 scripts/generate-advanced-job-track.mjs 生成。
// 每一天都有独立 Vue 文件；修改课程后运行 npm run advanced:generate。
export const advancedLabRoutes = [
${advancedLabs
  .map(
    (lab) => `  {
    path: '${lab.path}',
    name: 'advanced-${lab.id.toLowerCase()}',
    component: () => import('./days/week-${lab.week}/day-${lab.day}.vue'),
  },`,
  )
  .join('\n')}
]
`

fs.writeFileSync(
  path.join(advancedLabsRoot, 'generated-advanced-routes.ts'),
  routesSource,
)

console.log(`Generated advanced job track: ${weeks.length} weeks, ${weeks.length * dayPlan.length} daily lessons, ${advancedLabs.length} demo entries.`)

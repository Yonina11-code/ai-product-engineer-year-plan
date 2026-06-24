import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const trackRoot = path.join(root, 'advanced-track')
const weeksRoot = path.join(trackRoot, 'weeks')
const lessonsRoot = path.join(trackRoot, 'lessons')
const reviewsRoot = path.join(trackRoot, 'reviews')

const dayPlan = [
  ['01', '架构判断', '读代码、画边界、明确这项能力解决什么工程问题。'],
  ['02', '最小实现', '写一个能跑的薄切片，不追求大而全。'],
  ['03', '可靠性增强', '补错误处理、结构校验、边界条件和可观测信息。'],
  ['04', '评测与失败分析', '构造样本集，记录失败原因，避免只看成功演示。'],
  ['05', '作品集与面试表达', '沉淀架构图、代码证据、指标和三分钟讲法。'],
]

const weeks = [
  {
    week: 1,
    phase: 'AI 应用工程底座',
    title: '真实模型 Gateway 与调用边界',
    why: '你已经会写前端和接口，这周直接做真实模型调用的工程边界，而不是再讲 Prompt 是什么。',
    build: '在 demo-app 中完成一个可切换 Provider 的 AI Gateway：mock / DeepSeek，支持超时、错误归类、请求日志和敏感配置隔离。',
    skills: ['Provider 抽象', '服务端 API Key 管理', '超时与错误分类', '模型响应归一化'],
    proof: ['一张 AI Gateway 架构图', '一次真实模型调用记录', '三类失败错误截图或日志'],
    interview: '如果面试官问“你怎么把大模型接进现有前端系统”，你要能讲清为什么不在前端直接调模型。'
  },
  {
    week: 2,
    phase: 'AI 应用工程底座',
    title: 'Streaming、取消生成与体验状态机',
    why: 'AI 产品的体验差异不只是结果质量，还包括首字延迟、流式反馈、取消和重试。',
    build: '实现 SSE 流式输出、取消生成、重新生成和前端状态机。',
    skills: ['SSE', 'AbortController', '首字延迟', '加载/取消/失败状态'],
    proof: ['流式输出 Demo', '取消生成截图', '状态机说明'],
    interview: '讲清 AI 响应慢时，前端怎样设计体验，而不是只加 loading。'
  },
  {
    week: 3,
    phase: 'AI 应用工程底座',
    title: '结构化输出、Schema 与自动修复',
    why: '找工作时，“会调模型”不够，必须证明你能让模型输出进入业务系统。',
    build: '设计 JSON 输出契约、运行时校验、失败重试和一次自动修复流程。',
    skills: ['JSON Schema', '运行时校验', 'Repair Prompt', '业务字段契约'],
    proof: ['Schema 文件', '10 条格式失败样本', '修复前后对照'],
    interview: '讲清格式正确、内容合格、业务成功三者不是一回事。'
  },
  {
    week: 4,
    phase: 'AI 应用工程底座',
    title: 'Prompt Registry、版本管理与灰度',
    why: '你不需要学“Prompt 不同输出不同”，你需要学 Prompt 如何像工程配置一样被管理。',
    build: '实现 Prompt Registry：按 taskType 选择模板，记录版本、变更原因和回滚策略。',
    skills: ['Prompt 版本', '任务路由', '配置与代码分离', '灰度/回滚'],
    proof: ['Prompt Registry 代码', '版本变更记录', '一次回归对比'],
    interview: '讲清为什么 Prompt 不是散落在代码里的字符串。'
  },
  {
    week: 5,
    phase: 'AI 应用工程底座',
    title: '评测集、回归测试与质量门禁',
    why: 'AI 工程最值钱的能力之一，是把“感觉不错”变成可回归的质量标准。',
    build: '为一个 AI 功能建立 30 条评测集，跑自动评分和人工复核记录。',
    skills: ['Eval Dataset', '规则评分', '人工复核', 'CI 质量门禁'],
    proof: ['30 条评测样本', '评分脚本', '一次回归报告'],
    interview: '讲清你怎么证明一次 Prompt 或模型升级没有把功能改坏。'
  },
  {
    week: 6,
    phase: '项目一',
    title: '项目一：AI 职场沟通助手工程化重做',
    why: '这个项目不再是练 Prompt，而是练完整 AI 应用闭环。',
    build: '完成职场沟通助手 MVP：真实模型、结构化输出、评测集、复制结果、失败降级。',
    skills: ['端到端闭环', '真实用户输入', '可复制输出', '失败兜底'],
    proof: ['在线或本地演示', '30 条评测结果', '成本和延迟记录'],
    interview: '把这个项目讲成“我如何把不稳定模型变成可用产品功能”。'
  },
  {
    week: 7,
    phase: 'RAG 工程',
    title: '文档解析、Chunk 与 Metadata 设计',
    why: 'RAG 不是把文档丢进向量库，难点是数据工程和可追溯性。',
    build: '建立小型知识库导入流程：解析文档、切 chunk、写 metadata、保留来源定位。',
    skills: ['文档解析', 'Chunk 策略', 'Metadata', '来源追踪'],
    proof: ['导入脚本', 'chunk 样例', 'metadata 设计说明'],
    interview: '讲清 chunk 大小、重叠、来源字段为什么影响回答质量。'
  },
  {
    week: 8,
    phase: 'RAG 工程',
    title: 'Embedding、向量检索与混合召回',
    why: '你需要能解释检索失败来自哪里，而不是只说“向量库没搜到”。',
    build: '实现关键词检索、向量检索和混合召回对比。',
    skills: ['Embedding', '向量检索', '关键词召回', 'Hybrid Search'],
    proof: ['三种召回结果对照', '10 条失败查询归因', '召回策略说明'],
    interview: '讲清什么时候向量检索不如关键词检索。'
  },
  {
    week: 9,
    phase: 'RAG 工程',
    title: 'Query Rewrite、Rerank 与上下文选择',
    why: '真实用户不会按你的文档字段名提问，所以要处理口语化、缩写和多意图。',
    build: '实现 Query Rewrite、候选文档重排和上下文预算控制。',
    skills: ['查询改写', 'Rerank', '上下文预算', '多路召回合并'],
    proof: ['改写前后召回对比', 'Rerank Trace', '上下文裁剪规则'],
    interview: '讲清如何提升 RAG 命中率而不是盲目加更多文档。'
  },
  {
    week: 10,
    phase: 'RAG 工程',
    title: '引用、拒答与可信回答',
    why: '面试里 RAG 项目最容易被追问：你怎么防止它编？',
    build: '让回答必须带来源引用；证据不足时拒答；冲突证据时提示不确定。',
    skills: ['Grounded Answer', 'Citation', 'Refusal', '冲突证据处理'],
    proof: ['有引用回答', '拒答案例', '冲突证据案例'],
    interview: '讲清“有检索结果”不等于“可以回答”。'
  },
  {
    week: 11,
    phase: 'RAG 工程',
    title: 'RAG 评测：命中率、正确性与引用质量',
    why: 'RAG 项目没有评测，就只是 Demo；有评测，才像工程项目。',
    build: '构造 50 条 RAG 评测集，区分检索失败、生成失败和数据缺失。',
    skills: ['Retrieval Eval', 'Answer Eval', 'Citation Eval', '失败归因'],
    proof: ['50 条评测集', '失败分类表', '优化前后指标'],
    interview: '用指标讲 RAG 项目，而不是用“效果还不错”讲。'
  },
  {
    week: 12,
    phase: '项目二',
    title: '项目二：前端接口契约 RAG 助手',
    why: '这个项目贴合你的前端背景，能展示你对接口字段、契约和 AI 的结合能力。',
    build: '做一个接口契约助手：能查字段来源、类型、页面使用点；不确定时追问，不允许猜字段。',
    skills: ['代码/文档知识库', '字段契约', '引用定位', '未知追问'],
    proof: ['可演示项目', '50 条评测', '字段引用截图'],
    interview: '这是你的核心求职项目：AI + 前端工程经验的结合。'
  },
  {
    week: 13,
    phase: '工具调用与 Agent',
    title: 'Tool Calling：只读工具、写工具与权限边界',
    why: 'Agent 不是让模型乱调用函数，而是模型建议、程序裁决、权限兜底。',
    build: '实现查询类工具和写操作工具，加入参数校验、权限判断、用户确认。',
    skills: ['Tool Schema', '参数校验', '只读/写操作', '用户确认'],
    proof: ['两个工具定义', '写操作确认流程', '异常参数测试'],
    interview: '讲清为什么不能相信模型生成的工具参数。'
  },
  {
    week: 14,
    phase: '工具调用与 Agent',
    title: 'Workflow vs Agent：状态机、Trace 与终止条件',
    why: '企业更关心可控性。你要知道什么时候用固定 Workflow，什么时候才用 Agent。',
    build: '同一个任务分别实现 Workflow 和 Agent 版本，对比可测试性和失败边界。',
    skills: ['Workflow', 'Agent Loop', 'Trace', '终止条件'],
    proof: ['两种实现对比', 'Trace 日志', '死循环防护'],
    interview: '讲清 Agent 不是越自由越好。'
  },
  {
    week: 15,
    phase: '工具调用与 Agent',
    title: 'Agent 可靠性：幂等、重试、人工接管',
    why: '真实 Agent 最大问题是副作用和不可控行为。',
    build: '给 Agent 加入幂等键、最大步数、失败重试、人工接管和操作审计。',
    skills: ['幂等', '重试策略', '人工接管', '审计日志'],
    proof: ['重复提交防护', '失败恢复案例', '审计日志样例'],
    interview: '讲清你如何限制 Agent 的危险行为。'
  },
  {
    week: 16,
    phase: 'MCP',
    title: 'MCP Server：把现有能力封装给 AI 使用',
    why: 'MCP 的价值不是名词，而是把工具、资源和权限以标准方式暴露给模型客户端。',
    build: '用 Node 写一个最小 MCP Server，封装一个只读接口契约查询工具。',
    skills: ['MCP Tool', 'MCP Resource', 'Schema', '权限边界'],
    proof: ['最小 MCP Server', '工具调用截图', '错误参数拒绝记录'],
    interview: '讲清 MCP 和普通后端 API 的关系。'
  },
  {
    week: 17,
    phase: 'MCP',
    title: 'MCP + RAG + Tool 综合助手',
    why: '这一周把前面的能力串起来，形成一个够硬的综合案例。',
    build: '让助手通过 MCP 查询契约、通过 RAG 找文档、通过工具生成开发清单。',
    skills: ['MCP 集成', 'RAG 引用', '多工具编排', 'Trace'],
    proof: ['综合 Demo', '多工具 Trace', '失败样本'],
    interview: '讲清一个复杂 AI 功能的端到端架构。'
  },
  {
    week: 18,
    phase: '产品化与上线',
    title: '可观测性：日志、Token、成本、延迟与质量',
    why: '上线后你要知道 AI 功能为什么慢、为什么贵、为什么错。',
    build: '为项目加入请求日志、Token 统计、成本估算、错误率和质量抽样。',
    skills: ['Observability', 'Token Usage', 'Cost', 'Latency', 'Quality Sampling'],
    proof: ['监控面板或日志表', '成本记录', '一次故障归因'],
    interview: '讲清 AI 功能上线后你看哪些指标。'
  },
  {
    week: 19,
    phase: '产品化与上线',
    title: '安全、隐私与高风险边界',
    why: 'AI 项目进入健康、情绪、工作建议场景时，安全边界是硬要求。',
    build: '为一个助手设计敏感数据最小化、危机场景升级、免责声明和拒答策略。',
    skills: ['数据最小化', '安全策略', '危机升级', '隐私删除'],
    proof: ['安全边界文档', '高风险样本测试', '拒答截图'],
    interview: '讲清你如何避免 AI 产品伤害用户或制造合规风险。'
  },
  {
    week: 20,
    phase: '项目三',
    title: '项目三：AI 睡眠/情绪教练 MVP',
    why: '这是偏产品岗位的项目，展示你不只是会工程，还懂用户问题和风险边界。',
    build: '完成一个非医疗化建议助手：日志录入、周总结、建议生成、安全提示。',
    skills: ['产品定义', '个性化上下文', '非医疗边界', '用户反馈'],
    proof: ['可演示 MVP', '10 条用户反馈', '安全样本测试'],
    interview: '讲清你怎么判断一个 AI 产品是否真的需要 AI。'
  },
  {
    week: 21,
    phase: '求职作品集',
    title: '作品集工程化整理',
    why: '项目做完不等于能找工作，你要把证据整理成招聘方看得懂的页面。',
    build: '整理作品集首页：项目背景、架构图、关键代码、评测、成本、失败处理。',
    skills: ['项目叙事', '架构表达', '指标展示', '技术取舍'],
    proof: ['作品集首页', '两张架构图', '三段核心代码说明'],
    interview: '把项目从“我做了功能”讲成“我解决了问题”。'
  },
  {
    week: 22,
    phase: '求职作品集',
    title: 'AI 工程面试专项',
    why: '你需要准备的是 AI 工程追问：模型不稳定、RAG 失败、Agent 安全、成本监控。',
    build: '整理 30 个高频面试问答，并用自己的项目回答。',
    skills: ['技术表达', '项目追问', '架构权衡', '失败复盘'],
    proof: ['30 个问答', '三分钟项目介绍', '一次模拟面试记录'],
    interview: '用自己的项目回答，不背概念。'
  },
  {
    week: 23,
    phase: '求职作品集',
    title: '简历、岗位匹配与投递材料',
    why: '目标是换工作，所以最后必须落到简历和岗位匹配。',
    build: '改造简历项目描述，准备 AI Product Engineer / AI Engineer 两版表达。',
    skills: ['简历表达', 'JD 匹配', '项目量化', '能力定位'],
    proof: ['两版简历项目描述', '10 个岗位 JD 拆解', '投递优先级表'],
    interview: '讲清你从前端转 AI 的独特优势。'
  },
  {
    week: 24,
    phase: '毕业验收',
    title: '最终答辩与下一阶段计划',
    why: '最后一周不是学新知识，而是检查你是否真的能胜任新岗位。',
    build: '完成一次 45 分钟项目答辩：架构、代码、评测、产品、失败和下一步。',
    skills: ['答辩', '综合复盘', '能力矩阵', '下一阶段规划'],
    proof: ['答辩稿', '能力矩阵', '下一阶段学习计划'],
    interview: '这是把你送进面试状态的最后验收。'
  },
]

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function weekNumber(week) {
  return String(week).padStart(2, '0')
}

function makeWeekPage(item) {
  const number = weekNumber(item.week)
  return `# W${number}：${item.title}

阶段：${item.phase}

## 为什么学这个

${item.why}

## 本周要构建什么

${item.build}

## 本周核心能力

${item.skills.map((skill) => `- ${skill}`).join('\n')}

## 一周节奏（每天 2～3 小时）

${dayPlan
  .map(
    ([day, title, desc]) =>
      `- [Day ${day}：${title}](../lessons/week-${number}/day-${day}.md) — ${desc}`,
  )
  .join('\n')}

## 本周交付证据

${item.proof.map((proof) => `- [ ] ${proof}`).join('\n')}

## 面试讲法

${item.interview}

## 通过标准

- 能跑出最小闭环；
- 有失败样本和处理策略；
- 有日志、截图、测试或评测证据；
- 能用自己的项目解释这项能力；
- 不把概念讲成空话。
`
}

function makeLessonPage(item, [day, title, desc]) {
  const number = weekNumber(item.week)
  const daySpecific = {
    '01': [
      '画出这项能力在前端、服务端、模型、数据之间的边界。',
      '写出你认为最容易出问题的三个工程点。',
      '列出本周不会做的事，避免范围失控。',
    ],
    '02': [
      '只实现一条最小链路，不做完整产品。',
      '优先复用 demo-app 现有服务端和页面结构。',
      '把关键输入、输出和错误状态打通。',
    ],
    '03': [
      '补充校验、日志、异常处理和用户可见反馈。',
      '把魔法字符串、散落 Prompt 或临时逻辑收敛到可维护位置。',
      '记录一次失败链路，不只记录成功链路。',
    ],
    '04': [
      '准备至少 10 条样本，覆盖正常、边界、失败和恶意输入。',
      '每次只改一个变量，记录结果差异。',
      '把失败归因到数据、检索、模型、代码或产品约束。',
    ],
    '05': [
      '整理本周架构图、截图、日志和关键代码链接。',
      '写一段三分钟面试讲法。',
      '明确下周要继承和要丢弃的技术债。',
    ],
  }[day]

  return `# W${number} Day ${day}：${title}

本周主题：${item.title}

建议时间：2～3 小时

## 今天的目标

${desc}

## 今天不学什么

- 不学概念名词堆砌；
- 不重复你已经具备的基础前端知识；
- 不做和求职项目无关的玩具功能。

## 任务背景

${item.why}

本周构建目标：

> ${item.build}

## 今天要完成

${daySpecific.map((task) => `- [ ] ${task}`).join('\n')}

## 工程约束

- 每次只扩展一个明确能力；
- 真实模型、RAG、Agent、MCP 相关能力必须留下可验证证据；
- 不确定的接口字段、数据类型、业务含义不能猜；
- 所有 AI 输出都要考虑失败、空响应、格式错误和内容不合格；
- 结论优先沉淀通用规律，不把单个案例当成全部知识。

## 产出物

${item.proof.map((proof) => `- ${proof}`).join('\n')}

## 今日复盘问题

1. 今天这项能力解决了真实 AI 项目里的什么问题？
2. 它和普通前端 CRUD 最大的差异在哪里？
3. 如果模型、检索或工具调用失败，用户会看到什么？
4. 这项能力能怎样写进你的求职项目？
5. 面试官追问时，你准备用哪个证据回答？

## 写入位置

把今天结论写入：

\`advanced-track/reviews/week-${number}.md\`
`
}

function makeReviewPage(item) {
  const number = weekNumber(item.week)
  return `# W${number} 复盘：${item.title}

## 本周投入时间

-

## 本周完成的工程证据

${item.proof.map((proof) => `- [ ] ${proof}`).join('\n')}

## 核心架构图

\`\`\`mermaid
flowchart LR
  A["User / UI"] --> B["Server Boundary"]
  B --> C["AI Capability"]
  C --> D["Validation / Eval"]
  D --> E["User-visible Result"]
\`\`\`

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
  return `# 高级求职向 AI Engineer Track

适用对象：6～7 年前端经验，已有服务端基础，目标是能胜任 AI Product Engineer / AI Engineer / 偏技术 AI 产品岗位。

节奏：每天 2～3 小时，每周 5 天。总长度 24 周。可以压缩或拉长，不追求形式上的 48 周。

## 学习原则

- 跳过 AI 科普和低价值 Prompt 常识；
- 每周必须有工程证据；
- 每个项目都要能被面试追问；
- 技术学习服务于求职作品集；
- 学不会不是看懂概念，而是做不出可验证闭环。

## 周计划

${weeks
  .map((item) => {
    const number = weekNumber(item.week)
    return `- [W${number}：${item.title}](./weeks/week-${number}.md) — ${item.phase}`
  })
  .join('\n')}

## 最终应具备的证据

- 一个 AI Gateway / 模型调用工程底座；
- 一个带评测集的结构化输出项目；
- 一个前端接口契约 RAG 助手；
- 一个 Tool / Agent / MCP 综合 Demo；
- 一个偏产品的 AI 睡眠或情绪教练 MVP；
- 一套作品集、简历项目描述和模拟面试问答。
`
}

function getDemoMode(item) {
  const text = `${item.phase} ${item.title}`
  if (text.includes('Gateway')) return 'gateway'
  if (text.includes('Streaming')) return 'streaming'
  if (text.includes('Schema') || text.includes('结构化')) return 'schema'
  if (text.includes('Prompt Registry')) return 'prompt-registry'
  if (text.includes('评测')) return 'eval'
  if (text.includes('RAG') || text.includes('Embedding') || text.includes('Chunk') || text.includes('引用')) return 'rag'
  if (text.includes('Tool Calling')) return 'tool'
  if (text.includes('Agent') || text.includes('Workflow')) return 'agent'
  if (text.includes('MCP')) return 'mcp'
  if (text.includes('可观测')) return 'observability'
  if (text.includes('安全') || text.includes('睡眠') || text.includes('情绪')) return 'product'
  if (text.includes('作品集') || text.includes('面试') || text.includes('简历') || text.includes('答辩')) return 'portfolio'
  return 'engineering'
}

ensureDir(trackRoot)
ensureDir(weeksRoot)
ensureDir(lessonsRoot)
ensureDir(reviewsRoot)

for (const item of weeks) {
  const number = weekNumber(item.week)
  const weekLessonsRoot = path.join(lessonsRoot, `week-${number}`)
  ensureDir(weekLessonsRoot)
  fs.writeFileSync(path.join(weeksRoot, `week-${number}.md`), makeWeekPage(item))
  fs.writeFileSync(path.join(reviewsRoot, `week-${number}.md`), makeReviewPage(item))
  for (const day of dayPlan) {
    fs.writeFileSync(
      path.join(weekLessonsRoot, `day-${day[0]}.md`),
      makeLessonPage(item, day),
    )
  }
}

fs.writeFileSync(path.join(trackRoot, 'README.md'), makeIndex())

const advancedLabs = weeks.flatMap((item) => {
  const number = weekNumber(item.week)
  return dayPlan.map(([day, dayTitle, dayGoal]) => ({
    id: `W${number}D${day}`,
    week: number,
    day,
    title: item.title,
    dayTitle,
    dayGoal,
    phase: item.phase,
    path: `/advanced/week-${number}/day-${day}`,
    lessonPath: `/advanced-track/lessons/week-${number}/day-${day}.md`,
    reviewPath: `/advanced-track/reviews/week-${number}.md`,
    mode: getDemoMode(item),
    build: item.build,
    skills: item.skills,
    proof: item.proof,
    interview: item.interview,
  }))
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
ensureDir(advancedDaysRoot)

for (const lab of advancedLabs) {
  const weekDir = path.join(advancedDaysRoot, `week-${lab.week}`)
  ensureDir(weekDir)
  fs.writeFileSync(
    path.join(weekDir, `day-${lab.day}.vue`),
    `<script setup lang="ts">
import AdvancedLabWorkbench from '../../shared/AdvancedLabWorkbench.vue'
import type { AdvancedLabDefinition } from '../../registry'

const lab: AdvancedLabDefinition = ${JSON.stringify(lab, null, 2)}
</script>

<template>
  <AdvancedLabWorkbench :lab="lab" />
</template>
`,
  )
}

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

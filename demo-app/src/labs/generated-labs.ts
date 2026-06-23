import type { LabDefinition } from './registry'

// 本文件由 scripts/generate-full-curriculum.mjs 生成。
// 修改全年课程数据后，运行 npm run curriculum:generate。
export const generatedLabs: LabDefinition[] = [
  {
    "id": "03",
    "title": "上下文、Token 与对话记忆",
    "description": "给职场助手增加多轮上下文，并观察上下文过长的影响",
    "path": "/labs/week-03",
    "status": "available",
    "topics": [
      "Token 与上下文窗口",
      "多轮 messages",
      "上下文截断",
      "短期记忆策略"
    ],
    "module": "模型基础",
    "mode": "model",
    "practice": "给职场助手增加多轮上下文，并观察上下文过长的影响",
    "deliverable": "一张上下文策略表和三组对照实验",
    "lessonPath": "/lessons/week-03/day-03.md"
  },
  {
    "id": "04",
    "title": "流式输出与生成体验",
    "description": "在统一 Demo 中实现服务端到 Vue 的流式输出",
    "path": "/labs/week-04",
    "status": "available",
    "topics": [
      "SSE 与流式响应",
      "首字延迟",
      "中断生成",
      "流式错误处理"
    ],
    "module": "模型基础",
    "mode": "model",
    "practice": "在统一 Demo 中实现服务端到 Vue 的流式输出",
    "deliverable": "可中断的流式 Demo 和体验复盘",
    "lessonPath": "/lessons/week-04/day-03.md"
  },
  {
    "id": "05",
    "title": "Prompt 的基本结构",
    "description": "把职场助手 Prompt 拆成可维护模块",
    "path": "/labs/week-05",
    "status": "available",
    "topics": [
      "角色与任务",
      "上下文与约束",
      "输入分隔",
      "输出要求"
    ],
    "module": "Prompt Engineering",
    "mode": "prompt",
    "practice": "把职场助手 Prompt 拆成可维护模块",
    "deliverable": "Prompt v1 和组成说明",
    "lessonPath": "/lessons/week-05/day-03.md"
  },
  {
    "id": "06",
    "title": "Zero-shot、Few-shot 与示例设计",
    "description": "为三种沟通场景设计最少必要示例",
    "path": "/labs/week-06",
    "status": "available",
    "topics": [
      "Zero-shot",
      "Few-shot",
      "正例与反例",
      "示例污染"
    ],
    "module": "Prompt Engineering",
    "mode": "prompt",
    "practice": "为三种沟通场景设计最少必要示例",
    "deliverable": "无示例与有示例的对照结果",
    "lessonPath": "/lessons/week-06/day-03.md"
  },
  {
    "id": "07",
    "title": "Prompt 变量与模板管理",
    "description": "建立 Prompt Registry，并按 taskType 选择模板",
    "path": "/labs/week-07",
    "status": "available",
    "topics": [
      "模板变量",
      "任务 Prompt 路由",
      "版本号",
      "配置与代码分离"
    ],
    "module": "Prompt Engineering",
    "mode": "prompt",
    "practice": "建立 Prompt Registry，并按 taskType 选择模板",
    "deliverable": "可切换的 Prompt 注册表",
    "lessonPath": "/lessons/week-07/day-03.md"
  },
  {
    "id": "08",
    "title": "Prompt 注入与指令边界",
    "description": "构造注入测试并加固职场助手",
    "path": "/labs/week-08",
    "status": "available",
    "topics": [
      "指令优先级",
      "Prompt Injection",
      "数据与指令分隔",
      "敏感信息保护"
    ],
    "module": "Prompt Engineering",
    "mode": "prompt",
    "practice": "构造注入测试并加固职场助手",
    "deliverable": "十条注入测试与防护说明",
    "lessonPath": "/lessons/week-08/day-03.md"
  },
  {
    "id": "09",
    "title": "从感觉到评测集",
    "description": "为职场助手建立第一版评测集",
    "path": "/labs/week-09",
    "status": "available",
    "topics": [
      "测试样本设计",
      "正常与边界样本",
      "通过标准",
      "回归测试"
    ],
    "module": "AI 评测",
    "mode": "evaluation",
    "practice": "为职场助手建立第一版评测集",
    "deliverable": "不少于二十条评测样本",
    "lessonPath": "/lessons/week-09/day-03.md"
  },
  {
    "id": "10",
    "title": "结构化输出与 JSON Schema",
    "description": "让模型稳定返回业务对象",
    "path": "/labs/week-10",
    "status": "available",
    "topics": [
      "JSON Output",
      "Schema",
      "字段必填",
      "解析失败"
    ],
    "module": "可靠输出",
    "mode": "schema",
    "practice": "让模型稳定返回业务对象",
    "deliverable": "结构化结果和失败处理",
    "lessonPath": "/lessons/week-10/day-03.md"
  },
  {
    "id": "11",
    "title": "运行时校验与自动修复",
    "description": "增加模型结果验证器和一次修复流程",
    "path": "/labs/week-11",
    "status": "available",
    "topics": [
      "类型校验",
      "语义校验",
      "重试修复",
      "失败降级"
    ],
    "module": "可靠输出",
    "mode": "schema",
    "practice": "增加模型结果验证器和一次修复流程",
    "deliverable": "验证器、失败样本和重试记录",
    "lessonPath": "/lessons/week-11/day-03.md"
  },
  {
    "id": "12",
    "title": "项目一 MVP 与季度验收",
    "description": "完成 AI 职场沟通助手 MVP",
    "path": "/labs/week-12",
    "status": "available",
    "topics": [
      "MVP 边界",
      "端到端链路",
      "成本与延迟",
      "用户反馈"
    ],
    "module": "项目一",
    "mode": "project",
    "practice": "完成 AI 职场沟通助手 MVP",
    "deliverable": "可演示 MVP、30条评测和项目复盘",
    "lessonPath": "/lessons/week-12/day-03.md"
  },
  {
    "id": "13",
    "title": "Function Calling 入门",
    "description": "实现天气或日期类只读工具",
    "path": "/labs/week-13",
    "status": "available",
    "topics": [
      "工具定义",
      "参数 Schema",
      "模型选择工具",
      "执行结果回传"
    ],
    "module": "工具调用",
    "mode": "tool",
    "practice": "实现天气或日期类只读工具",
    "deliverable": "一次完整工具调用链路",
    "lessonPath": "/lessons/week-13/day-03.md"
  },
  {
    "id": "14",
    "title": "工具参数校验与错误处理",
    "description": "让错误参数无法进入真实工具",
    "path": "/labs/week-14",
    "status": "available",
    "topics": [
      "参数可信边界",
      "业务校验",
      "工具异常",
      "模型二次回答"
    ],
    "module": "工具调用",
    "mode": "tool",
    "practice": "让错误参数无法进入真实工具",
    "deliverable": "参数验证器和异常测试",
    "lessonPath": "/lessons/week-14/day-03.md"
  },
  {
    "id": "15",
    "title": "读操作与写操作的权限差异",
    "description": "设计查询和提交两类工具的权限流程",
    "path": "/labs/week-15",
    "status": "available",
    "topics": [
      "只读工具",
      "有副作用工具",
      "用户确认",
      "最小权限"
    ],
    "module": "工具调用",
    "mode": "tool",
    "practice": "设计查询和提交两类工具的权限流程",
    "deliverable": "工具权限矩阵",
    "lessonPath": "/lessons/week-15/day-03.md"
  },
  {
    "id": "16",
    "title": "工具结果、幂等与重试",
    "description": "模拟重复提交并阻止二次副作用",
    "path": "/labs/week-16",
    "status": "available",
    "topics": [
      "幂等键",
      "重复调用",
      "超时重试",
      "结果去重"
    ],
    "module": "工具调用",
    "mode": "tool",
    "practice": "模拟重复提交并阻止二次副作用",
    "deliverable": "幂等实验和重试策略",
    "lessonPath": "/lessons/week-16/day-03.md"
  },
  {
    "id": "17",
    "title": "Workflow 与 Agent 的区别",
    "description": "把同一需求分别实现成 Workflow 和 Agent 方案",
    "path": "/labs/week-17",
    "status": "available",
    "topics": [
      "固定工作流",
      "模型决策",
      "适用边界",
      "可测试性"
    ],
    "module": "Agent",
    "mode": "agent",
    "practice": "把同一需求分别实现成 Workflow 和 Agent 方案",
    "deliverable": "两种架构对比文档",
    "lessonPath": "/lessons/week-17/day-03.md"
  },
  {
    "id": "18",
    "title": "任务拆解与状态管理",
    "description": "实现一个可观察的多步骤任务流程",
    "path": "/labs/week-18",
    "status": "available",
    "topics": [
      "Plan",
      "Step",
      "状态机",
      "中间结果"
    ],
    "module": "Agent",
    "mode": "agent",
    "practice": "实现一个可观察的多步骤任务流程",
    "deliverable": "步骤状态面板和执行日志",
    "lessonPath": "/lessons/week-18/day-03.md"
  },
  {
    "id": "19",
    "title": "Agent 循环与终止条件",
    "description": "实现带最大步数的简单 Agent Loop",
    "path": "/labs/week-19",
    "status": "available",
    "topics": [
      "观察-行动循环",
      "最大步数",
      "成功条件",
      "死循环防护"
    ],
    "module": "Agent",
    "mode": "agent",
    "practice": "实现带最大步数的简单 Agent Loop",
    "deliverable": "正常终止和异常终止测试",
    "lessonPath": "/lessons/week-19/day-03.md"
  },
  {
    "id": "20",
    "title": "Agent 记忆与上下文压缩",
    "description": "为任务 Agent 增加可控记忆",
    "path": "/labs/week-20",
    "status": "available",
    "topics": [
      "工作记忆",
      "长期记忆",
      "摘要压缩",
      "隐私边界"
    ],
    "module": "Agent",
    "mode": "agent",
    "practice": "为任务 Agent 增加可控记忆",
    "deliverable": "记忆策略和删除机制",
    "lessonPath": "/lessons/week-20/day-03.md"
  },
  {
    "id": "21",
    "title": "Agent 可观测性与评测",
    "description": "记录一次 Agent 的完整执行轨迹",
    "path": "/labs/week-21",
    "status": "available",
    "topics": [
      "Trace",
      "工具调用日志",
      "步骤成功率",
      "失败归因"
    ],
    "module": "Agent",
    "mode": "agent",
    "practice": "记录一次 Agent 的完整执行轨迹",
    "deliverable": "Trace 页面和十条评测",
    "lessonPath": "/lessons/week-21/day-03.md"
  },
  {
    "id": "22",
    "title": "MCP 核心概念",
    "description": "使用一个现有 MCP Server 并观察协议边界",
    "path": "/labs/week-22",
    "status": "available",
    "topics": [
      "Client 与 Server",
      "Tool",
      "Resource",
      "Prompt"
    ],
    "module": "MCP",
    "mode": "mcp",
    "practice": "使用一个现有 MCP Server 并观察协议边界",
    "deliverable": "MCP 调用记录和概念说明",
    "lessonPath": "/lessons/week-22/day-03.md"
  },
  {
    "id": "23",
    "title": "编写最小 MCP Server",
    "description": "把一个本地只读能力封装为 MCP 工具",
    "path": "/labs/week-23",
    "status": "available",
    "topics": [
      "Server 生命周期",
      "工具注册",
      "输入 Schema",
      "错误返回"
    ],
    "module": "MCP",
    "mode": "mcp",
    "practice": "把一个本地只读能力封装为 MCP 工具",
    "deliverable": "可运行的最小 MCP Server",
    "lessonPath": "/lessons/week-23/day-03.md"
  },
  {
    "id": "24",
    "title": "MCP 综合验收",
    "description": "将明确契约的业务能力接入 MCP",
    "path": "/labs/week-24",
    "status": "available",
    "topics": [
      "业务接口封装",
      "权限控制",
      "工具描述",
      "客户端验证"
    ],
    "module": "MCP",
    "mode": "mcp",
    "practice": "将明确契约的业务能力接入 MCP",
    "deliverable": "三个工具、异常测试和安全说明",
    "lessonPath": "/lessons/week-24/day-03.md"
  },
  {
    "id": "25",
    "title": "RAG 为什么存在",
    "description": "构建最小“检索后回答”链路",
    "path": "/labs/week-25",
    "status": "available",
    "topics": [
      "模型知识边界",
      "检索增强",
      "生成与检索分工",
      "引用来源"
    ],
    "module": "RAG 基础",
    "mode": "rag",
    "practice": "构建最小“检索后回答”链路",
    "deliverable": "最小 RAG Demo 和架构说明",
    "lessonPath": "/lessons/week-25/day-03.md"
  },
  {
    "id": "26",
    "title": "文档解析与数据清洗",
    "description": "解析一组接口文档并保留来源信息",
    "path": "/labs/week-26",
    "status": "available",
    "topics": [
      "文档格式",
      "正文提取",
      "噪声清理",
      "元数据"
    ],
    "module": "RAG 基础",
    "mode": "rag",
    "practice": "解析一组接口文档并保留来源信息",
    "deliverable": "清洗后的文档数据集",
    "lessonPath": "/lessons/week-26/day-03.md"
  },
  {
    "id": "27",
    "title": "Chunk 切分策略",
    "description": "比较三种 Chunk 方案对接口文档的影响",
    "path": "/labs/week-27",
    "status": "available",
    "topics": [
      "固定长度",
      "语义切分",
      "重叠窗口",
      "字段完整性"
    ],
    "module": "RAG 基础",
    "mode": "rag",
    "practice": "比较三种 Chunk 方案对接口文档的影响",
    "deliverable": "Chunk 对照实验",
    "lessonPath": "/lessons/week-27/day-03.md"
  },
  {
    "id": "28",
    "title": "Embedding 与向量检索",
    "description": "完成文本入库和相似度查询",
    "path": "/labs/week-28",
    "status": "available",
    "topics": [
      "向量表示",
      "相似度",
      "Top K",
      "向量库"
    ],
    "module": "RAG 基础",
    "mode": "rag",
    "practice": "完成文本入库和相似度查询",
    "deliverable": "向量检索 Demo",
    "lessonPath": "/lessons/week-28/day-03.md"
  },
  {
    "id": "29",
    "title": "关键词与混合检索",
    "description": "让字段名精确检索与语义检索协作",
    "path": "/labs/week-29",
    "status": "available",
    "topics": [
      "BM25",
      "向量召回",
      "混合排序",
      "精确字段匹配"
    ],
    "module": "检索质量",
    "mode": "rag",
    "practice": "让字段名精确检索与语义检索协作",
    "deliverable": "混合检索结果对比",
    "lessonPath": "/lessons/week-29/day-03.md"
  },
  {
    "id": "30",
    "title": "Metadata Filter",
    "description": "按系统、版本和文档类型过滤召回结果",
    "path": "/labs/week-30",
    "status": "available",
    "topics": [
      "来源过滤",
      "版本过滤",
      "权限过滤",
      "时间过滤"
    ],
    "module": "检索质量",
    "mode": "rag",
    "practice": "按系统、版本和文档类型过滤召回结果",
    "deliverable": "元数据过滤器",
    "lessonPath": "/lessons/week-30/day-03.md"
  },
  {
    "id": "31",
    "title": "Query Rewrite 与多路召回",
    "description": "处理用户口语与接口字段名不一致的问题",
    "path": "/labs/week-31",
    "status": "available",
    "topics": [
      "查询改写",
      "同义词",
      "子问题",
      "召回合并"
    ],
    "module": "检索质量",
    "mode": "rag",
    "practice": "处理用户口语与接口字段名不一致的问题",
    "deliverable": "改写前后召回对照",
    "lessonPath": "/lessons/week-31/day-03.md"
  },
  {
    "id": "32",
    "title": "Rerank 与上下文选择",
    "description": "对候选文档重排并控制上下文长度",
    "path": "/labs/week-32",
    "status": "available",
    "topics": [
      "初召回",
      "重排",
      "上下文预算",
      "去重"
    ],
    "module": "检索质量",
    "mode": "rag",
    "practice": "对候选文档重排并控制上下文长度",
    "deliverable": "Rerank 实验报告",
    "lessonPath": "/lessons/week-32/day-03.md"
  },
  {
    "id": "33",
    "title": "引用、拒答与可信回答",
    "description": "回答必须展示来源，缺少证据时拒答",
    "path": "/labs/week-33",
    "status": "available",
    "topics": [
      "引用定位",
      "证据约束",
      "无答案拒答",
      "冲突来源"
    ],
    "module": "RAG 可靠性",
    "mode": "rag",
    "practice": "回答必须展示来源，缺少证据时拒答",
    "deliverable": "引用正确的问答链路",
    "lessonPath": "/lessons/week-33/day-03.md"
  },
  {
    "id": "34",
    "title": "RAG 评测集",
    "description": "建立接口契约助手评测集",
    "path": "/labs/week-34",
    "status": "available",
    "topics": [
      "检索命中率",
      "答案正确性",
      "引用正确性",
      "困难样本"
    ],
    "module": "RAG 评测",
    "mode": "evaluation",
    "practice": "建立接口契约助手评测集",
    "deliverable": "不少于五十条问题",
    "lessonPath": "/lessons/week-34/day-03.md"
  },
  {
    "id": "35",
    "title": "RAG 失败分析与优化",
    "description": "逐条归因失败样本并只修改一个变量",
    "path": "/labs/week-35",
    "status": "available",
    "topics": [
      "召回失败",
      "排序失败",
      "生成失败",
      "数据缺失"
    ],
    "module": "RAG 评测",
    "mode": "evaluation",
    "practice": "逐条归因失败样本并只修改一个变量",
    "deliverable": "失败分类和优化记录",
    "lessonPath": "/lessons/week-35/day-03.md"
  },
  {
    "id": "36",
    "title": "项目二综合验收",
    "description": "完成 AI 接口契约与需求助手",
    "path": "/labs/week-36",
    "status": "available",
    "topics": [
      "接口字段契约",
      "来源引用",
      "未知字段追问",
      "在线演示"
    ],
    "module": "项目二",
    "mode": "project",
    "practice": "完成 AI 接口契约与需求助手",
    "deliverable": "可演示项目、评测和复盘",
    "lessonPath": "/lessons/week-36/day-03.md"
  },
  {
    "id": "37",
    "title": "AI 产品问题定义",
    "description": "从三个候选方向中选择真实问题",
    "path": "/labs/week-37",
    "status": "available",
    "topics": [
      "目标用户",
      "高频场景",
      "障碍",
      "AI 必要性"
    ],
    "module": "产品工程",
    "mode": "product",
    "practice": "从三个候选方向中选择真实问题",
    "deliverable": "问题定义和不做清单",
    "lessonPath": "/lessons/week-37/day-03.md"
  },
  {
    "id": "38",
    "title": "用户访谈与需求证据",
    "description": "完成三到五次轻量用户访谈",
    "path": "/labs/week-38",
    "status": "available",
    "topics": [
      "访谈提纲",
      "事实与观点",
      "行为证据",
      "需求优先级"
    ],
    "module": "产品工程",
    "mode": "product",
    "practice": "完成三到五次轻量用户访谈",
    "deliverable": "访谈记录和需求结论",
    "lessonPath": "/lessons/week-38/day-03.md"
  },
  {
    "id": "39",
    "title": "AI 产品指标体系",
    "description": "为睡眠教练定义指标树",
    "path": "/labs/week-39",
    "status": "available",
    "topics": [
      "产品指标",
      "模型质量指标",
      "性能指标",
      "成本指标"
    ],
    "module": "产品工程",
    "mode": "product",
    "practice": "为睡眠教练定义指标树",
    "deliverable": "可度量的指标表",
    "lessonPath": "/lessons/week-39/day-03.md"
  },
  {
    "id": "40",
    "title": "安全、隐私与高风险边界",
    "description": "设计睡眠或情绪产品安全边界",
    "path": "/labs/week-40",
    "status": "available",
    "topics": [
      "敏感数据",
      "数据最小化",
      "危机提示",
      "人工升级"
    ],
    "module": "产品工程",
    "mode": "product",
    "practice": "设计睡眠或情绪产品安全边界",
    "deliverable": "风险清单和处理流程",
    "lessonPath": "/lessons/week-40/day-03.md"
  },
  {
    "id": "41",
    "title": "睡眠教练数据与 Prompt 设计",
    "description": "设计睡眠教练的数据结构和 Prompt",
    "path": "/labs/week-41",
    "status": "available",
    "topics": [
      "睡眠日志",
      "上下文选择",
      "非医疗边界",
      "个性化建议"
    ],
    "module": "项目三",
    "mode": "product",
    "practice": "设计睡眠教练的数据结构和 Prompt",
    "deliverable": "数据契约与 Prompt v1",
    "lessonPath": "/lessons/week-41/day-03.md"
  },
  {
    "id": "42",
    "title": "睡眠教练 MVP 开发",
    "description": "完成睡眠教练核心闭环",
    "path": "/labs/week-42",
    "status": "available",
    "topics": [
      "日志录入",
      "建议生成",
      "历史记录",
      "错误状态"
    ],
    "module": "项目三",
    "mode": "product",
    "practice": "完成睡眠教练核心闭环",
    "deliverable": "可运行 MVP",
    "lessonPath": "/lessons/week-42/day-03.md"
  },
  {
    "id": "43",
    "title": "周总结与个性化",
    "description": "根据七天记录生成周总结",
    "path": "/labs/week-43",
    "status": "available",
    "topics": [
      "趋势提取",
      "摘要",
      "建议优先级",
      "可执行性"
    ],
    "module": "项目三",
    "mode": "product",
    "practice": "根据七天记录生成周总结",
    "deliverable": "周总结 Demo 和评测样本",
    "lessonPath": "/lessons/week-43/day-03.md"
  },
  {
    "id": "44",
    "title": "真实用户测试与迭代",
    "description": "邀请测试用户完成核心任务",
    "path": "/labs/week-44",
    "status": "available",
    "topics": [
      "可用性测试",
      "反馈记录",
      "问题优先级",
      "版本迭代"
    ],
    "module": "项目三",
    "mode": "product",
    "practice": "邀请测试用户完成核心任务",
    "deliverable": "五条反馈和一次迭代",
    "lessonPath": "/lessons/week-44/day-03.md"
  },
  {
    "id": "45",
    "title": "部署、监控与成本",
    "description": "部署一个正式项目并建立基础监控",
    "path": "/labs/week-45",
    "status": "available",
    "topics": [
      "环境配置",
      "日志监控",
      "错误告警",
      "成本预算"
    ],
    "module": "工程化",
    "mode": "operations",
    "practice": "部署一个正式项目并建立基础监控",
    "deliverable": "线上地址和运行记录",
    "lessonPath": "/lessons/week-45/day-03.md"
  },
  {
    "id": "46",
    "title": "作品集：讲清技术与产品",
    "description": "整理两个核心项目作品集",
    "path": "/labs/week-46",
    "status": "available",
    "topics": [
      "项目叙事",
      "架构图",
      "关键取舍",
      "结果证据"
    ],
    "module": "转型准备",
    "mode": "portfolio",
    "practice": "整理两个核心项目作品集",
    "deliverable": "作品集项目页",
    "lessonPath": "/lessons/week-46/day-03.md"
  },
  {
    "id": "47",
    "title": "简历与面试表达",
    "description": "形成三分钟项目介绍并模拟问答",
    "path": "/labs/week-47",
    "status": "available",
    "topics": [
      "能力定位",
      "STAR",
      "技术追问",
      "产品追问"
    ],
    "module": "转型准备",
    "mode": "portfolio",
    "practice": "形成三分钟项目介绍并模拟问答",
    "deliverable": "简历项目段和面试题库",
    "lessonPath": "/lessons/week-47/day-03.md"
  },
  {
    "id": "48",
    "title": "年度毕业验收与下一阶段",
    "description": "完成年度答辩和能力矩阵",
    "path": "/labs/week-48",
    "status": "available",
    "topics": [
      "能力盘点",
      "作品审查",
      "短板分析",
      "下一年计划"
    ],
    "module": "年度验收",
    "mode": "portfolio",
    "practice": "完成年度答辩和能力矩阵",
    "deliverable": "毕业报告、作品集和下一阶段计划",
    "lessonPath": "/lessons/week-48/day-03.md"
  }
]

# 知识地图

学习顺序遵循“先能用，再可靠，最后产品化”。

## 第一层：模型调用

- 消息与上下文
- 模型参数
- 流式响应
- Token 与成本
- 错误处理

验收问题：你能否不用框架调用模型，并把响应稳定展示给用户？

## 第二层：Prompt 与评测

- Prompt 结构
- 示例和约束
- Structured Output
- 测试数据集
- 版本对比

验收问题：你能否证明新版 Prompt 比旧版更好？

## 第三层：工具与 Agent

- Function Calling
- 工具契约
- Workflow
- 状态和日志
- 权限确认

验收问题：模型调用错误工具或生成错误参数时，系统是否可控？

## 第四层：RAG

- 数据清洗
- Chunk
- Embedding
- Retrieval
- Rerank
- Citation
- Evaluation

验收问题：答案依据来自哪里？没有依据时系统如何回应？

## 第五层：MCP

- Protocol
- Client
- Server
- Tool
- Resource
- 安全边界

验收问题：能否把一个现有业务能力以明确契约开放给 AI？

## 第六层：AI 产品

- 目标用户
- 高频问题
- 核心路径
- 信任与可解释性
- 成本和延迟
- 隐私与安全
- 用户反馈和迭代

验收问题：去掉“AI”两个字，这个产品是否仍然解决了一个真实问题？

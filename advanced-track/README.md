# 前端老手转 AI 应用工程实战 Track

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

- [W01：AI Gateway：前端如何安全接入真实模型](./weeks/week-01.md) — 阶段 1：AI 应用工程底座
- [W02：Streaming：AI 响应慢时前端体验怎么做](./weeks/week-02.md) — 阶段 1：AI 应用工程底座
- [W03：结构化输出：让模型结果能进入业务系统](./weeks/week-03.md) — 阶段 1：AI 应用工程底座
- [W04：Prompt Registry 与评测：不要把 Prompt 写成散落字符串](./weeks/week-04.md) — 阶段 1：AI 应用工程底座
- [W05：会话、日志、成本：AI 功能上线前必须补的后端基础](./weeks/week-05.md) — 阶段 1：AI 应用工程底座
- [W06：项目一：AI 职场沟通助手工程化版本](./weeks/week-06.md) — 阶段 1 项目验收
- [W07：RAG 数据准备：文档解析、Chunk 与 Metadata](./weeks/week-07.md) — 阶段 2：RAG 工程
- [W08：检索实现：关键词、向量与混合召回](./weeks/week-08.md) — 阶段 2：RAG 工程
- [W09：可信回答：引用、拒答与冲突证据](./weeks/week-09.md) — 阶段 2：RAG 工程
- [W10：RAG 评测：把“效果还行”变成指标](./weeks/week-10.md) — 阶段 2：RAG 工程
- [W11：项目二：前端接口契约 RAG 助手](./weeks/week-11.md) — 阶段 2 项目验收
- [W12：Tool Calling：模型建议，程序裁决](./weeks/week-12.md) — 阶段 3：Tool / Agent / MCP
- [W13：写操作边界：确认、幂等与审计](./weeks/week-13.md) — 阶段 3：Tool / Agent / MCP
- [W14：Workflow vs Agent：什么时候不该用 Agent](./weeks/week-14.md) — 阶段 3：Tool / Agent / MCP
- [W15：MCP Server：把你的工具标准化暴露给 AI](./weeks/week-15.md) — 阶段 3：Tool / Agent / MCP
- [W16：项目三：MCP + RAG + Tool 综合接口助手](./weeks/week-16.md) — 阶段 3 项目验收
- [W17：AI 产品边界：睡眠 / 情绪助手为什么难](./weeks/week-17.md) — 阶段 4：产品化与安全
- [W18：项目四：AI 睡眠 / 情绪教练 MVP](./weeks/week-18.md) — 阶段 4 项目验收
- [W19：部署、监控与成本：作品集也要像真实项目](./weeks/week-19.md) — 阶段 5：上线与作品集
- [W20：作品集、简历与 45 分钟项目答辩](./weeks/week-20.md) — 阶段 5：求职验收

## 最终应具备的证据

- 一个真实模型 Gateway / Streaming / 结构化输出工程底座；
- 一个带 Prompt Registry、日志和评测集的 AI 职场沟通助手；
- 一个前端接口契约 RAG 助手；
- 一个 MCP + RAG + Tool + 受限 Agent 综合 Demo；
- 一个偏产品方向的 AI 睡眠 / 情绪教练 MVP；
- 一套作品集、简历项目描述、面试问答和 45 分钟答辩稿。

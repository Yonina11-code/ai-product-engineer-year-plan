# W14 复盘：Workflow vs Agent：什么时候不该用 Agent

## 本周投入时间

-

## 本周完成的工程证据

- [ ] 两种实现对比
- [ ] Agent Trace 日志
- [ ] 死循环防护案例

## 本周补齐的后端基础

- [ ] 状态机
- [ ] Agent Loop
- [ ] maxSteps
- [ ] 终止条件
- [ ] 可回放 Trace

## 核心架构图

```mermaid
flowchart LR
  A["User / Vue UI"] --> B["Your Server API"]
  B --> C["AI / RAG / Tool Layer"]
  C --> D["Validation / Safety / Eval"]
  D --> E["User-visible Result"]
  B --> F["Logs / Trace / Cost"]
```

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

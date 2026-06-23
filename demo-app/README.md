# AI 学习 Demo 项目

这里是整个年度课程统一使用的 Vue Demo 项目。

## 目录约定

```text
demo-app/
├─ src/
│  ├─ labs/
│  │  ├─ registry.ts               实验清单
│  │  └─ 01-ai-app-chain/          实验 01 前端
│  ├─ views/                       公共页面
│  └─ router/                      实验路由
├─ server/
│  ├─ labs/
│  │  └─ 01-ai-app-chain/          实验 01 服务端逻辑
│  └─ index.js                     公共 API 服务
└─ vite.config.ts
```

以后新增实验时：

1. 在 `src/labs/<编号-名称>/` 新增 Vue 页面；
2. 在 `server/labs/<编号-名称>/` 新增服务端逻辑；
3. 在 `src/labs/registry.ts` 注册实验；
4. 在路由中增加对应地址；
5. 不再新建独立原生 HTML 页面。

## 全年实验

- LAB 01、02 是专用 Vue 实验；
- LAB 03～48 使用统一课程实验工作台；
- 每周都有独立路由、知识点、主任务、交付物和交互结果；
- 工作台按模块提供不同能力：模型上下文、Prompt 注入、Schema、工具调用、
  Agent Trace、MCP 契约、RAG 检索、产品安全、监控和作品集验收；
- 课程与实验定义由 `scripts/generate-full-curriculum.mjs` 同步生成。

## 启动全部服务

在年度工程根目录执行：

```powershell
npm run demo
```

启动后打开：

```text
http://localhost:5180
```

前端开发服务使用 `5180` 端口，公共 API 服务使用 `3001` 端口。

停止时在终端按 `Ctrl + C`。

## 配置真实 DeepSeek

按照：

[`DeepSeek V4 Flash 接入说明`](../docs/deepseek-api-setup.md)

填写工程根目录 `.env` 后重启服务。页面会自动检测配置状态，并允许在
“教学 Mock”和“DeepSeek”之间切换。

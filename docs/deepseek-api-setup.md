# DeepSeek V4 Flash 接入说明

更新时间：2026-06-23

## 1. 当前接口配置

本工程按照 DeepSeek 官方 OpenAI 兼容接口接入：

```text
Base URL：https://api.deepseek.com
接口：POST /chat/completions
模型：deepseek-v4-flash
鉴权：Authorization: Bearer <API Key>
```

当前实验显式关闭思考模式：

```json
{
  "thinking": {
    "type": "disabled"
  }
}
```

原因：

- LAB 01 是简单改写任务，不需要额外推理开销；
- LAB 02 需要观察 Temperature 的生成差异；
- 先学习普通生成，再单独学习思考模式。

## 2. 获取 API Key

登录 DeepSeek 开放平台，在 API Keys 页面创建一个 Key。

不要把 Key：

- 发到聊天中；
- 写进 Vue 代码；
- 写进截图；
- 提交到 Git；
- 放进 `.env.example`。

## 3. 填写本地环境变量

打开工程根目录的：

```text
G:\ai-product-engineer-year-plan\.env
```

找到：

```text
DEEPSEEK_API_KEY=
```

在等号后粘贴自己的 Key：

```text
DEEPSEEK_API_KEY=你的真实Key
```

不要增加引号，也不要在等号前后增加空格。

## 4. 重启 Demo

如果 Demo 正在运行，先在终端按：

```text
Ctrl + C
```

然后重新启动：

```powershell
cd G:\ai-product-engineer-year-plan
npm run demo
```

环境变量只在服务启动时读取，所以修改 `.env` 后必须重启服务。

## 5. 确认是否配置成功

打开：

```text
http://localhost:5180/labs/01-ai-app-chain
```

“模型来源”选择框中应该可以选择：

```text
DeepSeek deepseek-v4-flash
```

如果 Key 已配置，页面会默认选择 DeepSeek。

生成成功后，结果区域会显示：

```text
来源：deepseek-v4-flash
Token：本次调用量
```

## 6. LAB 01 如何调用

服务端会将：

```text
固定系统 Prompt
+ 沟通对象
+ 期望语气
+ 用户原话
```

发送给 DeepSeek，并要求返回：

```json
{
  "rewrittenText": "改写结果",
  "explanation": "修改说明"
}
```

DeepSeek 官方 JSON Output 要求：

1. 请求设置 `response_format: { "type": "json_object" }`；
2. Prompt 中明确出现 `json`；
3. 给出期望的 JSON 格式；
4. 为输出预留足够的 `max_tokens`。

服务端解析 JSON 后，仍会使用原有校验函数检查字段和空值。

## 7. LAB 02 如何调用

LAB 02 会：

- 使用相同用户输入；
- 使用页面选择的 Temperature；
- 要求模型一次返回三个改写版本；
- 显示模型名称和 Token 用量。

需要注意：

> Temperature 较高不等于一定产生幻觉，较低也不等于绝对正确。

Mock 模式中的“风险提示”是教学预设；DeepSeek 模式不会假装自动知道哪些内容是幻觉，
需要你根据原始输入自行评测。

## 8. 常见错误

### 尚未配置 Key

```text
尚未配置 DEEPSEEK_API_KEY
```

检查 `.env` 是否填写，并确认已经重启服务。

### 401

Key 无效或复制不完整。重新检查 DeepSeek 开放平台中的 Key。

### 402

账户余额不足，需要检查余额。

### 429

请求过于频繁，稍后重试。

### 500 或 503

DeepSeek 服务异常或繁忙，稍后重试。

### JSON 解析失败

模型输出没有形成有效 JSON。当前服务会将其作为业务失败，不会直接把错误结构交给前端。

## 9. 相关代码

公共 DeepSeek 客户端：

```text
demo-app/server/shared/deepseek-client.js
```

LAB 01 模型适配：

```text
demo-app/server/labs/01-ai-app-chain/deepseek-model.js
```

LAB 02 模型调用：

```text
demo-app/server/labs/02-model-uncertainty/handler.js
```

## 10. 费用提醒

每次点击 DeepSeek 生成都会产生实际 Token 消耗。学习阶段：

- 保持输入简短；
- 不连续快速点击；
- 优先用 Mock 理解流程；
- 需要观察真实生成效果时再切换 DeepSeek；
- 定期在 DeepSeek 平台查看用量和余额。

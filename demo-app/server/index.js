import http from 'node:http'
import { advancedApiRoutes } from './advanced-labs/generated-advanced-api-routes.js'
import { handleAiChat } from './ai-gateway/handleChat.js'
import { handleLab01Rewrite } from './labs/01-ai-app-chain/handler.js'
import { handleLab02Generate } from './labs/02-model-uncertainty/handler.js'
import { getDeepSeekStatus } from './shared/deepseek-client.js'

const port = 3001

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  })
  response.end(JSON.stringify(data))
}

async function readJsonBody(request) {
  const chunks = []

  for await (const chunk of request) {
    chunks.push(chunk)
  }

  const body = Buffer.concat(chunks).toString('utf8')
  return body ? JSON.parse(body) : {}
}

const server = http.createServer(async (request, response) => {
  const advancedHandler = advancedApiRoutes.get(request.url)

  if (request.method === 'POST' && advancedHandler) {
    await advancedHandler({
      response,
      readJsonBody: () => readJsonBody(request),
      sendJson,
    })
    return
  }

  if (request.method === 'POST' && request.url === '/api/ai/chat') {
    await handleAiChat({
      response,
      readJsonBody: () => readJsonBody(request),
      sendJson,
    })
    return
  }

  if (
    request.method === 'POST' &&
    request.url === '/api/labs/01/rewrite'
  ) {
    await handleLab01Rewrite({
      request,
      response,
      readJsonBody,
      sendJson,
    })
    return
  }

  if (
    request.method === 'POST' &&
    request.url === '/api/labs/02/generate'
  ) {
    await handleLab02Generate({
      request,
      response,
      readJsonBody,
      sendJson,
    })
    return
  }

  if (request.method === 'GET' && request.url === '/api/health') {
    sendJson(response, 200, {
      status: 'ok',
    })
    return
  }

  if (request.method === 'GET' && request.url === '/api/providers/deepseek') {
    sendJson(response, 200, getDeepSeekStatus())
    return
  }

  sendJson(response, 404, {
    message: '接口不存在。',
  })
})

server.listen(port, '127.0.0.1', () => {
  console.log(`公共 API 服务已启动：http://127.0.0.1:${port}`)
})

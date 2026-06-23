import http from 'node:http'
import { handleLab01Rewrite } from './labs/01-ai-app-chain/handler.js'

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

  if (request.method === 'GET' && request.url === '/api/health') {
    sendJson(response, 200, {
      status: 'ok',
    })
    return
  }

  sendJson(response, 404, {
    message: '接口不存在。',
  })
})

server.listen(port, '127.0.0.1', () => {
  console.log(`公共 API 服务已启动：http://127.0.0.1:${port}`)
})

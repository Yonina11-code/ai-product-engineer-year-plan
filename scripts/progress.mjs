import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const currentFile = fileURLToPath(import.meta.url)
const root = path.resolve(path.dirname(currentFile), '..')

const markdownFiles = []

function collectMarkdown(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') {
      continue
    }

    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      collectMarkdown(fullPath)
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      markdownFiles.push(fullPath)
    }
  }
}

collectMarkdown(root)

let completed = 0
let pending = 0

for (const file of markdownFiles) {
  const content = fs.readFileSync(file, 'utf8')
  completed += (content.match(/- \[x\]/gi) || []).length
  pending += (content.match(/- \[ \]/g) || []).length
}

const total = completed + pending
const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

console.log(`学习工程：${root}`)
console.log(`已完成：${completed}`)
console.log(`待完成：${pending}`)
console.log(`清单进度：${percentage}%`)
console.log('提示：进度数字只是辅助，课程是否通过以作业和老师验收为准。')

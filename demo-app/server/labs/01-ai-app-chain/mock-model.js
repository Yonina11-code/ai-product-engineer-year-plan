const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

export async function callMockModel({ originalText }) {
  await wait(700)

  if (originalText === '[返回空结果]') {
    return {
      rewrittenText: '',
      explanation: '',
    }
  }

  if (originalText === '[返回错误格式]') {
    return {
      text: '这个字段名不是页面约定的 rewrittenText。',
    }
  }

  return {
    rewrittenText:
      '当前需求在现有条件下存在实现困难，建议我们先进一步明确需求范围和实现条件，再共同评估可行方案。',
    explanation: '保留了对可行性的质疑，同时降低了表达中的对抗性。',
  }
}

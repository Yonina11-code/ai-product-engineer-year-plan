export function validateModelResult(result) {
  if (!result || typeof result !== 'object') {
    throw new Error('模型没有返回有效对象。')
  }

  if (
    typeof result.rewrittenText !== 'string' ||
    !result.rewrittenText.trim()
  ) {
    throw new Error('模型没有返回有效的改写结果。')
  }

  if (
    typeof result.explanation !== 'string' ||
    !result.explanation.trim()
  ) {
    throw new Error('模型没有返回有效的修改说明。')
  }

  return {
    rewrittenText: result.rewrittenText.trim(),
    explanation: result.explanation.trim(),
  }
}

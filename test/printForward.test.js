const printForward = require('../lib/printForward')

describe('printForward', () => {
  test('should be valid. The array is empty.', () => {
    const result = printForward([])
    expect(result).toBe('')
  })

  test('should be valid. The array has one element.', () => {
    const result = printForward([654])
    expect(result).toBe('654')
  })

  test('should be valid. The array has some elements.', () => {
    const result = printForward([2, 4, 6,8,275,654])
    expect(result).toBe('2 4 6 8 275 654')
  })
})
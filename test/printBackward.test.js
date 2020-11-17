const printBackward = require('../lib/printBackward')

describe('printBackward', () => {
  test('should be valid. The array is empty.', () => {
    const result = printBackward([])
    expect(result).toBe('')
  })

  test('should be valid. The array has one element.', () => {
    const result = printBackward([56])
    expect(result).toBe('56')
  })

  test('should be valid. The array has some elements.', () => {
    const result = printBackward([2,6,9,4,85,56])
    expect(result).toBe('56 85 4 9 6 2')
  })
})
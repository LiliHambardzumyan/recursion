const numbersSum = require('../lib/numbersSum')

describe('numbersSum', () => {
  test('should be valid. The number is zero.', () => {
    const result = numbersSum(0)
    expect(result).toBe(0)
  })

  test('should be valid. The number is negative.', () => {
    const result = numbersSum(-15)
    expect(result).toBe(-120)
  })

  test('should be valid. The number is positive.', () => {
    const result = numbersSum(100)
    expect(result).toBe(5050)
  })
})
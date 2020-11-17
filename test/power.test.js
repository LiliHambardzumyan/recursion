const power = require('../lib/power')

describe('power', () => {
  test('should be valid. The base is zero.', () => {
    const result = power(0, 3)
    expect(result).toBe(1)
  })

  test('should be valid. The base is one.', () => {
    const result = power(1, 100)
    expect(result).toBe(1)
  })

  test('should be valid. The base is a negative number, and the exponent is even number.', () => {
    const result = power(-3, 2)
    expect(result).toBe(9)
  })

  test('should be valid. The base is a negative number, and the exponent is odd number.', () => {
    const result = power(-3, 3)
    expect(result).toBe(-27)
  })

  test('should be valid. The exponent is one.', () => {
    const result = power(30, 1)
    expect(result).toBe(30)
  })

  test('should be valid. The exponent is zero.', () => {
    const result = power(30, 0)
    expect(result).toBe(1)
  })

  test('should be valid. The exponent is a negative number.', () => {
    const result = power(3, -3)
    expect(result).toBe(1/27)
  })

  test('should be valid. Both base and exponent are negative numbers, and exponent is even number.', () => {
    const result = power(-2, -4)
    expect(result).toBe(1/16)
  })

  test('should be valid. Both base and exponent are negative numbers, and exponent is odd number', () => {
    const result = power(-2, -3)
    expect(result).toBe(-1/8)
  })

  test('should be valid. Both base and exponent are positive numbers.', () => {
    const result = power(2, 20)
    expect(result).toBe(1048576)
  })
})
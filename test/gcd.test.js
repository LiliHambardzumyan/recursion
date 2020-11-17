const gcd = require('../lib/gcd')

describe('gcd:', () => {
  test('should be valid. One of numbers is zero. ', () => {
    const  result = gcd(0, 4)

    expect(result).toBe(4)
  })

  test('should be valid. One of numbers is negative. ', () => {
    const  result = gcd(100, -2)

    expect(result).toBe(2)
  })

  test('should be valid. One of numbers is rational.', () => {
    const  result = gcd(10, 1/2)

    expect(result).toBe(1/2)
  })
})

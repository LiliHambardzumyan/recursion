const palindrome=require('../lib/testpalindrome')

describe('palindrome', () => {
  test('should be invalid. The array is empty.', () => {
    const result = palindrome([])
    expect(result).toBe(false )
  })

  test('should be invalid. The array has one element.', () => {
    const result = palindrome([5])
    expect(result).toBe(true )
  })

  test('should be valid. The array has two elements.', () => {
    const result = palindrome([51, 51])
    expect(result).toBe(true)
  })

  test('should be valid. The array is not palindrome.', () => {
    const result = palindrome([51, 15, 6, 25, 15, 51])
    expect(result).toBe(false)
  })

  test('should be valid. The array is palindrome.', () => {
    const result = palindrome([51,15,6,15,51])
    expect(result).toBe(true)
  })
})
/**
 * @public
 * @param {number} n
 * @returns {number}
 * @description Return the sum of the values from 0 to n.
 */
function numbersSum(n) {
  if ( n === 0 ) {
    return 0
  }
  if (n < 0) {
    return n + numbersSum(n+1)
  }
  else {
    return n + numbersSum(n-1)
  }
}
module.exports = numbersSum
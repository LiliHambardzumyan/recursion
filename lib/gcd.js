/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 * @description Great common divisor.
 */
function gcd(x, y) {
  if (y === 0) {
    return Math.abs(x)
  }
  else {
    return Math.abs(gcd(y, x % y))
  }
}

module.exports = gcd

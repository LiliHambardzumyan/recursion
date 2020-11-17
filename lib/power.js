/**
 * @public
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @description Base to the exponent power.
 */
function power(base,exponent) {
  if (base === 0 || base === 1  || exponent === 0) {
    return 1
  }
  if(exponent < 0) {
    return 1/ base * power(base, exponent + 1)
  }
  else {
    return base * power(base, exponent - 1)
  }
}

module.exports = power
/**
 * @public
 * @param {Object} array
 * @param {number} length
 * @returns {string}
 * @description Print an array forward.
 */
function printForward(array) {
  if(array.length === 1) {
    return array.toString()
  }
  else {
    return array.join(' ')
  }
}
module.exports =printForward
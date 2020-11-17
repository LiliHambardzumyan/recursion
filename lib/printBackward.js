/**
 * @public
 * @param {Object} array
 * @param {number} length
 * @returns {string}
 * @description Print an array backward.
 */
function printBackward(array){
  if(array.length === 1) {
    return array.toString()
  }
  else {
    array.reverse()
    return array.join(' ')
  }
}
module.exports = printBackward
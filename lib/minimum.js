/**
 *
 * @param {Object} array
 * @returns {number}
 */
function recursiveMinimum(array) {
  if (array.length === 1) {
    return array[0]
  }
  else {
    return Math.min(array[array.length-1], recursiveMinimum([array.length-1])) //array[2]
  }
}
console.log(recursiveMinimum([5,41,8]))
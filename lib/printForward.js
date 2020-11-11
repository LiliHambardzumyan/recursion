/**
 * @public
 * @param {object} array
 * @param {number} length
 * @returns {string}
 * @description Print an array forward.
 */
function printForward(array, length){
    if(length === 1) {
        return array[0]
    }
    else {
        return array.join(' ')
    }
}

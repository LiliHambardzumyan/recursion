/**
 * @public
 * @param {Object} array
 * @param {number} length
 * @returns {string}
 * @description Print an array backward.
 */
function printBackward(array, length){
    if(length === 1) {
        return array[0];
    }
    else {
        array.reverse();
        return array.join(' ');
    }
}
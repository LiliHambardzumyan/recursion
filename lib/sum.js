/**
 * @public
 * @param {number} n
 * @returns {number}
 * @description Return the sum of the values from 0 to n.
 */
function sum(n) {
    if ( n === 0 ) {
        return 0
    }
    else {
        return n + sum(n-1)
    }
}
/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 * @description Great common divisor.
 */
function gcd(x, y) {
    if (y === 0) {
        return x;
    }
    else {
        return gcd(y, x % y)
    }
}

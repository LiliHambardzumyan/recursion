/**
 * @public
 * @param {Object} array
 * @returns {boolean}
 * @description Check string stored in the array is a palindrome or not.
 */
function testPalindrome(array){
    if(array.length === 1) { return true }
    if(array.length === 2 && array[0] === array[1]) {return true }
    if(array[0] === array[array.length -1]) {
        return testPalindrome(array.slice(1, -1))
    }
    else {
        return false
    }
}

function recursiveLinearSearch(array, key, index) {
  if(key === array[index]) {
    return index
  }
  else
  if(key === array[0]) {
    return 0
  }
  else
    return recursiveLinearSearch()
}
console.log(recursiveLinearSearch([2,4,5,6,7,61,321564,5,4,69,5489], 2, 5))

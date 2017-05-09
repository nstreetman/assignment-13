/**
 * Ex-01: getLast()
 *
 * Write a function called getLast() that returns the last element of an array.
 *
**/

var getLast = function(anArray){
  var arrayLength = anArray.length
  for(var i = 0; i < anArray.length; i++){
    if(i === arrayLength - 1){
      var returnLast = anArray[i];
    }
  }
  return returnLast
}


console.assert( getLast([1,8,4,3]) === 3 )
console.assert( getLast([1,8,4,3,5]) === 5 )
console.assert( getLast(['a','b','c','d','e','f']) === 'f' )
console.assert( getLast([true, false, false, true, false]) === false )

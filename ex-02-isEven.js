/**
 * Ex-02: isEven()
 *
 * Write a function called isEvent that takes an integer and returns
 * true or false based on whether that integer is odd or even
 *
**/
 var isEven = function(integer){
   var evenInteger = false
   if(integer%2 === 0){
     evenInteger = true
   }
   return evenInteger
 }





//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert(isEven(1) === false )
console.assert(isEven(4) === true )
console.assert(isEven(10) === true )
console.assert(isEven(17) === false )

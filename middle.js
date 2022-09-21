
const eqArrays = function(firstArray,secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
       
  }
  return true;
};
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray,secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};
// Function should return an array with only the middle element(s) of the provided array;
// For arrays with one or two elements return an empty array
// For arrays with odd number of element, single middle element should return
// For arrays with an even number of element,an array containing the two elements in the middle should be returned
//
 const middle = function(array) {
   if (array.length <=2 ) {
    return [];
   }
   if (array.length % 2 === 0) {
    const midIndex = array.length / 2
    return [array[midIndex - 1],array[midIndex]]
   }
   if (array.length % 2 !== 0) {
    const oddIndex = (array.length - 1) / 2
    return [array[oddIndex]]
   }
 }
   // test run
   console.log(middle([1])) // => []
   console.log(middle([1, 2])) // => []
   console.log(middle([1, 2, 3])) // => [2]
   console.log(middle([1, 2, 3, 4, 5])) // => [3]
   console.log(middle([1, 2, 3, 4])) // => [2, 3]
   console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
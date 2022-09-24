const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray,secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};
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
// will return a subset of a given array, removing unwanted elements.
//This function should take in a source array and a itemsToRemove array. 
//It should return a new array with only those elements from source that are not present in the itemsToRemove array.
//The without function should be returning a new array and not modify the original array that is passed in
 const without = function(source,itemsToRemove) {
  const output = [];
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])){
      output.push(source[i])
    }
  }
  return output
 }
 
 
 
 
 console.log(without([1, 2, 3], [1])) // => [2, 3]
 console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
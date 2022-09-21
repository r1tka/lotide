const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};
  // Test code
  
console.assert(assertEqual(1,1));
  
//The function should take in a sentence (as a string) and then return a count
//of each of the letters in that sentence.
//function should return an object
// use for...of loop
const countLetters = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (result[character]) {
      result[character] += 1;
    } else { // the key is not there in the result object
      result[character] = 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));


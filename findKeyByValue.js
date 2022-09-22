const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};
  // Test code
  
console.assert(assertEqual(1,1));
  
const findKeyByValue = function(object , value) {
  let genres = Object.keys(object);
  for (let element of genres) {
    if (value === object[element]) {
      return element;
    }
  }
  return undefined;
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`Example label: ${inspect(actual)}`);

};
const ab = { a: "1" , b: "2" };
const ba = { b: "2" , a: "1" };

console.log(assertObjectsEqual(ab,ba));
  
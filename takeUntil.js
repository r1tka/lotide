// It will take in two parameters as well:
// The array to work with
// The callback (which Lodash calls "predicate")
// The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback/predicate returns a truthy value
// Callback should only be provided one value: The item in the array.
 const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    console.log(element)
    const numberResult = callback(element)
    if( numberResult === false) {
      result.push(element)
    } else {
      return result
    }
  }
  return result
 }
 const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const results1 = takeUntil(data1, x => x < 0);
 console.log(results1);
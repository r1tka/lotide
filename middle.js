
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
    module.exports = middle
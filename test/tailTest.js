const assert = require('chai').assert;
const tail = require('../tail.js');


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });

  it(`returns back two elements from ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); 
  });

  it(`returns back first element "Lighthouse" from ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); 
  });

  it(`returns back second element "Labs" from ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs"); 
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);
// //Test Case: Check the original array````
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!



(() => {
  // Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
  // For example, you may want to represent a value as a pair of a string and a number:
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK
  // Initialize it incorrectly
  // x = [10, "hello"]; // Error
  
  // When accessing an element with a known index, the correct type is retrieved:
  console.log(x[0].substring(1)); // OK
  //console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

  // Accessing an element outside the set of known indices fails with an error:
  // x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
  // console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
})();

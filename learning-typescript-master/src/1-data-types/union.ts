(() => {
  // TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.
  // syntax (type1 | type2 | type3 | .. | typeN)
  let code: string | number;
  code = 123; // OK
  code = "ABC"; // OK
  //code = false; // Compiler Error

  function displayType(code: string | number) {
    if (typeof code === "number") console.log("Code is number.");
    else if (typeof code === "string") console.log("Code is string.");
  }

  displayType(123); // Output: Code is number.
  displayType("ABC"); // Output: Code is string.
  //displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
})();

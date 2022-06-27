// In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void,
// they’re not extremely useful on their own:

// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like 
// number.

// However, when using the --strictNullChecks flag, null and undefined are only assignable to any and their respective types
// (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want
// to pass in either a string or null or undefined, you can use the union type string | null | undefined.

(() => {
  // Not much else we can assign to these variables!
  let u: undefined = undefined;
  let n: null = null;
  //let variable: number = null; // As --strictNullChecks is enabled Type 'null' is not assignable to type 'number'
  let variable: (string | null | undefined) = null; // Here we are using union type, to allow either string, null or undefined
  console.log(variable) 
  variable = undefined;
  console.log(variable);
  variable = "Null and Undefined Types";
  console.log(variable)
})();

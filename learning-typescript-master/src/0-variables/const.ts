// - const Variable Declarations (also known as "immutable variables")
// - Typescript encourages programmers to use let and const keyword-based variables
// - let and const variables have block level scope also they can not be re-declared multiple times
// - Like the let keyword, we can also use const an alternative for declaring variables
// - const is short for constant allows us to set constant variables which shouldn't be reassigned
// - We can not change the value of const variable, so use const to define fixed set of values also to protect the values of certain variables
// - Creating/Using an existing const variable again or re-assigning value to const variable generates TypeError, SyntaxError
// - the const keyword is used to define/create variable with read-only constants
// - const must have some value while declaration/initialized
// - const value is fixed, not to change/re-assigned in future
// - const is also having block scope
// - the const value never hoisted
// - However, we can still change object properties or array elements

(() => {
  console.log("typescript::variables::const");
  //const name; //error - const must have some value `while declaration/initialized`
  // const name;

  const name: string = "Carlos Requena";
  //console.log("My name is : " + name);
  console.log(`My name is: ${name}`);

  //error - const value is fixed, `not to change/re-assigned` in future
  // const name: string = 'Dino';
})();

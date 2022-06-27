// - Variables are declared traditionally using the keyword: var keyword
// - Many things what we do in plain JavaScript works exactly same with typescript (like declaring a variable with var)
// - Vanilla JavaScript var and scope are tricky, they hoist also it has global and functional scope but not block level scope
// - var keyword variables can be re-declared n number of times
// - The assignment operator (=) is used to assign value to a variable, like this: var varName = value; or var firstName = 'JavaScript';
// - Example: Variables are like box or an envelope which we use to organize various kinds of stuff and put a label on each box or an envelope
// - Example: Variable declaration and assignment is just like Maths & Algebra: x = 10; and in JavaScript we write var x = 10;

(() => {

  console.log("typescript::variables::var");

  var name: string = "Carlos Requena";
  var age: number = 39;
  var isDeveloper: boolean = true;
  //console.log("My details are : " + name + " " + age + " " + isDeveloper);
  console.log(`My details are: \n Name: ${name} \n Age: ${age} \n Is Developer: ${isDeveloper}`);

  var name = "Carlos Requena";
  console.log(`My name is:  ${name}`);
  
})();

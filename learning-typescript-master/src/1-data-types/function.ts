// Functions are the fundamental building block of any application in JavaScript. They’re how you build up 
// layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are 
// classes, namespaces, and modules, functions still play the key role in describing how to do things.

// TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work 
// with.

// To begin, just as in JavaScript, TypeScript functions can be created both as a named function or as an 
// anonymous function. This allows you to choose the most appropriate approach for your application, 
// whether you’re building a list of functions in an API or a one-off function to hand off to another function.

(() => {
  // Named function
  function add(x: number, y: number): number {
    return x + y;
  }

  // Anonymous function
  let add1 = function (x: number, y: number) {
    return x + y;
  };

  //
  function add2(x: number, y: number): number {
    return x + y;
  }

  //
  let add3 = function (x: number, y: number): number {
    return x + y;
  };

  //
  let add4: (x: number, y: number) => number = function (x: number,y: number): number {
    return x + y;
  };

  // myAdd has the full function type
  let add5 = function (x: number, y: number): number {
    return x + y;
  };

  // The parameters 'x' and 'y' have the type number
  let add6: (baseValue: number, increment: number) => number = function (x,y) {
    return x + y;
  };

  //
  let add7 = function (x: number, y: number, cb: (x: number, y: number) => number): number {
    return cb(x, y);
  };
  
  //
  let add8 = (x: number, y: number, cb: (x: number, y: number) => number): number => {
    return add7(x, y, add6);
  };

  //
  type AddFunctionType1 = (x: number, y: number) => number;

  //
  let add9: AddFunctionType1 = (x:number, y:number)=>{
      return (x+y);
  };

  //
  let printResult = (functionName:string, result:number): void =>{
    console.log(`${functionName} -> ${result}`);
  }

  printResult("add",add(2,2));
  printResult("add1",add1(2,2));
  printResult("add2",add2(2,2));
  printResult("add3",add3(2,2));
  printResult("add4",add4(2,2));
  printResult("add5",add5(2,2));
  printResult("add6",add6(2,2));
  printResult("add7",add7(2,2,add6));
  printResult("add8",add8(2,2,add6));
  printResult("add9",add9(3,3));

})();

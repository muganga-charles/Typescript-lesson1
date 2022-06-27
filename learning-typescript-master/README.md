# Learning Typescript

[TYPESCRIPTLANG](https://www.typescriptlang.org/) | [WIKIPEDIA](https://en.wikipedia.org/wiki/TypeScript)  
TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.

TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.

The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, beside C# and other Microsoft languages. An official extension allows Visual Studio 2012 to support TypeScript as well. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.

# Setting up Typescript Development Environment

## Installing Node, NPM and Typescript

- Install node from https://nodejs.org/en/  
  In order to manage multiple versions of Node, I recommend installing nvm, nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.  
  [How to install nvm](https://github.com/nvm-sh/nvm#install--update-script)  
  [How to install nvm with homebrew](https://www.wdiaz.org/how-to-install-nvm-with-homebrew/)  
  [nvm usage](https://github.com/nvm-sh/nvm#usage)
- Open up your terminal window/command prompt (`cmd, git bash, node command prompt`) to run some of node commands
- Verify and check node installation/version by using command: `node -v`
- install typescript globally by using command: `npm install -g typescript`
- Verify typescript Installation by command: `tsc` (tsc = typescript compiler)
- Verify typescript Installation and version both with command: `tsc -v` or `tsc --version`
- Install and use some text editor or IDE (Integrated Development Environment) like `Notepad++, Sublime Text, Adobe Brackets, Visual Studio Code` to type code

## Installing lite-server
[How to install lite-server](https://www.npmjs.com/package/lite-server)

## Running the sample code
Navigate to the root folder and then execute the following commands on a terminal.

```sh
$ npm install # npm install (in a package directory, no arguments): Install the dependencies in the local node_modules folder. In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.
$ tsc --watch # Transpiles the typescrypt code
$ npm start # Start the 
```

# Variable Declarations

[Typescript Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

**let** and **const** are two relatively new types of variable declarations in JavaScript. **let** is similar to **var** in some respects, but allows users to avoid some of the common “gotchas” that users run into in JavaScript. **const** is an augmentation of let in that it prevents re-assignment to a variable.

## var

Declaring a variable in JavaScript has always traditionally been done with the var keyword.

```TypeScript
var hello = "Hello!";
```

## let

The **let** keyword was introduced to JavaScript in ES2015 and is now considered the standard because it’s safer than var. many common problems in JavaScript are alleviated by using let, so you should use it instead of var whenever possible.

```TypeScript
let hello = "Hello!";
```

## const

**const** declarations are another way of declaring variables. They are like let declarations but, as their name implies, their value cannot be changed once they are bound. In other words, they have the same scoping rules as let, but you can’t re-assign to them.

```TypeScript
const hello = "Hello!";
```

# Data Types

[Typescript basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html#)

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along

## Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

```TypeScript
let isDone: boolean = false;
```

Some example code with boolean

```TypeScript
let flag: boolean = true;
if (typeof flag === "boolean") {
console.log(`flag variable is a ${typeof flag} type`);
console.log(`flag variable value is ${flag}`);
flag = false;
console.log(`Now flag variable value is ${flag}`);
// flag = 1; We cannot assign 0 or 1 to a boolean type.
```

## Number

As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```TypeScript
let decimal: number = 6; // There is not any difference between 6 and 6.0
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

```TypeScript
let color: string = "blue";
color = 'red';
```

You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form \${ expr }.

```TypeScript
let fullName: string = `Carlos Requena`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;
console.log(sentence);
```

## Array

- Arrays in Typescript works in the same way as they work in JavaScript
- Same as JavaScript, TypeScript allows us to deal with arrays of values
- Array types can be written in one of two ways.

1.  In the first, you use the type of the elements followed by [] to denote an array of that element type:

```TypeScript
let list: number[] = [1, 2, 3];
```

2. The second way uses a generic array type, Array<elemType>:

```TypeScript
let list: Array<number> = [1, 2, 3];
```

- Some examples

```TypeScript
let list1: string [] = ['JavaScript','jQuery','Angular','React'];
let list2: [string, string, string, string] = ["JavaScript","jQuery","Angular","React"];
let list3: Array<string> = ['C','C++','Java','Ruby','Phthon'];
```

## Tuple

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```TypeScript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

When accessing an element with a known index, the correct type is retrieved:

```TypeScript
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
```

Accessing an element outside the set of known indices fails with an error:

```TypeScript
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
```

## Enum

A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

```TypeScript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(`Red -> ${Color.Red}`); // Red -> 0
console.log(`Green -> ${Color.Green}`); // Green -> 1
console.log(`Blue -> ${Color.Blue}`); // Blue -> 2
```

By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:

```TypeScript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:

```TypeScript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

```TypeScript
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
```

## Any

- A variable with any type can hold value with any data type (like the first variable holds string than assign number or boolean type)
- For data type any there is no compile-time checking
- The any data type is the supertype of all types in TypeScript which denotes a dynamic type.

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type checking and let the values pass through compile-time checks. To do so, we label these with the any type:

```TypeScript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

**Object** only allow you to assign any value to them. You can’t call arbitrary methods on them, even ones that actually exist:

```TypeScript
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

> Note: Avoid using Object in favor of the non-primitive object type. [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types)

## Void

void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

```Typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

```Typescript
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
```

## Null and Undefined

In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

```Typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

However, when using the --strictNullChecks flag, null and undefined are only assignable to any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.

## Never

The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

Some examples of functions returning never:

```Typescript
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```

## Object

object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.

With object type, APIs like Object.create can be better represented. For example:

```TypeScript
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

create(42); //  Argument of type '42' is not assignable to parameter of type 'object | null'.
create("string"); // Argument of type '"string"' is not assignable to parameter of type 'object | null'.
create(false); // Argument of type 'false' is not assignable to parameter of type 'object | null'.
create(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
```

## Type assertions

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms

One is the as-syntax:

```TypeScript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

The other version is the “angle-bracket” syntax:

```TypeScript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

## Union

TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.
_syntax_ (type1 | type2 | type3 | .. | typeN)

Examples

```TypeScript
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
```

## Literal

Literals are exact values that are JavaScript primitives and that are assigned to variables when declared. In literal types you are sure or you already know in development time the exact value or values that a variable will hold.

Examples

```TypeScript
let foo: "Hello";
foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"

const TRUE: true = true; // OK
const FALSE: false = false; // OK
const TRUE: true = false; // Error: Type 'false' is not assignable to type 'true'
const FALSE: false = true; // Error: Type 'true' is not assignable to type 'false'
let value: true | false; // Type boolean

let zeroOrOne: 0 | 1;
zeroOrOne = 0; // OK
zeroOrOne = 1; // OK
zeroOrOne = 2; // Error: Type '2' is not assignable to type '0 | 1'

const enum HttpPort {
  Http = 80,
  Https = 443
}

```

Literal types are not very useful on their own but can be combined in a type union to create a powerful (and useful) abstraction e.g:

```TypeScript
type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
}

move(1,"North"); // Okay
move(1,"Nurth"); // Error!
```

## Aliases

TypeScript provides convenient syntax for providing names for type annotations that you would like to use in more than one place. The aliases are created using the type SomeName = someValidTypeAnnotation syntax. Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

Example:

```TypeScript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
```

Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.

Just like interfaces, type aliases can also be generic - we can just add type parameters and use them on the right side of the alias declaration:

```TypeScript
type Container<T> = { value: T };
```

We can also have a type alias refer to itself in a property:

```TypeScript
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
```

Together with intersection types, we can make some pretty mind-bending types:

```TypeScript
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
```

However, it’s not possible for a type alias to appear anywhere else on the right side of the declaration:

```TypeScript
type Yikes = Array<Yikes>; // error
```

Other examples:

```TypeScript
type StrOrNum = string|number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';
// Just checking
sample = true; // Error!

type MyText = string | { text: string };
type MyCoordinates = [number, number];
type Callback = (data: string) => void;
```

## Function Type

Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things.

TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

To begin, just as in JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

**Examples**

```TypeScript
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
```

# Typescript Operators
[tutorialspoint typscript::operators](https://www.tutorialspoint.com/typescript/typescript_operators.htm)

An Operator is a symbol which operates on a value or data. It represents a specific action on working with data. The data on which operators operates is called operand. It can be used with one or more than one values to produce a single value. All of the standard JavaScript operators are available with the TypeScript program.

**Example**
```TypeScript
3 + 6 + 9 = 18;
```

## Arithmetic Operators
Arithmetic operators take numeric values as their operands, performs an action, and then returns a single numeric value. The most common arithmetic operators are addition(+), subtraction(-), multiplication(*), and division(/).

**Addition**
```TypeScript
let a = 3;
let b = 6;
let c = a + b;
console.log( c );
```

**Subtraction**
```TypeScript
let a = 3;
let b = 6;
let c = a - b;
console.log( c );
```

**Multiplication**
```TypeScript
let a = 3;
let b = 6;
let c = a * b;
console.log( c );
```

**Division**
```TypeScript
let a = 3;
let b = 6;
let c = a / b;
console.log( c );
```

**Modulus - It performs the division operation and returns the remainder.**
```TypeScript
let a = 3;
let b = 6;
let c = a % b;
console.log( c );
```

**Increment**
```TypeScript
let a = 35;
a++;
console.log( a );
```

**Decrement**
```TypeScript
let a = 37;
a--
console.log( a );
```

## Relational Operators
Relational Operators test or define the kind of relationship between two entities. Relational operators return a Boolean value, i.e., true/ false.
```TypeScript
let a = 10;
let b = 20;
console.log(a == b) // false
console.log(a != b) // true
console.log(a === b) // false
console.log(a !== b) // true
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= b) // false
console.log(a <= b) // true
```

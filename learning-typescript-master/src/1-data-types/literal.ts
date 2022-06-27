(()=>{
    // Literals are exact values that are JavaScript primitives and that are assigned to variables when declared. In literal types you 
// are sure or you already know in development time the exact value or values that a variable will hold.

// Examples

let foo: "Hello";
// foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"

const TRUE: true = true; // OK
const FALSE: false = false; // OK
// const TRUE: true = false; // Error: Type 'false' is not assignable to type 'true'
// const FALSE: false = true; // Error: Type 'true' is not assignable to type 'false'
let value: true | false; // Type boolean

let zeroOrOne: 0 | 1;
zeroOrOne = 0; // OK
zeroOrOne = 1; // OK
// zeroOrOne = 2; // Error: Type '2' is not assignable to type '0 | 1'

const enum HttpPort {
  Http = 80,
  Https = 443
}

// Literal types are not very useful on their own but can be combined in a type union to create a powerful (and useful) abstraction e.g:

type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
}

move(1,"North"); // Okay
// move(1,"Nurth"); // Error!

})();
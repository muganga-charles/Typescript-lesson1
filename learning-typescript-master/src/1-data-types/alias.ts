// TypeScript provides convenient syntax for providing names for type annotations that you would like to use in more than one place. 
// The aliases are created using the type SomeName = someValidTypeAnnotation syntax. Type aliases create a new name for a type. 
// Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise 
// have to write by hand.

// Example:

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

// Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. Aliasing a primitive is not terribly 
// useful, though it can be used as a form of documentation.

// Just like interfaces, type aliases can also be generic - we can just add type parameters and use them on the right side of the 
// alias declaration:

type Container<T> = { value: T };

// We can also have a type alias refer to itself in a property:

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// However, it’s not possible for a type alias to appear anywhere else on the right side of the declaration:
type Yikes = Array<Yikes>; // error

// Other examples:
type StrOrNum = string|number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';
// Just checking
// sample = true; // Error!

type MyText = string | { text: string };
type MyCoordinates = [number, number];
type Callback = (data: string) => void;

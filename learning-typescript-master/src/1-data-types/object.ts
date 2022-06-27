declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

//create(42); //  Argument of type '42' is not assignable to parameter of type 'object | null'.
//create("string"); // Argument of type '"string"' is not assignable to parameter of type 'object | null'.
//create(false); // Argument of type 'false' is not assignable to parameter of type 'object | null'.
//create(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'object | null'.

// - Typescript introduced a new data type named any
// - A variable with any type can hold value with any data type (like the first variable holds string than assign number or boolean type)
// - For data type any there is no compile-time checking
// - The any data type is the supertype of all types in TypeScript which denotes a dynamic type

(() => {
  console.log("typescript::datatypes::any");
  let data1: string = "Data1";

  //error - string type can not accept number or other data
  // data1 = 50;

  // any data type variable can store any type of value, there are no data checking
  let data2: any = "Data2";
  data2 = 50;
  data2 = true;
  data2 = ["Hi", "Hey", "Good", "Hello"];

  console.log(data2);
})();

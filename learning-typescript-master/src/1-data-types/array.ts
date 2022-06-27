//  - Arrays in Typescript works in the same way as they work in JavaScript
//  - Same as JavaScript, TypeScript allows us to deal with arrays of values
//  - Array types can be written in one of two ways. 
   
//    1. In the first, you use the type of the elements followed by [] to denote an array of that element type:
//   let list: number[] = [1, 2, 3];
 
//    2. The second way uses a generic array type, Array<elemType>:
//   let list: Array<number> = [1, 2, 3];
 
// - Some examples
//    * let list1: string [] = ['JavaScript','jQuery','Angular','React'];
//    * let list2: [string, string, string, string] = ["JavaScript","jQuery","Angular","React"];
//    * let list3: Array<string> = ['C','C++','Java','Ruby','Phthon'];
//    * In the above example, we declared an array of strings by assigning it the string type (Now TypeScript will make sure the array  contains only strings)


(() => {
  console.log("typescript::datatypes::array");
  let list1: string[] = ["JavaScript", "jQuery", "Angular", "React"];
  let list2: [string, string, string, string, number?] = ["JavaScript","jQuery","Angular","React"];

  console.log("list1:", list1);
  console.log("list2:", list2);

  let list3: Array<string> = ["C", "C++", "Java", "Ruby", "Phthon"];
  console.log("list3", list3);
})();

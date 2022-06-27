// As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. 
// In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

(() => {
  let decimal: number = 6; // There is not any difference between 6 and 6.
  let decimal2: number = 6.0; // There is not any difference between 6 and 6.0
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;

  console.log(`decimal -> ${decimal}`);
  console.log(`decimal2 -> ${decimal2.toFixed(1)}`);
  console.log(`hex -> ${hex}`);
  console.log(`binary -> ${binary}`);
  console.log(`octal -> ${octal}`);

  if(decimal === decimal2){
      console.log("decimal value equals to decimal2 value")
  }
  
})();

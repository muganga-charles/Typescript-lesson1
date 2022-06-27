// The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

(() => {
  let flag: boolean = true;
  if (typeof flag === "boolean") {
    console.log(`flag variable is a ${typeof flag} type`);
    console.log(`flag variable value is ${flag}`);
    flag = false;
    console.log(`Now flag variable value is ${flag}`);
    // flag = 1; We cannot assign 0 or 1 to a boolean type.
  }
})();

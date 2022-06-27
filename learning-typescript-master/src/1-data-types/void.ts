(() => {
  // void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return
  // type of functions that do not return a value:

  function warnUser(): void {
    console.log("This is my warning message");
  }

  warnUser();
  
  //  Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified)
  let unusable: void = undefined;
  //unusable = null; // OK if `--strictNullChecks` is not given
})();


// - Typescript encourages programmers to use let and const keyword-based variables
// - let and const variables have block level scope also they can not be re-declared multiple times
// - To deal with scope in JavaScript we have new keyword named let used to declare variables
// - We use the let keyword to create block scoping in JavaScript in locations where we weren't able to do so before
// - Let keyword block scope - let keyword variables exist only inside block { }scope
// - let keyword variables cannot be used before the declaration (never hoisted)
// - let keyword variables can not be re-declared

(()=>{
    
    console.log("typescript::variables::let");
    let name: string = 'Carlos Requena';
    let age: number = 39;
    let isDeveloper: boolean = true;
    //console.log('My details are : ' + name + ' ' + age + ' ' + isDeveloper);
    console.log(`My details are: \n Name: ${name} \n Age: ${age} \n Is Developer: ${isDeveloper}`);

    // let variables not be re-declared
    // let name: string = 'Dino';

})();
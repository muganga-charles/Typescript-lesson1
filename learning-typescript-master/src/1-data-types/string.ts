// Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. 
// As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also 
// uses double quotes (") or single quotes (') to surround string data.

// You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded
// by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.

(() => {
  let fullName: string = `Carlos Requena`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}`;
  console.log(sentence);
})();

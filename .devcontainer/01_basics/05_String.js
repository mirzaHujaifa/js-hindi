const name = "Mirza"
const Number=26

console.log(name + Number);//it is olde syntax not to use 
console.log(`My name is ${name} and My age is ${26}`);// for good pratics use this symtax

//how to declear a string 
const gameName = new String('Mirza-hujaifa')

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf('i'));
// console.log(gameName.charAt(3));
// console.log(gameName.__proto__);


// How to subtituing a string
const newString = gameName.substring(1, 4)
console.log(newString);
//How to use slice
const stringTwo = gameName.slice(-13, 4)
console.log(stringTwo);

//How use to trim
const string5 = "  Mirza  "
console.log(string5);
console.log(string5.trim(' '));

//How to use replace
const url = "http//:mirza.com%29keron"
console.log(url.replace('%29'));


















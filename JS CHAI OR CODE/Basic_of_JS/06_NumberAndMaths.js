const score = 200

// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length); // Number ko String mai convert karta hai or "length" ki length bata hai

// console.log(balance.toFixed(2)); // yeh O/p => 100.00 ,yeh ".00 " "toFixed (2)" naam ke function se hua 
 
const otherNumber = 123.922
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++++++++++ Math ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // O/p => 4 , Bcz yeh negative value se positive karta hai
// console.log(Math.abs(4)); // O/p => 4, Bcz yeh only negative value se positive karta hai

// console.log(Math.round(4.6)); // O/p => 5 , yeh function = "round" roundof  value deta hai 
// console.log(Math.round(4.2)); // O/p => 4 , yeh function = "round" roundof  value deta hai

// console.log(Math.ceil(4.2)); // O/p => 5 , yeh function = "ceil" high value hi provide karega 
// console.log(Math.floor(4.8)); // O/p => 4 , yeh function = "floor" low value hi provide karega 

// console.log(Math.min(4, 2, 5, 1)); /* O/p => 1, yeh function = "Min" Array mai se minimum
// value deta hai */
// console.log(Math.max(4, 2, 5, 1)); /* O/p => 5, yeh function = "Max" Array mai se maximum 
// value dete hai */

// ++++++++++++++++++++++++++++ IMP(Math) ++++++++++++++++++++++++++++++++


// console.log(Math.random()); /* O/p => "0.7203060466006472" 👈 Ese  Random  O/p  Deta  Har
// Baar , Returns  a  pseudorandom  number  between 0 and 1. */

// console.log((Math.random() * 10 ) + 1); /* O/p => "4.0521093242424335" 👈 Esa  Random  O/p
// Ayega  But  yeh  method  " ((Math.random() * 10 ) + 1) "   se  O/p  "1 se 10"  ke  Bech 
// Random  Kuch  bhi  aa  sakta  hai  */

// console.log(Math.floor((Math.random() * 10) + 1)) /* O/p => " 4 " 👈 Esa  Random  "1 se 10"
// O/p  Ayega  or  yeh  Function = " Floor "  se  O/p  decimal  mai  nhi  Ayega  */


const min = 10
const max = 20 

console.log( ( Math.random () * ( max - min ) ) + 1 );

console.log( Math.floor ( Math.random () * ( max - min ) + 5 ) );
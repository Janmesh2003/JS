let MyArr = [0, 1, 2, 3, 4, 5];

// console.log( MyArr[4] );


const A = new Array(1,2,3,4)

// console.log(A.length);

// Array Method 

// MyArr.push(6, 7, 8) /* 6, 7, 8 yeh tino Push ho jayenge seq wish */
MyArr.push(7) /* yeh 7 bhi push ho jayenga pr upper ke 3 no ke baad */

MyArr.pop() /* yeh Array mai se last value ko remove kar deta hai */


MyArr.unshift(9) /* yeh fuction = "unshift" mein jo bhi value dete hai wo Array Ke Start 
Indexing mai ajata hai or Yaadi Array mai Elements & Number jada hai tho Time Consuming 
ho Jata or System pr bhi load Ata hai, Isliye hum iska Jada Use Nahi karte hai */

 MyArr.shift() /* Yeh Array ki '0' Indexing ki value ko hata Deta hai  */
// MyArr.shift() /* Yeh Array ki '0' Indexing ki value ko hata Deta hai  */

// console.log(MyArr.includes(9)) /* Yeh  Function  = "includes()"  like  Array  se  Question
//   ke  liye  use  hota  or  include  function  mai  value  dena  padthi  kyuki  yeh  fuction
//   Yuss  value  ko  Array  mein  check  karta  hai  yaadi  bo  value  Array  mein  hai  tho
//   "True"  or  nahi  hai  tho  "False"  O/p  deta  hai 
//                                  AND
//                  yeh  Result / Output boolean type mai deta hai like => true / false
// */
               
// console.log(MyArr);

let NwAr = [5, 6, 7, 8, 9, 10]

// console.log( NwAr.indexOf(8)); /* Array ke Number / Object ki Indexing batata hai or nahi 
// hota hai tho -1 Output Deta hai yeh Function  */

//  NwAr = MyArr.join(); /* yeh function = "join()" Se ek Array ki dusre Array mai aa gyi Or 
//  yeh String mein convert ho gyi  */


// console.log(NwAr);

console.log(`Original Array => `, MyArr);

let NewAr1 = MyArr.slice(1,4) /* "slice" function mein Range Include nhi hoti hai na hai or
Given Array mein kuch Change hota hai */
console.log(`Slice = `, NewAr1) 
console.log(`After using Slice function => `, MyArr );

let NewAr2 = MyArr.splice(1,4) /* "Splice"  function  mein  Range  tho  Include  hoti  hi 
hai  pr, yeh  function  mein  jo  indexing  dete  hai  wo  utni  value  Array  main  se  hi  
hatt  jathi  hai  */
console.log(`Splice = ` , NewAr2);
console.log(`Array After using Splice fuction => `, MyArr);



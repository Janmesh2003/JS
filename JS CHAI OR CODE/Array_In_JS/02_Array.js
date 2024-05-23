const Marvel_heroes = ["thor", "IronMan", "spiderMan"]
const DC_heroes = ["Superman", "flash", "batman"]

// Marvel_heroes.push(DC_heroes)
// console.log(Marvel_heroes);

// const All_heroes = Marvel_heroes.concat(DC_heroes) /* yeh Function se hum only do Array 
// ko Ek new Array mai merge / Add kar sakte hai "(Yeh functiom se Hum Do(2) se jada Array 
// ko add nhi kar sakte hai )" */
// console.log(All_heroes);

const All_new_heroes = [...Marvel_heroes, ...DC_heroes] /* Yeh Function se hum "Do(2) yaa
do(2) se jada " Array ko Ek new Array mai Add / merge kar sakte hai  */

console.log(All_new_heroes);

//___________________________________________________________________________________________

const Another_Array = [1, 2, 2, [21, 2, 4, 6], 4, 5, [1, 9, [3, 5, 6]]]

const real_Arr = Another_Array.flat(Infinity) /* Yeh Function = "flat(Infinity)" Array ke 
Ander array ( [ [ [ ] ] ] ) ko Ek(1) Array mai convert karne ke liye use hota hai */
console.log(real_Arr);

//__________________________________________________________________________________________

const Arr1 = "janmesh"
console.log(Array.from(Arr1)); /* Yeh function = "From(Arr1)"  String ko Array mai convert 
kar deta hai O/p like = ['j', 'a', 'n', 'm', 'e', 's', 'h']  */

const num = 1232
const num1 = 12
const num2 = 43
const num3 = 90
const Str1 = "bhh"
console.log(Array.from(num)); /* but Yeh function number ko Array mein convert nhi kar 
sakta hai , pr Mai is number ko String kar du tho 1232 ko "1232" abh yeh Array mein 
convert ho sakta hai */

console.log(Array.of(num, num1, num2, num3, Str1)); /* Yeh function Se Hum  dataType ke 
no or string / object ko array mai store kara Sakte hai */



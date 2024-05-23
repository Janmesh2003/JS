let names = "Janmesh"
let  RollNumber = 52

console.log(`Hello my name is ${names} and my rool number is ${RollNumber} ${23} `);

// Yeh JavaScript ka Mordern way hai values ko ek sath print karane ka 👆



let FullName = new String("JanmeshThakur")

console.log(FullName[6]); // yeh yeh bata hai 6 positin pr konsa character hai 

// console.log(FullName.__proto__);


console.log(FullName.length); // yeh String ki length bata hai 
console.log(FullName.toUpperCase()); /* yeh String ko Uppercase main Convert karke O/p
deta hai */   
console.log(FullName.charAt(6)); /* yeh Function ="charAt(6)" 6 positin pr konsa character
 hai yeh batata hai */
console.log(FullName.indexOf('e')); // yeh Character ka indexing value bata hai 


const newString = FullName.substring(0,7) // isko hum Substring mai divide kare bhi kar sakte hai
console.log(newString);

const another = FullName.slice(4,-2) // ismain hum negative value ka use kar sakte hai 
console.log(another);

const newString1 = "    janmesh "
console.log(newString1);
console.log(newString1.trim()); // yeh  trim starting space or end ki space ko trim kar deta hai 


const url = "https://janmesh.com/janmesh%dh20fjdf[fd"

console.log(url.replace('20fjdf[fd','tt')); /* yeh url(string value) mai se koi words
 ko replace karneke liye use hota hai  */

console.log(url.includes("janmesh")); /* O/p => 'true' bcz yeh check karta hai yeh word url main hai ki
nahi */

console.log(url.includes('bhyyu')); // O/p => 'false' bcz yeh word url mai nahi hai isliye


console.log(url.split('/')); // yeh ek sperator ke through array mai covert karta hai 
const New_String = "my-name-is-janmesh"
console.log(New_String.split('-'))

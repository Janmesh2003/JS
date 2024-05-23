// ************************************ Singleton ******************************************
// Object.create
//___________________________________________________________________________________________

// ********************************* Object literals *************************************** 

const mySym = Symbol("key1") /* yeh Symbol hai isse Releted Interview mai Question
karte hai  */ 
// Question like ki Ek symbol lena hai usko key ki Tara define karna hai or print karana
// hai ?

const JsUser = {
    name : "janmesh",
    "full name" : "Janmesh Thakur",
    [mySym] : "key1", /* Half Ans => ki Symbol ko key tara define Esse hi karte hai  */
    age : 21,
    location : "Indore",
    email : "janmesh@121",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Saturday"]  
}

// console.log(JsUser.name); /* Yeh Sahi (.) tarika Nhi❌ hai Object ko print karane ka,
// Bcz "hum yeh String like => ( "full name" ) isko access nhi kar painge dot(.) laga kar" */

// console.log(JsUser["full name"]); /* Yeh Sahi✅ tarika hai Object ko print karane ka */

// console.log(JsUser[mySym]); /* Full Ans => Or Esse Isko print karte hai, yeh ho gya Ans
// Interview ke Question ke liye */


// JsUser.email = "Bhyyu@112" /* Esse hum object ki Value Change Kar Sakte hai */
// console.log(JsUser["email"]); 

// Object.freeze(JsUser) /* Yeh Function = "Freeze(JsUser)" JsUser yeh Object Ki value Change
// Nhi hogi */


JsUser.greeting = function()
{
    console.log("hello Js user ");
}

JsUser.greetingTwo = function()
{
    console.log(`hello Js user, ${ this [ "full name" ] }`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

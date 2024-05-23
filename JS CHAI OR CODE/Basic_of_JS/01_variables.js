const accountId =1232
let accountEmail="janmesh@121.com"
var accountPass="123"
accountCity="jaipur"// yaadi iske sath koi dataType declare nhi hai tho yeh by default "var" hi hai.

let accState;// iska O/P "undefined" ayega 


// accountId=2// accountId const hai isliye iski value change nhi hogi.


accountEmail ="Bhyyu@121.com"
accountPass="110"
accountCity="bhyyu"
console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountCity , accState])


/*
Prefer not to use "var"
Because of issue in block scope and functional scope 
*/
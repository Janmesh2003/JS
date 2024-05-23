console.log(2 > 1); // *
console.log(2 >= 1); // *
console.log(2 < 1); //  ****** => yeh Sab basic comparison Operation hai 
console.log(2 == 1); // *
console.log(2 != 3); // *


console.log("2" > 1); /* Iska O/p => "true" ayega ,bcz JS String value ko compare karte 
                                      time string ko number mai convert kar deta hai  */
console.log("02" > 1); // same O/p => " true "

console.log("2" == 2); // same O/p => " true "

//but,    ( === ) yeh dataType of stricky check karta hai  
console.log("2" === 2); /* O/p => false, bcz this ( === ) Operator DataType ko change nhi  
                                  karta yaadi ek strig value hai or dusri number tho yeh  
                                  string value ko number se compare karta hai  */



 
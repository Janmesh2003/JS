function calculate_Cart (...num) /* yeh rest => "..." function laga
ne se hum jada argumet ko execute kar sakte hai */
{
    return num;
}

// console.log(calculate_Cart(144, 122 )); /* yaadi maine parameter 
// se jada argument diya tho phele wali argu hi print hoga */

// console.log(calculate_Cart(122, 111, 500, 7000 ));

const user = {
    name: "bhyyu",
    price : 500
}

function Acces_Object (AnyObj)
{
    console.log(`Usker name is ${AnyObj.name} Product price is ${AnyObj.price} `);
}
/* YEh Object bana ke kar usko function ki help Acces kar Sakte hai  */
// Acces_Object(user)  /* Execute the Object  */

function Again_Acces_Object(AccOb)
{
    console.log(`User name is ${AccOb.Full_name} Product name is ${AccOb.product} price is ${AccOb.price} `);    
}

// Again_Acces_Object(
//     {
//         Full_name : "Janmesh Thakur",
//         product : "cream",
//         price : 210
//     }
// ) /* Is Tara se hum "Object" Ko function mai Bana kar Execute kar 
// sakte hai  */

let My_Arr = [10, 20, 30, 40]

function Acces_Array(Get_Array)
{
    return Get_Array[2]; 
}
 
console.log(`Second indexing of MyArr is`,  Acces_Array (My_Arr));




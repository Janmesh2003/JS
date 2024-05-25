let a = 10
const b = 30
// console.log(a);
// console.log(b); 
/* yeh Sab tho print ho jayega pr */

if (true )
{
    let a = 10
    const b = 20

}

// console.log(a); /* yeh dono print nhi hoge kyu ki yeh Scope => "{}" ke andar hai or if condition
// ke Andar hai */
// console.log(b);

function Parent()
{
    let userName = "janmesh"
    function Child()
    {
        let ChldUser_name = "ppt"
        console.log(userName); /* Yeh Child function Parent Function ki properties o Acces kar 
        sakta hai  */

    }
    // console.log(ChldUser_name); /* Yeh Acces nhi ho sakta kyuki, parent Function Child function 
    // ki properties ko acces nhi kar sata */
    Child()

}
// Parent() /* yaadi hum "Parent" Function ko yaha execute nhi karenge tho "Child"  Function ko 
// Execute karne ka koi mtlb nhi Kyuki Wo Execute hi nhi hoga  */


console.log(add_One(5)) /* Yeh pr Functio Uper bhi Execute ho jayega */
function add_One(num)
{
    return num + 1
}
// console.log(add_One(5)); /* Or yaha Bhi Execute ho jayega */

// BUT,

console.log ( Add_var(8) ) /* yeh Functin yaha Pr Execute nhi hoga  or "Error" show karega 
Kyuki, humne Function ko Ek "Variable" mai liya hai or Vo "Variable" nichhe Declare hai Uper hi
Isilye nhi hoga Yeh Sirf "Variable" Declare karne ke nichhe hi Hoga */

let Add_var = function add_Two (num)
{
    return num + 2
}


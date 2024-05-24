function my_name()
{
    console.log("hi");
    console.log("janmesh");
    console.log("ji");
    
}
// my_name() /* Yeh Fuction ko exicute karane ka tarika hai */

// function add ( num1, num2 ) 
// {
//     console.log( num1 + num2 );
// }
// add (3, 5) /* yeh tho sahi  hua Print but, */
// add (3, "5") /* O/p => 35 jo ki galat hai  */
// add (3, "a") /* O/p => 3a yeh bhi galath hai  */

function add ( num1, num2 ) 
{
    // let sum = ( num1 + num2 );
    // console.log(`return ke phele jarru print hota hai `); /* yeh print hoga  */
    return num1 + num2
    // return sum 
    console.log(`return ke baad print nhi hota`); /* yeh print nhi hoga okk */
}
 const result = add(3, 2)
//  console.log( `result : `, result); /* yeh bhi function  tarika hai exciute karane ka  */


function Str (Username)
{
    if( !Username ) /* yeh if statement se Yaadi "Username" function mai koi argument nhi 
     diya tho if condition lagegi */
    {
        console.log(`plz enter your name `);
        return 
    }
    return ` ${Username} logged in`
}

// let Ptr = Str ("janmesh")
// console.log(Ptr); /* yeh tho Tari hai hi sahi Function ko exciute
// pr, Ek or bhi tari ha  wo mai nichhe batunga */
 console.log(Str()); /* Yeh pr Argument nhi diye hai isliye if statement lagaya hai 
 if nhi laga tha tho O/p => Undefined ata  */




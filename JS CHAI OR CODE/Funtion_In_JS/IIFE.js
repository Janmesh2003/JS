// Immediately Invoked Function Expresssion

(function Add() {

    console.log(`hello this function is "named IIFE"`);

})();


( () => {
    
    console.log(`this function  is "Arrow and Named free"`);

} )();


( (name) => {

    console.log(`my Name is ${name} `);

} )(`janmesh`) 












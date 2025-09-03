// Immediately invoked function expression (IIFE)
/*Avoid global scope pollution → Variables inside an IIFE stay private and don’t interfere with variables in other scripts.

Data privacy → It lets you create private variables and functions that cannot be accessed from outside.

Immediate execution → Useful for running setup or initialization code right away.

Encapsulation → Groups related logic together without exposing internal details.

In short: IIFE is used to execute code immediately while keeping variables and logic private. */

//Named IIFE
 (function chai(){
    console.log(`db connected`)

 })();
//UnNamed IIFE with oassing parameters
//
((name)=>{
    console.log(`db connected two ${name}`)
})('Hiets')

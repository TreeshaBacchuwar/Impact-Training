// Immediately Invoked Function Expression (IIFE) - function which executes immediately, sometimes there are problems created due to global scope's pollution so to remove all the global scope's pollution like variables and declarations this is used.

//wrap the function in paranthesis and also add paranthesis after them for execution.
//example:
// (function chai(){
// named IIFE
//     console.log(`DB CONNECTED`);
// })(); //always end with semi colon, as the iife needs to end.


( (name) => {
    //unnamed IIFE with parameters passed
    console.log(`DB CONNECTED TWO ${name}`)
})("Treesha")

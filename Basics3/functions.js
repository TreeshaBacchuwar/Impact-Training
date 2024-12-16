function sayMyName(){
    console.log("T");
    console.log("R");
    console.log("E");
    console.log("E");    
}
//sayMyName()
// reference () <- execution

// function add(num1,num2){
//    console.log(num1+num2 );   
// }

function add(num1,num2){
    return(num1+num2 );   
 }

const result = add(3,4)
// console.log("Result: ",result);

function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("Treesha"))

//rest operator
function calculateCartPrince(val1, val2, ...num1){ //rest operator is same as spread operator it depends on the use case what its called. Here it will take all individual values and convert them into array.
   return num1
}
//console.log(calculateCartPrince(200, 400, 500, 2000))


//handle object
const user = {
    username : "hitesh",
    price : "299"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

//handle array

const Array = [200,400,100,600]

function SecondValue(getArray){
    return getArray[1]
}
console.log(SecondValue(Array));



const user = {
    username: "Treesha",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`) //this gives us the value from the or refers to the current context.
    }

}

// user.WelcomeMessage()
// user.username = "Isha"
// user.WelcomeMessage()

const chai = () => {
    let username = "Treesha"
    console.log(this);
}
//chai()

// const Add = (num1,num2) =>{     // explicit method - we use return keyword explicitly 
//     return num1+num2
// }                               // if curly braces are used write return if paranthesis are used dont write return
console.log(Add(3,4));

const Add = (num1,num2) => num1 + num2 // implicit method - we dont need to use return keyword

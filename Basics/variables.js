const accountId = 123
let accountEmail = "treesha@google.com"
var accountPassword = "12345"
// dont use var bcoz of issue in block scope and function scope.
// only use let and const. we can change values of variable if we use let but cant change it when we use const.

accountCity = "Vadodara"
let accountState


console.table([accountId,accountEmail,accountPassword,accountCity, accountState ])
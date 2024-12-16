let score = "33"

// console.log(typeof(score));

let valueInNumber = Number(score) //N should be capital in Number.
// console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0
// 1 => true ; 0=> false
// "" => false
// "hitesh" => true

// ***************** OPERATIONS ****************

let value = 3
let negValue = -value
// console.log(negValue);

// prefix and postfix increment operators:-

let a = 3
const b = a++
console.log(`a:${a}, b:${b}`)
// output: a=4 and b=3 
// for postfix operators(a++), the increment operator increments and returns the value before incrementing.
// for prefix operators(++a), the increment operator increments and returns the value after incrementing.

// === checks the value and the datatype called as strict check.
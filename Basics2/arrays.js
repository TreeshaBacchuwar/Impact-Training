//array - it is an object which can stores collection of multiple items under a single variable name.
// it is resizable
// can contain a mix of datatypes
// are not associaitive array, they can't be accessed through arbritary strings.
// they start with zero index.
// last index is length - 1
// they create shallow copies 
// a shallow copy of an object is a copy whose properties share the same references(point to the same underlying values) as those of the source object
//      from which the copy was made. As a result when u change either the source or the copy, you may also cause the other object to change too.
// in deep copy source and copy are both independent

// declare array
const myArr = [0,1,2,3,4,5]
const myArr2 = ["IronMan", "SpiderMan"]

const myArr3 = new Array(1,2,3,4)

// Array methods

// myArr.push(6) // pushes an element into the array
// myArr.push(7) 
// myArr.pop() //removes the last element


// myArr.unshift(9) //adds the element in the beginning of an array.
// myArr.shift() //removes the element from the beginning of an array
// these two methods are not optimized as we need to change every element's place.


// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(5));

// const newArr = myArr.join //adds all the elements of an array into a string.

// slice - doesnt change the original array. and does not include the end element
// splice - removes the elements which are spliced from the original array, so it changed the original array and it includes the end element.


const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes.flat());

// const allHeroes = dc_heroes.concat(marvel_heroes)
// console.log(allHeroes);

// const all_new_Heroes = [...marvel_heroes,...dc_heroes]  //spread method 
// console.log(all_new_Heroes);


// arr = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
// const newArr = arr.flat(Infinity)
// console.log(newArr);

//  to check if its an array or not use isArray method.
//  to convert anything into array use .from method


// console.log(Array.isArray("Treesha"));
// console.log(Array.from("Treesha"));


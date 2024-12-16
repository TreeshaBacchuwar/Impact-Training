// singleton - when we create a constructor this is created.
// object.create - object made by constructor, singleton is created here

// object literals

const mySym = Symbol("key1") // symbol declaration

const JsUser = {    //creation of object
    name : "Treesha",
    age: 20,
    [mySym]:"mykey1",               //  ek symbol lo usko object ke keys me add kro and print karo or to use a symbol as a key.
    location: "Vadodara",
    email: "treesha2004@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser[mySym])

// Object.freeze(objectname) is used for making sure that the object is not changed after its freezed.

const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isloggedIn = false

const regularUser = {
    email: "treesha@gmail.com",
    fullname : {
        userfullname: {
            firstname:"Treesha",
            lastname: "Bacchuwar"
        }
    }
};

//console.log(regularUser["fullname"]["userfullname"]["firstname"]);
//console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {4:"d",5:"e"}


// assign operator
const obj3 = Object.assign(obj1, obj2,obj4)  //if we dont add the braces in the parameters all the objects will be combined in object1.
//const obj3 = Object.assign({},obj1, obj2,obj4)  //when we add the braces an empty object is created and all the objects are saved there.
// console.log(obj3)
// console.log(obj1)

const obj5 = {...obj1,...obj2,...obj4} //spread 
//console.log(obj5);


const users = [
    {
        id :1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"t@gmail.com"
    }
]
//console.log(users[1].id)

//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); //gives output in arrays.


// to check if a property is in a object or not then use .hasOwnProperty("propertyname"), will give true if it exists or else false.

// Destructuring objects

const course = {
    coursename : "js",
    courseprice : 999,
    courseInstructor : "Treesha"
}
const{courseInstructor : CI} = course //instead of writing the whole senetence everytime while needing courseInstructor we just use it like this once and can type CI everywhere else.
// const {propertyname : petname} = object
//console.log(CI);


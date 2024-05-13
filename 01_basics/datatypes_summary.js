// Defining variables

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const pirates = ["Luffy", "Zoro", "Sanji"]

let myObj = {
    name: "Monu",
    age: 24,

}

console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


// Stack(Primitive) Heap(Non Primitive)

let myChannel = "Storm_Gaming"

let anotherName = myChannel
anotherName = "OnePieceMemes"

console.log(anotherName);
console.log(myChannel);

let userOne = {
    email: "userOne@gmail.com",
    pass: "123456"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);


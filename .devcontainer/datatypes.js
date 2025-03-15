// Primitive 

// 7 types : String, Number, Boolean, null , undefined ,Symbol, BigInt

const id=Symbol(134)
const anotherId=Symbol(139)

console.log(id===anotherId)

let userEmail = "mirz@gmail.com"
console.log(userEmail)
 const bigNumber= 13456775445645646448763845386582348n
 console.log(bigNumber)

// Reference (Non primitive)

// Artay, Object, Function

const heroo=["Ben 10" ,"Spider-man" ,"Hulk"];
console.log(heroo)


let myObj = {
    name : "Mirza",
    age : 27,
}

console.log(myObj)



const myFunction = function(){
    console.log("Hellow World");
}
console.log(typeof myFunction)
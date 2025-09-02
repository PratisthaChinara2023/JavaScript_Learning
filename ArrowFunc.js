/*const user={
    username:"pratistha",
    id:123,
     welcomeMessage:function(){
        console.log(`${this.username} welcome to website and ur id is ${this.id}`)
        console.log(this)//{username: 'pratistha', id: 123  welcomeMessage: [Function: welcomeMessage]}
        //.{username: 'chinara', id: 123  welcomeMessage: [Function: welcomeMessage]}
     }
}
user.welcomeMessage()//pratistha welcome to website and ur id is 123
user.username="chinara"
user.welcomeMessage()//chinara welcome to website and ur id is 123
//console.log(this)//{}
/*In Node.js (modules, ES6 by default)
this at the top level is {} (empty object).
That’s why you’re seeing {}.
Node treats each file as a module, and inside a module, this doesn’t point to global (like window in browsers).*/
/*Browsers (non-strict mode)
At the top level, this is the window object.
So you’d see a big object with lots of browser APIs. */

// function chai(){
//     let username="Hitesh"
//     console.log(this.username)//undefined -this can be used n objects but not in function

// }
// chai()


// Arrow Function 
// const chai=()=>{
//     let username="Hitesh"
//     console.log(this.usrename)// undefined
//     console.log(this)// {}
// }
// chai()

// arrow Function
// const addTwo=(num1, num2)=>{
//     return num1+num2// explicit return
// }
const addTwo=(num1,num2)=>(num1+num2)// if you dont give {} then no need to write return-implicit return
const objReturn=()=>({username:"hItesh"})
console.log(addTwo(2,4))//6
console.log(objReturn())//{ username: 'hItesh' }
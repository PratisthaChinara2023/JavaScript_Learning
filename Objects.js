//Singleton
// Object Literials
//const mySymbol=Symbol("Key1")
 const obj={
    name:"Pratistha", 
    "full name":"Prtaistga Chinara",
    mySymbol:"mykey1",
    //[mySymbol]:"mykey1",// [Symbol(Key1)] as output
    age:25,
    location:"jaipur",
    email:"Ptati@gmail.com",
    isloggedin:true
 }
//  console.log(obj.email)//Ptati@gmail.com
//  console.log(obj["email"])//Ptati@gmail.com
//  console.log(obj.full name)// Error1 that is why u should not use obj. becausse u cannot acces this type.
// console.log(obj["full name"])// Prtaistga Chinara

// console.log(obj.mySymbol)// not correct practice
// console.log(typeof obj[mySymbol])// correct syntax 
  //Use freeze to stop changes in the object
// Object.freeze(obj)// The changes will not be made email=hitesh@gmail.com
// obj.email="Hitesh@gmail.com"
// console.log(obj)
obj.greeting=function(){
   console.log("hello js User");
}
console.log(obj.greeting())
// Refer from object
obj.greetingTwo=function(){
   console.log(`hello ${this.name}`);// if you want to reference same object then use this.
}
console.log(obj.greetingTwo())
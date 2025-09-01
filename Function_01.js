/*
function addNum(num1,num2){// num1,num2 are parameters

  console.log(num1+num2)  //5
}
addNum(2,3)// 3 and 2 are arguments

function addNum(num1,num2){// num1,num2 are parameters

return num1 +num2  
}
const add= addNum(3,3)
console.log(add)//5

function userloggin(username)
{
    return `${username} just logged in`
}
console.log(userloggin("Pratistha "))// Pratistha  just logged in
console.log(userloggin())// If nothing is passed as an argument them then is will print undefined just logged in
*/
//... rest operator or spread operator
function calculateCartPrice(val1,val2,...num1){//... rest operator or spread operator
   console.log(val1)//200
   console.log(val2)//3000
   
    return num1

}
//console.log(calculateCartPrice(200,300,400))//[ 200, 300, 400 ]
console.log(calculateCartPrice(200,3000,400,2000))// [ 400, 2000 ]

// Passing Objects in function
const userCart={
    item:"Chips",
    price:20
    
}
function handleCart(anyObj){
    console.log(`the item is ${anyObj.item} and the price is ${anyObj.price}`)

}
handleCart(userCart)


// Passing array in function
const arr=[100,200,300,400]
function score(getArr){
 return getArr[1]
}
console.log(score(arr))
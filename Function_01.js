//
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
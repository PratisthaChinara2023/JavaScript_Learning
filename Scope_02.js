// function one(){
//     const username="Pratistrha"
//      function two(){
//         const website="youtube"
//         console.log(username)
//      }
//      //console.log(website)// error scope
//      two()
// }  
// one()   
//
console.log(addOne(5))// this will not give erroe 
function addOne(num)
{
    return num+2
}


//console.log(addTwo(5))// this will give error cannot access (mini hoisting)

const addTwo=function(num){// Expression
        return num+1
}
console.log(addTwo(5))// 6


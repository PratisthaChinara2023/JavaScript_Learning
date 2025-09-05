// const coding=["js","java","ruby","python","c++"]
// const value=coding.forEach((item)=>{
//     console.log(item)
// })
//Filter
const mynum=[1,2,3,4,5,6,7,8,9]
const newnum=mynum.filter((num)=>num>4)
console.log(newnum)//[ 5, 6, 7, 8, 9 ]
const newarr=[]
mynum.forEach((num)=>{
    if(num>5){
        newarr.push(num)
    }
 })
 console.log(newarr)//[ 6, 7, 8, 9 ]

 // Map

 const mynumber=[1,2,3,4,5,6,7,8,9,10]
 const sum=mynumber.map((num)=>num+10)
 console.log(sum)

 // chaining
 const newNum=mynumber
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)
console.log(newNum)

// Reduce
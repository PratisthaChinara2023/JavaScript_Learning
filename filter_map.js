// const coding=["js","java","ruby","python","c++"]
// const value=coding.forEach((item)=>{
//     console.log(item)
// })

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
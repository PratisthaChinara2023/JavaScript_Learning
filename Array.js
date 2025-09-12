// const arr=[0,1,2,3,4,5]
// console.log(arr.push(2))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.includes(5))// true
// console.log(arr)// type is array
// const arr1=arr.join()
// console.log(arr1)

// console.log(typeof arr1)// typoes has changed to string 



// READ SLICE ,SPLICE
const originalarr=[1,2,3,4,5,6]
const modarr=originalarr.slice(2,4)
console.log("A", modarr)

const splicearr=originalarr.splice(2,3) // from index 2 remove 3 elements

console.log("B" ,splicearr)// [3,4,5]
console.log(originalarr)//[1,2,6]
console.log("")
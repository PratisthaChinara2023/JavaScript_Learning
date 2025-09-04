// for of loop


// const arr=[1,2,3,4,5]
//  for(const num of arr)
//  {
//     console.log(num)
//  }
//   const greeting="Hello World"
//   for(const greet of greeting)
//   {
//     console.log(`each char is ${greet}`)
//   }


  //Map
//   const map=new Map()
//   map.set('IND','India')
//   map.set('USA','United states of America')
//   map.set('FR',"France")
// //  console.log(map)

// for(const [key,value] of map)// [] for getting keys
//   {
//     console.log(key," ", value)
//   }


//   const obj={
//     'game1':'NSF',
//     'game2':'sipderman'
//   }
// for(const [key,value] of obj)// obj is not i
//   {
//     console.log(key," ", value)
//   }


// for in loop for object
// const ob={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift'
// }
// for(const key in ob){
//     console.log(key)//js cpp rb swift
// }
// //for in loop in array
// const array=[1,2,3,4,5,6,6]
// for(const key in array){
//     console.log(array[key])
// }

// for each loop
// const lang=['javascript','java','ruby','C++']
// // lang.forEach(function(val){
// //     console.log(val)
// // })
// lang.forEach((val,index,arr)=>{
//     console.log(val,index,arr)
// })
/*  op javascript 0 [ 'javascript', 'java', 'ruby', 'C++' ]
java 1 [ 'javascript', 'java', 'ruby', 'C++' ]
ruby 2 [ 'javascript', 'java', 'ruby', 'C++' ]
C++ 3 [ 'javascript', 'java', 'ruby', 'C++' ] */



// Objects inside array
  const code=[
    {
        languageName:"python",
        fileName:"py"
    },
    {
        languageName:"Java",
        fileName:"java"
    },
    {
        languageName:"Javascript",
        fileName:"js"
    }
  ]

code.forEach((item)=>{
        console.log(item.languageName)
})
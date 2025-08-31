// // const ob=new Object()// singleton Object
// const ob1={} // non singleton Object
// //console.log(ob1)// {}
// // // console.log(ob)// {}

// // ob1.id="1234"
// // ob1.name="pratistha"
// // ob1.isLoggedIn=false
// // console.log(ob1)//{ id: '1234', name: 'pratistha', isLoggedIn: false }
//  const regularUser={
//     email:"abc@gmail.com",
//     fullname:{
//         userfullname:"Pratistha Chinara",
       
//     }
//  }
// // console.log(regularUser.fullname?.userfullname)// ? it checks if fullnme exists or else we have to use if else
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// //const obj4={5:"a",6:"b"}
// //combine objects
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj5={...obj1,...obj2}//combine using spread ...
// console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users=[
    {
       id:1,
       email:"abc@gmail.com"
    },
    {
       id:2,
       email:"def@gmail.com"
    },
    {
       id:3,
       email:"xyz@gmail.com"
    }
    
]
console.log(users[1].id)
const obj={
    1:11,
    2:20,
    3:34
}
console.log(Object.keys(obj))//[ '1', '2', '3' ] imp
console.log(Object.values(obj))//[ 11, 20, 34 ]
//entries convert all key value pair into array
console.log(Object.entries(obj))//[ [ '1', 11 ], [ '2', 20 ], [ '3', 34 ] ] 
console.log(obj.hasOwnProperty("2"))// True key 2 is present
console.log(obj.hasOwnProperty("isloggedin"))// isloggedin is not a key in obj

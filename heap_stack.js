let str="pratistha"
let str1=str
 str1="chinara"
 console.log(str1)
 str="Toin"
 console.log(str)

 let userone={
    email:"prat.28jun@gmail.com",
    upi:"upi@yal"
 }
  //The userone is created in the heap and its reference is made in the stack area
  //usertwo takes reference from userone 
let usertwo=userone
usertwo.email="pratisthachinara"
console.log(usertwo.email)
console.log(userone.email)
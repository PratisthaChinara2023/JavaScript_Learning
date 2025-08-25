const accountId=14554
//accountId=222  not allowed because const can not be changed
let email="Pratisthachinara@gmail.com"
var password="Pratistha"
accountCity="Jaipur"// can be declared but not a good practice
// prefer not to use var because of the issue in block scope and functional scope
let accountState; // output will be undefined
console.log(accountId+" "+email+" "+password);
console.table([accountId,email,password])


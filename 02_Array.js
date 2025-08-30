const marvel_hero=["thor","ironman","spiderman"]
const dc_hero=["superman","batsman","flash"]
//  marvel_hero.push(dc_hero)
//  console.log(marvel_hero)// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batsman', 'flash' ] ]
const all_hero=marvel_hero.concat(dc_hero)
console.log(all_hero)//[ 'thor', 'ironman', 'spiderman', 'superman', 'batsman', 'flash' ]

// another way of concatenating is using spread

const old_cartoons=["tom","Jerry","doreamon"]
const new_cartoons=["Shin chan","Ben10","Roll21"]
 const all_cartoons=[...old_cartoons,...new_cartoons]
 console.log(all_cartoons) //[ 'tom', 'Jerry', 'doreamon', 'Shin chan', 'Ben10', 'Roll21' ]
// use flat to make a single array
const num=[1,2,[3,4],5,[6,7,4],23,[7,7,6]]
const new_Num=num.flat(Infinity)// here infinity can be given if we dont want to  count the depth but u can also give countable enity .indicates depth means no. of array inside the array.

console.log(new_Num)//[1, 2, 3,  4, 5, 6, 7, 4, 23, 7,7, 6]

console.log(Array.isArray(["Pratsitha"])) // true
console.log(Array.isArray("Pratistha"))// False
// Convert to array
//console.log(Array.from("Pratistha"))//['P', 'r', 'a','t', 'i', 's','t', 'h', 'a'                        ]
console.log(Array.from({name:"Hitesh"}))// output - []
let obj = { name: "Hitesh" };
let arr = Array.from(Object.values(obj));
console.log(arr);//[ 'Hitesh' ]
// convert  values to array -of
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]
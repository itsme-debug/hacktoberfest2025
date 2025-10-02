
const myArr = [1,2,3,4, "jerry", 45]
let myArr3 = new Array(1,2,3,4)  //another way of declaring array
                                
//console.log(myArr);          // to accees whole array 
//console.log(myArr[1]);      // to accees specific values , providing index no 

//+++++++++++++++++++++++++++++++++++++++++++ methods +++++++++++++++++++++++++++++++++++++++++++++++
const myArr2 = [0,1,2,3,4,5]

myArr2.push(6)          //adds value at last 
//console.log(myArr2); 
                      
myArr2.pop()         //pops value from last
//console.log(myArr2);

myArr2.unshift(-1)  //adds value at starting position
console.log(myArr2); 

myArr2.shift()      //removes value from starting position
console.log(myArr2);

console.log(myArr2.includes(9));// value not index
console.log(myArr2.indexOf(5));// value not index

const newArr = myArr2.join('') // to convert array to object 
console.log( newArr);
console.log(typeof newArr); // string
console.log( myArr2);
console.log(typeof myArr2); // object


// +++++++++++++++++++++++++++++ Slice , Splice +++++++++++++++++++++++++++++++++++

const myNewArr = [0,1,2,3,4,5,6]
console.log("A ",myNewArr );

const myNewArr2 = myNewArr.slice(0,3) // output 0,1,2 ; it does not change actual array
console.log(myNewArr2 );
console.log("B ",myNewArr );

const myNewArr3 = myNewArr.splice(0,3) // output 0,1,2 ;  it   changes actual array ; last no 3 decides no of elements to cut
console.log(myNewArr3 );
console.log("C ",myNewArr );



const marvel_heroes = ["thor","ironman","hulk"]
const dc_herores = ["superman","flash","batman"]

//marvel_heroes.push(dc_herores)// change in actual array
console.log(marvel_heroes); // [ 'thor', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]

const newHeroes = marvel_heroes.concat(dc_herores)// does not change actual array
console.log(newHeroes);// [ 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]

const newMethod_spread = [...dc_herores,...marvel_heroes] // mtd. spread
console.log(newMethod_spread);// widely used 


const ArrayInArray = [1,2,3,4,[5,6,7],8,9,[10,11,[14,15]],16]
//console.log(ArrayInArray.flat(Infinity));// combines all array , we need to provide depth of array 

console.log(Array.isArray("piyush")); // false
console.log(Array.from("piyush")); // [ 'p', 'i', 'y', 'u', 's', 'h' ]
console.log(Array.from({name :"piyush"}));// interesting cause its output will be a empty [] , because we need to provide whether key or value to br converted to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]




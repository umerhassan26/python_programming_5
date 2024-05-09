console.log("Pakistan")
console.log("Pakistan")
console.log("Pakistan")
console.log("Pakistan")

for (let i = 90 ; i<=100; i++) {  // i variable = 0
    console.log("for loops");
    
}

// while loop
let i = 1; //  

while (i<=100) {
     i++; 
    console.log("Pakistan")
   
}
// do while loop
let ii =1
do {

    console.log("paki")
    ii++;
    
} while (ii<=2);

 let cars = ["BMW","Suzuki","Toyota","Honda","Audi","Mercedes"]
 console.log(cars[2]);
 console.log(cars[4]);

 for (let a=0; a<=5 ; a++){
    console.log(cars[a]);
 }
 // For in // Arrays and object
 for (let i in cars){
    console.log(cars[i]);
 }

 // Task 1 assume a array list and they all elements sum using a loop

 let arrnum = [54,11,22,21,20];
 let sum = 0;
 console.log(sum);

 let n = arrnum.length;

 for(let i = 0 ; i<n; i++){
    sum = sum +arrnum[i]
 }
 console.log(sum)

 // Reverse iteration loop
//  for(let b = 10 ; b>=-10; b--){  10>-10
//     console.log("b =",b);
//  }

let reverse = ['Ayan','ali,','umer','ahmad','ayesha','alina']

//i = 6

for (let i= reverse.length-1; i>=0 ; i--){
   console.log(reverse[i]);
}
// For in  with object

let student = {
   firstname : 'Ali',
   lastname :'Ahmad',
   age : 25,
   roll_no : 1234
}

for (let key in student){
   console.log(key + "=" + student[key]);
}
// for of loop
for(let i  of reverse){
   console.log(i);
}

// Foreach method
const number = [2,5,9]
console.log(number);
number.forEach(element => console.log(element));
// index and element 
number.forEach((element ,index)  => console.log(index,element)); 
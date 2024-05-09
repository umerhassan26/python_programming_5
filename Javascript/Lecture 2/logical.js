let a = 5 , b = 10;
let p1 = (a != b) && (a<b); //  true
console.log (p1);
let p2 = (a>b) || (a==b);   // false
console.log(p2);
let p3 = (a<b) || (a==b); // true
console.log(p3);
let p4 = !(a<b);// false
console.log(p4);
let p5 = !(a>b); // true
console.log(p5);
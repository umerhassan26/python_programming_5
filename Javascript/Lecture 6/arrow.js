 function myfun(){
    console.log("Hellow function");
 }
 myfun();

 //shorthand function

 function mul (a,b){
       console.log(a*b);
 }
 mul (4,5);

 let abc = num => num * num
 let result = abc(5)

 console.log(result);

 const add = (a,b) => a+b;
 console.log(add(2,3));
 // Scope

 var  name = "Umer"; // Global 
function update() {
    name = "Ali";
}
function showname(){
    alert(name);
}
alert(name);
update();
showname();

// Local Scope

function create(){
     id = 12;
}
function showid (){
    try {
        alert(id);
    } catch (error) {
        console.log("This is error because id is not defiened");
    }
}
create();
showid();
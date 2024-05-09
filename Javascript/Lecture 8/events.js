// Method 1 using general function
click.addEventListener('click' , function(){
    alert("Hellow World");
})

// Method 2
let clickFunction = document.getElementById('click-function');
clickFunction.addEventListener('click', display);

function display() {
    alert("Helloew World Function");
}

// Method  3
function sayhello (){
    alert("Method 3")
}

const btn = document.getElementById("mybutton");
const para = document.getElementById("mypara");
const form = document.getElementById("myform");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

btn.addEventListener('click', ()=> {
    para.textContent = "Clicked new button"
    para.style.color = "red"
});
// Second
// btn.onclick = function (){
//     para.textContent = "Clicked button"
// }

btn.addEventListener ('mouseover' , ()=> {
    btn.style.backgroundColor = "lightblue";
})
// Another Method
btn.onmouseout = function () {
    btn.style.backgroundColor = "white";
}
btn.addEventListener('focus', ()=>{
    para.style.backgroundColor = "yellow"
})
btn.onblur = function () {
    para.style.backgroundColor= "lightblue"
}

form.addEventListener('submit' , function (e) {
       if (fname.value === "" || lname.value === ""){
        e.preventDefault();
        para.textContent = "You need to fill both names"
       }
});

document.getElementById('anchor').addEventListener('click',function(eve){
    eve.preventDefault();
})
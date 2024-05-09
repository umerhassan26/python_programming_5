// get element by id
let headings = document.getElementById("this1");
console.log(this1);

// this1.innerText = "<i>This is a text</i> using a javascript" // renders as a normal text
this1.innerHTML = "<i>This is a text</i> using a javascript" // renders as a html file

// get element by classname
let section = document.getElementsByClassName("heading")
console.log(section);
section[1].style.backgroundColor = "yellow";
section[0].style.color = "Blue";

// get element by tagname
let subheading = document.getElementsByTagName("h2");
console.log(subheading);
subheading[0].innerHTML ="This is new sub heading";

// get element by query
let box = document.querySelector("#box")
box.innerHTML = "<p>this is paragraph inside a box</p>";
box.style.border = "1px solid black "
box.style.backgroundColor = "lightgreen";

// get element by query selector all ()
let ptags = document.querySelectorAll(".para");
console.log(ptags);
 
// get attribute method
let anchor = document.getElementById("link");
console.log(anchor);    

let href_attribute = anchor.getAttribute("href");
console.log(href_attribute);

let traget_att = anchor.getAttribute("target");
console.log(traget_att);

let id_attr = anchor.getAttribute("id");
console.log(id_attr);
anchor.setAttribute("href" , "https://www.bing.com/");

anchor.innerHTML = "Go to the Bing";
anchor.setAttribute("class","link");

anchor.classList.remove("link");

function myfun(){
    document.getElementById("mydiv").classList.toggle("mystyle");
}

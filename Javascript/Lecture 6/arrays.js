// let a = [10,19,20,40,70];
// let b =['umer', 8,90]

// console.log(a);
// console.log(b);
// let data = [12 , "Tooba","Python",6]
// console.log(data);


const data = ["Apple","Oranges","Grapes","mango"];
const list = document.getElementById('fruits');


data.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
});


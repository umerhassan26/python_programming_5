// Function how  to create
function hello() {
    console.log("Hellow good afternoon");
}
hello();

// function another way to create
function add(){
    let a = 500
    let b = 300
    let c = 100
    console.log(a+b+c);
}
add();
hello();

// with parameters and return keyword
function abc (a,b){
        console.log(a+b);
}
abc(6,9);
// let result = abc(6,6);
// parameters => arguments
// Example check the largest number
function check_numbers(a,b){
    if (a>b){
        console.log("First number is largest"+ a);
    }
    else if(a<b){
        console.log("Second number is largest"+ b);
    }
    else{
        console.log("Both numbers is equal"+ a + ',' +b);
    }
}
check_numbers(40,40);
check_numbers(50,40);
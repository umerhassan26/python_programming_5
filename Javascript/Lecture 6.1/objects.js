let std_info = ['ahmad','ali',25,'python']
console.log(std_info);

//object defination
let std_obj = { 
    firstname : 'ahmad',
    lastname : 'ali',
    age : 25,
    course : 'python'
}
console.log(std_obj);
// access  course // access way 1
console.log(std_obj['course']);
// access way 2
console.log(std_obj.course);

// add new record
std_obj['email'] = 'ahmad@gmail.com'
console.log(std_obj)

// delete a record
std_obj['email'] = ''
console.log(std_obj)
// key objects
let key_obj = Object.keys(std_obj)
console.log(key_obj);

// value objects
let value_obj = Object.values(std_obj)
console.log(value_obj);

// Entries of objects
let key_value = Object.entries(std_obj)
console.log(key_value);
console.log(key_value[2]);
console.log(key_value[2][1])
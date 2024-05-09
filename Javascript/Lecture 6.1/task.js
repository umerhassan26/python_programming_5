let student = [ 
    {
       name : 'Ali', 
       age : '25',
       reg_num : 1234,
       course : 'Python programming',
       fav_prog :['JS','PYTHON','PHP','C++','JAVA'],  
       marks : {
         html :50,
         css : 60,
         js : 50,
         py :80
       }      
    } ,
    {
        name : 'Umer', 
        age : '27',
        reg_num : 12345,
        course : 'Python programming',
        fav_prog :['JS','PYTHON','PHP','C++','JAVA'],  
        marks : {
          html :60,
          css : 70,
          js : 50,
          py :90
        }      
     } ,
     {
        name : 'Ahmad', 
        age : '21',
        reg_num : 123456,
        course : 'Python programming',
        fav_prog :['java','PYTHON','PHP','C++','js'],  
        marks : {
          html :60,
          css : 90,
          js : 60,
          py :70
        }      
     } 
    
    ]

// Task Perform 
// First Step
console.log(student[2].name);
console.log(student[2].age);
console.log(student[2].reg_num);
console.log(student[2].fav_prog);
console.log(student[2].marks);

//second step
frov_pr = student[2].fav_prog.length
console.log(frov_pr)
console.log(student[2].fav_prog[0])
console.log(student[2].fav_prog[4])

//Third step
console.log(student[2].marks.html)
console.log(student[1].marks.py);


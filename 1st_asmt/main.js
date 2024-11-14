



const{students, address}=require("./frstmodule/student")

// show students data
//rest operation
const{...all}=students
console.log(all)






students.id.push(6)
students.name.push("student_6")
students.age.push(18)
students.grade.push(67)





//add one new student 
//rest operation
const { ...rest } = students
console.log(rest)


//merge student data and other information
//spread operatioin
const{...first }= address
console.log(first)


console.log(first,rest)



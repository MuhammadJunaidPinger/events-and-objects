// object
var student = {
    name: "Junaid",
    FName: "Abdul Aziz",
    age: 36
}
console.log(student);
//Edit some thing in object
student.feeSubmitted = true
console.log(student);

//Delete some thing in object
//type delete then space then object name then attribute name which you want to delete
delete student.age
console.log(student);

//change attribute value
student.name = "Aamir"
console.log(student);
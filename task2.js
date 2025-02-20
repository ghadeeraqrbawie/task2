   
let students = [];  
function createStudent(name, age, mark) {
    return { name, age, mark };
}
students[students.length] = createStudent("Ali", 20, 75);
students[students.length] = createStudent("Sara", 19, 45);
students[students.length] = createStudent("Omar", 21, 60);
students[students.length] = createStudent("Lina", 22, 30);
students[students.length] = createStudent("Hassan", 18, 85);     
let successStudents = [];
let failedStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 50) {
        successStudents[successStudents.length] = students[i];   
    } else {
        failedStudents[failedStudents.length] = students[i];
    }
}
console.log("Success Students:");
console.log(successStudents);

console.log("Failed Students:");
console.log(failedStudents);
// Sort students by GPA and after that by name.
function getSortedStudents(students) {

}
const sorted = getSortedStudents([
    { name: 'Alice', gpa: 4.8 },
    { name: 'Bob', gpa: 5 },
    { name: 'Stan', gpa: 4.7 },
    { name: 'Seraphine', gpa: 4.7 }
])
sorted.forEach(({ name }) => console.log(name))
/* Expected output:
Bob
Alice
Seraphine
Stan
*/

// Given an array of marks, create a map of how many students have that mark.
function getMarksDistributions(marks) {

}
const marks = [2, 7, 7, 8, 9, 10]
const distribution = getMarksDistributions(marks)
Object
    .keys(distribution)
    .forEach(key => console.log(
        `${distribution[key]} student(s) got the ${key} mark!`
    ))
/* Expected output:
1 student(s) got the 2 mark
2 student(s) got the 7 mark
1 student(s) got the 9 mark
1 student(s) got the 10 mark
*/

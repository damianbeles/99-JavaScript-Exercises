// Filter only numbers between 10 and 99 from the array, then create an array of only the last digit from those numbers.
function filterTwoDigitsAndTakeTheLastOne(arr) {

}

const numbers = [2, 17, 24, 123, 3, 44]
const newNumbers = filterTwoDigitsAndTakeTheLastOne(numbers)

console.log(newNumbers)
// Expected output: [7, 4, 4]

/* Explanation
1. First, the numbers that are not between 10 and 99 are filtered out
remains: [17, 24, 44]
2. Second, the numbers are trimmed to their last digit
remains: [7, 4, 4] (the answer)
*/

// Given an array of functions, find out the function that given a number parameter returns the desired result. It’s guaranteed there is exactly one such function in the array.
function getDescribedFunction(functions, number, desiredResult) {

}
const describedFnc = getDescribedFunction([
    n => n + 2,
    n => n * 2,
    n => n / 2,
], 3, 6)
console.log(describedFnc(4))
// Expected output: 8

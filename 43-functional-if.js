// Write a function that takes in 2 functions and a boolean. If the boolean is true, run the first function, if it’s false, run the second.
function runIf(truth, ifFn, elseFn) {

}
runIf(true, () => console.log('It\'s true'), () => console.log('It\'s false'))
// Expected output: It's true
runIf(false, () => console.log('It\'s true'), () => console.log('It\'s false'))
// Expected output: It's false

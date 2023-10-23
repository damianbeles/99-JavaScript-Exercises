// Write a function that takes four functions and applies them all to a number in their order.
function applyFour(fn1, fn2, fn3, fn4, nr) {

}
console.log(applyFour(
    (w) => w + 2,
    (k) => k * 3,
    (n) => n / 4,
    (d) => d - 2,
    10
)) // Expected output: 7
/* Explanation:
First, 10 is fed to (w) => w + 2, so 10 + 2 = 12
Then, 12 is fed to (k) => k * 3, so 12 * 3 = 36
Then, 36 is fed to (n) => n / 4, so 36 / 4 = 9
Finally, 9 is fed to (d) => d - 2, so 9 - 2 = 7
*/

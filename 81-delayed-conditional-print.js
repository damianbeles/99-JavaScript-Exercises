// Someone tells you to check google.com to see if it is down in 5 seconds. It may or not be down. Print a message in either case.
let googleIsDown = false;
function printMessageIn5Seconds() {

}
printMessageIn5Seconds();
// Expected output: No, what are you tryin' to do? *after 5 seconds*
googleIsDown = true;
printMessageIn5Seconds();
// Expected output: Yes! How did you do that? :o *after 5 seconds*

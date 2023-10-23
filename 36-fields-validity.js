// For each user field that is not valid, print out a message.
function printInvalidFields(user) {

}
printInvalidFields({
    name: '',
    email: '',
    gender: '',
})
/* Expected output:
Name is not valid, it should have at least 3 characters.
E-Mail is not valid, it doesn't end with @gmail.com.
Gender is not valid, it must be either male or female.
*/

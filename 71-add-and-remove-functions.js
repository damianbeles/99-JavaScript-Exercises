// Create a command factory. An object which stores functions and can run functions with a param string.
const commandFactory = {}

function addCommand(functionName, functionToAdd) {
    // Adds a command to the object
}

function removeCommand(functionName) {
    // Removes a command from the object
}

addCommand('capitalize', str => str.toUpperCase())

console.log(commandFactory.capitalize('hello'))
// Expected output: HELLO

removeCommand('capitalize')

console.log(commandFactory.capitalize('hello'))
// Expected error

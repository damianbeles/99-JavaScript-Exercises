// Given two accounts, transfer an amount of money from one account to the other.
function pay(senderAcc, receiverAcc, amount) {

}
const ionAcc = { name: 'Ion', amount: 125 }
const gigiAcc = { name: 'Gigi', amount: 127 }
pay(ionAcc, gigiAcc, 100)
console.log(`Ion's remaining amount ${ionAcc.amount}`)
console.log(`Gigi's new amount ${gigiAcc.amount}`)
/* Expected output:
Ion's remaining amount 25
Gigi's new amount 227
*/

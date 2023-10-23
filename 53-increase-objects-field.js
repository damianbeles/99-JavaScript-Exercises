// Given an array of players, increase their hunger by one.
function increaseTheHungerByOne(arr) {

}
const players = [
    { username: 'xXEdy', hunger: 0 },
    { username: 'vlas123', hunger: 9 }
]
increaseTheHungerByOne(players)
players.forEach(player => console.log(player.hunger))
// Expected output: 1 10

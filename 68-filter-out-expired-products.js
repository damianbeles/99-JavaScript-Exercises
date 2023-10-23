// Filter out expired products from an array.
function getNonExpiredProducts(products) {

}
const nonExpiredProducts = getNonExpiredProducts([
    { name: 'Honey', expiring: 'March 1, 2023' },
    { name: 'Juice Tea Me', expiring: 'August 1, 2028' },
    { name: 'Juicy J', expiring: 'August 1, 2028' }
])
nonExpiredProducts.forEach(({ name }) => console.log(name))
/* Expected output:
Juice Tea Me
Juicy J
*/

// Sort the companies by name.
function getSortedCompanies(companies) {

}
const sorted = getSortedCompanies([
    { name: 'Google', foundedIn: 1998 },
    { name: 'Apple', foundedIn: 1976 },
    { name: 'Microsoft', foundedIn: 1975 }
])
sorted.forEach(({ name }) => console.log(name))
/* Expected output:
Apple
Google
Microsoft
*/

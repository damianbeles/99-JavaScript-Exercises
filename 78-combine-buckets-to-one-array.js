// Accumulate all the data regarding a job candidate to one array of all companies. Companies are distributed through 4 buckets based in which period the candidate was there.
function getAllCompanies(candidate) {

}
console.log(getAllCompanies({
    name: 'Raisa',
    age: 27,
    gender: 'female',
    companiesLessThanAYear: ['Google'],
    companiesLessThanThreeYears: ['Microsoft', 'Apple'],
    companiesLessThanSixYears: [],
    companiesLongerThanSixYearsAgo: ['Riot Games'],
}))
// Expected output: ['Google', 'Microsoft', 'Apple', 'Riot Games']

// Censor all the personal identifiable information for a list of candidates.
function censorPII(candidates) {

}
console.log(censorPII({
    name: 'Raisa',
    gender: 'female',
    companiesLessThanAYear: ['Google'],
    companiesLessThanThreeYears: ['Microsoft', 'Apple'],
    companiesLessThanSixYears: [],
    companiesLongerThanSixYearsAgo: ['Riot Games'],
    phoneNumber: '0733 333 333',
    email: 'raisa@example.com',
}, {
    name: 'Ron',
    gender: 'male',
    companiesLessThanAYear: ['Zoom'],
    companiesLessThanThreeYears: ['Youtube'],
    companiesLessThanSixYears: ['Epic Games'],
    companiesLongerThanSixYearsAgo: [],
    phoneNumber: '0744 444 444',
    email: 'jon@example.com',
}))
/* Expected output:
[{
  name: 'Xxxx',
  gender: 'xxx',
  companiesLessThanAYear: ['Google'],
  companiesLessThanThreeYears: ['Microsoft', 'Apple'],
  companiesLessThanSixYears: [],
  companiesLongerThanSixYearsAgo: ['Riot Games'],
  phoneNumber: '(xxxx) xxx-xxx',
  email: 'xxx@xx.x',
}, {
  name: 'Xxxx',
  gender: 'xxx',
  companiesLessThanAYear: ['Zoom'],
  companiesLessThanThreeYears: ['Youtube'],
  companiesLessThanSixYears: ['Epic Games'],
  companiesLongerThanSixYearsAgo: [],
  phoneNumber: '(xxxx) xxx-xxx',
  email: 'xxx@xx.x',
}]
*/

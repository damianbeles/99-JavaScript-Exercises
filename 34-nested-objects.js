// Given an object containing informations about different subjects, print out professor’s name for Mathematics and for Geography.
function printMathAndGeoProfessorsNames(subjectsInfo) {

}
const subjects = {
    Mathematics: {
        difficulty: 4 / 5,
        professor: {
            name: 'George',
            age: 39
        }
    },
    Geography: {
        difficulty: 2 / 5,
        professor: {
            name: 'Eduardo',
            age: 28
        }
    },
    MaternalLanguage: {
        difficulty: 3 / 5,
        professor: {
            name: 'Iulia',
            age: 33,
        }
    }
}
printMathAndGeoProfessorsNames(subjects)
// Expected output: George and Eduardo

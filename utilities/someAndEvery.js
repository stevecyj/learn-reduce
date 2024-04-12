const scores = [
  { score: 45, subject: "chinese" },
  { score: 90, subject: "math" },
  { score: 60, subject: "english" },
]

// at least one score is greater than 60
// const atLeastOnePass = scores.some((score) => score.score > 60)
// console.log(atLeastOnePass) // true
// use reduce to implement some
const atLeastOnePass = scores.reduce((acc, score) => {
  return acc || score.score > 60
}, false)
console.log(atLeastOnePass) // true

// all scores are greater than 60
// const allPass = scores.every((score) => score.score > 60)
// console.log(allPass) // false
// use reduce to implement every
const allPass = scores.reduce((acc, score) => {
  return acc && score.score > 60
}, true)
console.log(allPass) // false

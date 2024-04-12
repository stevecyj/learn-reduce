const arr = [0, 1, 2, 3]

// const res = arr.map((el) => el * 2) use map to multiply each element by 2
// use reduce to multiply each element by 2
const res = arr.reduce((acc, el) => {
  return [...acc, el * 2]
}, [])
console.log(res)

// const res2 = arr.filter((el) => el > 1) // use filter to return elements greater than 1
// use reduce to return elements greater than 2
const res2 = arr.reduce((acc, el) => {
  if (el > 2) {
    return [...acc, el]
  }
  return acc
}, [])
console.log(res2)

// const res3 = arr.map((el) => el * 2).filter((el) => el > 1) // use map and filter to multiply each element by 2 and return elements greater than 1
// use reduce to multiply each element by 2 and return elements greater than 1
const res3 = arr.reduce((acc, el) => {
  if (el * 2 > 1) {
    return [...acc, el * 2]
  }
  return acc
}, [])
console.log(res3)

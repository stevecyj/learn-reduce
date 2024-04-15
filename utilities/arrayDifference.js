function difference(arr = [], oarr = []) {
  return arr.reduce((acc, curr) => {
    if (!oarr.includes(curr)) {
      acc.push(curr)
    }
    return acc
  }, [])
}

const arr = [1, 2, 3, 4, 5]
const oarr = [2, 3, 4]
console.log(difference(arr, oarr)) // [1, 5]

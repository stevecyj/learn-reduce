// use reduce to chunk
function chunk(arr = [], size = 1) {
  return arr.reduce((acc, curr) => {
    let last = acc[acc.length - 1]
    if (!last || last.length === size) {
      acc.push([curr])
    } else {
      last.push(curr)
    }
    return acc
  }, [])
}
const arr = [1, 2, 3, 4, 5]
console.log(chunk(arr, 2)) // [[1,2], [3,4], [5]]

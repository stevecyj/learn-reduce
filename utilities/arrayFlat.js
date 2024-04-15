function flat(arr = []) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flat(curr) : curr)
  }, [])
}

const arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]]
console.log(flat(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

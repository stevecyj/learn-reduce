function uniq(arr = []) {
  // return [...new Set(arr)]
  return arr.reduce((t, v) => {
    return t.includes(v) ? t : [...t, v]
  }, [])
}

const arr = [2, 1, 0, 3, 2, 1, 2]
console.log(uniq(arr)) // [2, 1, 0, 3]

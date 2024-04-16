function max(arr = []) {
  return arr.reduce((t, v) => (t > v ? t : v))
}

function min(arr = []) {
  return arr.reduce((t, v) => (t < v ? t : v))
}

const arr = [12, 45, 21, 65, 38, 76, 108, 43]
console.log(max(arr)) // 108
console.log(min(arr)) // 12

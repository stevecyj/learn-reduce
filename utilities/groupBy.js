export let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
]

export const groupBy = (arr, prop) => {
  return arr.reduce((acc, cur) => {
    let key = cur[prop]
    if (!acc.hasOwnProperty(key)) {
      acc[key] = []
    }
    acc[key].push(cur)
    return acc
  }, {})
}

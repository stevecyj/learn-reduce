export function reverseString(str) {
  return str.split("").reduceRight((acc, char) => {
    return acc + char
  })
}

let str = "hello andy"
let ret = reverseString(str)
console.log(ret)

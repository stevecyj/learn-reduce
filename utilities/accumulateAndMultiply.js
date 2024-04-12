export function accumulation(...vals) {
  return vals.reduce((acc, val) => acc + val, 0)
}

export function multiply(...vals) {
  return vals.reduce((acc, val) => acc * val, 1)
}

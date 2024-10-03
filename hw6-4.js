const arr = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]

console.log(arr)

const rows = 3
const column = 3
const empty = []

for (let i = 0; i < rows; i++) {
  const row = []

  for (let j = 0; j < column; j++) {
    row.push(1)
  }
  empty.push(row)
}
console.log(empty)

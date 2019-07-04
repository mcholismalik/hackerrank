// challange
let rc = 3
let arr = Array(rc)
  .fill(null)
  .map(() => Array(rc).fill(null))

arr[0][0] = 11
arr[0][1] = 2
arr[0][2] = 4
arr[1][0] = 4
arr[1][1] = 5
arr[1][2] = 6
arr[2][0] = 10
arr[2][1] = 8
arr[2][2] = -12

// solution
const diagonalReference = (arr) => {
  let l = arr.length
  let [d1, d2] = [0, 0]

  arr.map((v, k) => (d1 += v[k]) && (d2 += v[(l -= 1)]))

  let res = Math.abs(d1 - d2)
  console.log(res)
}
diagonalReference(arr)


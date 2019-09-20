/**
 * TIMEOUT Challange
 * Misal case dengan arr = 10m
 * @author cols
 */

// Define
let arr = Array.from({ length: 10000000 }, (v, i) => i + 1)
// console.log(arr)
let pst = 9182398

// 1 => TIMEOUT
console.time('time way 1')
j = arr.indexOf(pst, pst-1)
console.log(j)
console.timeEnd('time way 1')

// 2 => NO TIMEOUT
console.time('time way 2')
for (let i = pst; i < arr.length; i++) {
  if (arr[i] === pst) {
    j = i
    break
  }
}
console.log(j)
console.timeEnd('time way 2')



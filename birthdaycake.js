const birthdayCakeCandles = (ar) => {
  let r = ar.filter((v, i) => v == Math.max(...ar)).length
  console.log(r)
}
birthdayCakeCandles([3, 2, 1, 3, 7, 8, 8, 8, 8, 4])

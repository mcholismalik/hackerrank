let arr = [-4, 3, -9, 0, 4, 1]

const plusMinus = (arr) => {
  let sgArr = { p: 0, m: 0, z: 0 }
  arr.map((v, k) => {
    let sign = Math.sign(v)
    if (sign == 1) {
      sgArr.p += 1
    } else if (sign == -1) {
      sgArr.m += 1
    } else {
      sgArr.z += 1
    }
  })

  let res = []
  for (let key in sgArr) {
    console.log(Number.parseFloat(sgArr[key] / arr.length).toFixed(6))
  }
}
plusMinus(arr)
const miniMaxSum = (arr) => {
  let res = [];
  for (let t of ["max", "min"]) {
    let slc = t == "max" ? [1, arr.length] : [0, -1];
    res[t] = arr.sort((a, b) => a - b).slice(...slc).reduce((a, b) => a + b, 0);
  }
  console.log(res["min"] + " " + res["max"])
}
miniMaxSum([7, 69, 2, 221, 8974])

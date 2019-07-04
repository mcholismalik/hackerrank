// Complete the staircase function below.
const staircase = (n) => {
    let n2 = n - 1
    for (let i = 1; i <= n; i++) {
      let sp = ""
      let pg = ""
      for (j = 1; j <= n2; j++) {
        sp += " "
      }
      n2--
      for (k = 1; k <= i; k++) {
        pg += "#"
      }
      console.log(sp+pg);
    }
}

staircase(1,1);

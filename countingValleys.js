function countingValleys(n, s) {
  let [node, vly] = [0, 0]
  let [zero, preVly, min] = [false, false, false]
  for (let i = 0; i < n; i++) {
    // #1 check zero
    zero = (node === 0 && !preVly) ? true : false
    // #2 labeling
    node = (s[i] === 'U') ? node++ : node--
    // #3 check minus
    min = (Math.sign(node) === -1) ? true : false
    if (zero && min) preVly = true
    // #4 check preVly
    if (preVly && !min) {
      vly += 1
      zero = true
      preVly = false
    }
    console.log({ node, zero, preVly, vly })
  }
  console.log(vly)
}

function countingValleys2(n, s) {
  let stat = 0
  let cvalley = 0

  for(let s2 of s) {
    if(s2 === 'U') {
      stat += 1
      if(stat === 0) cvalley += 1
    } else {
      stat -= 1
    }
  }
  console.log(cvalley)
}

// countingValleys2(10, 'DDUUDDUDUUUD') // result 2
countingValleys2(8, 'UDDDUDUU') // result 1
countingValleys2(10, 'UDDDUDUUDU') // result 2




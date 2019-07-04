function sockMerchant(n, ar) {
    let hK = []
    let num = 0

    for (let i = 0; i < n; i++) {
        if (!hK.includes(i)) {
            hK.push(i)
            for (let j = 0; j < n; j++) {
                if (!hK.includes(j)) {
                    if (ar[i] == ar[j]) {
                        hK.push(j)
                        num += 1
                        break
                    }
                }
            }
        }
    }
    console.log(num)
}

function sockMerchant2(n, ar) {
    let num = 0
    let box = ar.reduce((p, c) => {
        console.log(p)
        p[c] = (p[c] || 0) + 1
        // console.log(`${p[c]} -> ${c}`)
        if (p[c] == 2) {
            num++
            p[c] = 0
        }
        return p
    }, {})
    console.log(num)
}

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20 ])
// sockMerchant(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])
sockMerchant2(9, [10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 20, 20, 10, 10, 30, 50, 10, 20])
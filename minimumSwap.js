// non consecutive 
function minimumSwapNon(arr) {
    let num = 0
    let list = [...arr]
    let n = list.length
    for (let i = 0; i < n; i++) {
        let v1 = arr[0]
        arr.shift()

        if(arr.length == 0) {
            break;
        }

        let min = Math.min(...arr)
        if (!(v1 <= min)) {
            let k2 = arr.indexOf(min)
            arr[k2] = v1
            num += 1
        }
    }
    console.log(num)
}

// consecutive 
function minimumSwapCon(arr) {
    let num = 0
    let list = [...arr]
    let n = list.length
    for (let i = 0; i < n; i++) {
        // not should place
        let corr = i+1
        if (list[i] != corr) {
            // find next 
            for (let j = corr; j < n; j++) {
                if (corr === list[j]) {
                    [list[i], list[j]] = [list[j], list[i]]
                    num += 1
                    break;
                }
            }
        }
    }
    console.log(num)
}


minimumSwapCon([1, 3, 5, 2, 4, 6, 7])
minimumSwapCon([4, 3, 1, 2])
// minimumSwapCon([5, 4, 3, 2, 1])

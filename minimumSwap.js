// non consecutive 
function minimumSwapNon(arr) {
	let num = 0
	let list = [...arr]
	let n = list.length
	for (let i = 0; i < n; i++) {
		let v1 = arr[0]
		arr.shift()

		if (arr.length == 0) {
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
	let n = arr.length
	for (let i = 0; i < n; i++) {
		let pst = i + 1
		if (arr[i] != pst) {
			for (let j = pst; j < n; j++) {
				if (pst == arr[j]) {
					arr[i] = arr.splice(j, 1, arr[i])[0]
					num += 1
					break
				}
			}
		}
	}
	console.log(num)
}

function minimumSwapConV2(arr) {
	let num = 0
	let j
	for (let i = 0; i < arr.length; i++) {
		let pst = i + 1
		if (arr[i] != pst) {
			j = arr.indexOf(pst, i)
			arr[i] = arr.splice(j, 1, arr[i])[0]
			num += 1
		}
	}
	console.log(num)
}


minimumSwapConV2([1, 3, 5, 2, 4, 6, 7])
// minimumSwapCon([4, 3, 1, 2])
// minimumSwapCon([5, 4, 3, 2, 1])

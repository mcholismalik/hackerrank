// challange
// tampilkan id yang paling akhir
let arr = [
    {
        id: 1, child: [{
            id: 11, child: [{
                id: 111, child: []
            }, {
                id: 112, child: []
            }]
        }, {
            id: 12, child: []
        }],
    }, {
        id: 2, child: [{
            id: 21, child: [{
                id: 211, child: [{
                    id: 2111, child: [{
                        id: 21111, child: []
                    }, {
                        id: 21112, child: []
                    }]
                }, {
                    id: 2112, child: []
                }]
            }]
        }]
    }
]

// solution
let res = []
const findTree = (arr) => {
    arr.map((v, k) => {
        (v.child.length == 0) ? res.push(v.id) : findTree(v.child)
    })
}

// execution
// findTree(arr)
// console.log('==Output==')
// console.log(res)
// console.log('==Expected Output==')
// console.log('[ 111, 112, 12, 21111, 21112, 2112 ]')

let tes = 'bro'
tes = 'bro2'
console.log(tes)

function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => a - b)
    let u = [...new Set(nums)]
    return u[u.length - 2]
}
let res = getSecondLargest([1, 2, 3, 4, 5, 6, 7, 9, 8, 10])
console.log(res)
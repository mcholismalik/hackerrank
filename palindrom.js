let str = 'kasur rusak'
let max = str.length-1
let res
for (i = 0; i < Math.floor(max / 2); i++) {
  res = (str[i] === str[max--]) ? true : false 
}
console.log(res)
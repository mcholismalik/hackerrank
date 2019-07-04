let str = "javascriptloops";
let vow = str.match(/[aeiou]/gi)
let con = str.match(/[^aeiou]/gi)
for(let v of vow) { 
    console.log(v)
}
for(let c of con) {
    console.log(c)
}
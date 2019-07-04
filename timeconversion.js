const timeConversion = (s) => {
    /*
     * Write your code here.
     */
    let tp = s.slice(-2)
    let h = parseInt(s.slice(0, 2))
    let mid = s.substring(2, 8)

    if (tp == 'PM') h = (h == 12) ? h : h + 12
    else h = (h == 12) ? '00' : ('0' + h).slice(-2)

    console.log(h + mid)
}

// timeConversion('07:05:45PM')
timeConversion('06:40:03AM')

function highAndLow(numbers){
    let arr = numbers.split(" ").map(Number)
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    return `${highest} ${lowest}`
     
   }
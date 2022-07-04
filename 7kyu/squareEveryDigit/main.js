function squareDigits(num){
    return  Number(num.toString().split('').map((element) => Math.pow(Number(element), 2)).join(''))
  }
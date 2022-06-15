function rentalCarCost(d) {
    let sum = d * 40;
    if( d >= 7 ) {
      return sum - 50;
    } else if (d > 2) {
      return sum - 20;
    } else {
      return sum;
    }
  }
  
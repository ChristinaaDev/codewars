function find_average(array) {
    if(array.length === 0){
      return 0
    }else{
      return array.reduce((x, y) => x + y, 0) / array.length;
    }
  }
function getAverage(marks){
    return Math.floor(marks.reduce((a,z) => a + z, 0)/ marks.length);
  }
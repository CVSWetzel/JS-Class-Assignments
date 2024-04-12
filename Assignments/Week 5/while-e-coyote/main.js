const numberDoubler = (num) => {
    while (num < 100) {
      num *= 2;
    }
    return num;
  };
  
  const stringRepeater = (str) => {
    // Calculate the number of repetitions needed to reach or exceed 10 characters
    const repetitions = Math.ceil(10 / str.length);
    // Repeat the string the calculated number of times
    return str.repeat(repetitions);
  };
  
  
  
   const makeDivisible = (x, y) => {
    while (x % y !== 0) {
      x++;
    }
    return x;
  };
  
  module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible,
  };
  
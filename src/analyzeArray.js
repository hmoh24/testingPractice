function analyzeArray(array) {
  function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
  }
  let sortedArray = array.sort();

  return {
    average: average(array),
    min: sortedArray[0],
    max: sortedArray[array.length - 1],
    length: array.length,
  };
}

module.exports = analyzeArray;

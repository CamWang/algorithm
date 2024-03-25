function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
      return 0;
  }
  
  if (arr.length === 1) {
      return 1;
  }
  
  let leftPointer = 0, rightPointer = 1;
  while (rightPointer !== arr.length) {
      if (arr[leftPointer] !== arr[rightPointer]) {
          leftPointer++;
          arr[leftPointer] = arr[rightPointer];
      }
      rightPointer++;
  }
  return leftPointer + 1;
}

module.exports = {
  countUniqueValues
}
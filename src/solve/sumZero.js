function sumZero(arr) {
  // if too short exit
  if (arr.length <= 1) {
    return undefined;
  }
  // two pointer
  let leftPoint = 0, rightPoint = arr.length - 1;

  while (leftPoint !== rightPoint) {
    const leftVal = arr[leftPoint], rightVal = arr[rightPoint];
    const sum = leftVal + rightVal;
    if (sum === 0) {
      return [leftVal, rightVal]
    }
    if (sum < 0) {
      leftPoint++;
    }
    if (sum > 0) {
      rightPoint--;
    }
  }
  return undefined;
}

module.exports = {
  sumZero
}
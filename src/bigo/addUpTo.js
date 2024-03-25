function addUpToSimple(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function addUpToHack(n) {
  return n * (n + 1) / 2;
}

module.exports = {
  addUpToSimple,
  addUpToHack
}
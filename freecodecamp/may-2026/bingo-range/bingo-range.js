function getBingoRange(letter) {

  const result = [];

  const ranges = {
    'B': { start: 1, end: 15},
    'I': { start: 16, end: 30},
    'N': { start: 31, end: 45},
    'G': { start: 46, end: 60},
    'O': { start: 61, end: 75},
  };

  const bound = ranges[letter];

  if (bound) {
    for (let i = bound.start; i <= bound.end; i++) {
        result.push(i);
    }
  }
  return result;
}

console.log(getBingoRange("B"));
console.log(getBingoRange("I"));
console.log(getBingoRange("N"));
console.log(getBingoRange("G"));
console.log(getBingoRange("O"));
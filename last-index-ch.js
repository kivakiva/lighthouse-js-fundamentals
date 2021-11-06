function lastIndexOf(array, value) {
  let i = array.length;
  while (i > -2) {
    if (array[i] === value) {
      return i;
    }
    else if (i === -1) {
      return i;
    }
    else {
      i--;
    }
  }
}




console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
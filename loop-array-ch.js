function range(start, end, step) {
  let i = 0;
  let num = 0;
  let array = [];
  if (start !== undefined && end !== 0 && step > 0 && start <= end) {
    while (num < end) {
      num = start + step * i;
      array.push(num);
      i ++;
    }
    return array;
  }
  else {
    return array;
  }
}





console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
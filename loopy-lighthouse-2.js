function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i < range[1] + 1 ; i ++) {
    i % multiples[0] === 0 ? (i % multiples[1] === 0 ? console.log(words[0] + words[1]) : console.log(words[0])) : (i % multiples[1] === 0 ? console.log(words[1]) : console.log(i));
  }
}



loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

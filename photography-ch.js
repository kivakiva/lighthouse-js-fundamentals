const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let parade = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      parade[1] ++;
    }
    else if (move === "south") {
      parade[1] --;
    }
    else if (move === "west") {
      parade[0] --;
    }
    else if (move === "east") {
      parade[0] ++;
    }
  }
  return parade;
};
console.log(finalPosition(moves));

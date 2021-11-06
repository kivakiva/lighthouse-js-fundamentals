function judgeVegetable(vegetables, metric) {

  //set the last entry as the winner
  let winner = vegetables[0][metric];
  let submitterW = vegetables[0].submitter;

  for (let i = 0 ; i < vegetables.length; i++) {
    if (winner < vegetables[i][metric]) {
      winner = vegetables[i][metric];
      submitterW = vegetables[i].submitter;
    }
  }
  return submitterW;
}




const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';
//console.log(vegetables[0][metric]);
judgeVegetable(vegetables, 'redness')
function smartGarbage(trash, bins) {
  bins[trash] += 1;
  return bins;
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
//console.log(bins)
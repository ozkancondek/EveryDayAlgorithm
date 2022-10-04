const pentagonSerie = (limit) => {
  let serie = new Array();
  for (let i = 1; i <= limit; i++) {
    serie.push(i * (3 * i - 1) * 0.5);
  }
  return serie;
};

const finder = (arr) => {
  for (let i = arr.length - 2; i >= 0; i--) {
    let num = arr[i];
    for (let j = arr.length - 3; j >= 0; j--) {
      let sum = num + arr[j];
      let absolute = Math.abs(num - arr[j]);
      if (arr.includes(sum) && arr.includes(absolute)) {
        return absolute;
      }
    }
  }
  return false;
};

console.log(finder(pentagonSerie(2395)));

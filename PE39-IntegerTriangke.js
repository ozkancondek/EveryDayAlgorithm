const triangleFinder = (limit) => {
  let arr = [];

  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      for (let z = 1; z <= limit; z++) {
        if (z ** 2 + j ** 2 === i ** 2 && z + j + i === limit) {
          arr.push({ z, j, i });
        }
      }
    }
  }
  return arr.length / 2;
};

const findUnderLimit = (limit) => {
  let arr = [];
  for (let i = 950; i <= limit; i++) {
    if (triangleFinder(i) > 6) {
      arr.push([i, triangleFinder(i)]);
    }
  }
  return arr;
};

//manuel solution not an effective code

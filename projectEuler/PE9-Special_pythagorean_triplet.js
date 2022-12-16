const specialTriplet = (limit) => {
  let arr = [];
  for (let x = 1; x <= limit; x++) {
    for (let y = 1; y <= limit; y++) {
      for (let z = 1; z <= limit; z++) {
        if (x ** 2 + y ** 2 === z ** 2 && x + y + z === 1000) {
          return x * y * z;
        }
      }
    }
  }
  return "no number in this range";
};

console.log(specialTriplet(500));

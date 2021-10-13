function trimProperties(obj) {
  const trimmed = JSON.stringify(obj, (key, value) => {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
  return JSON.parse(trimmed);

  // ALTERNATE ROUTE TO SAME RESULT BELOW //
  // if (!Array.isArray(obj) && typeof obj != "object") return obj;
  // return Object.keys(obj).reduce((acc, key) => {
  //     acc[key.trim()] =
  //       typeof obj[key] == "string" ? obj[key].trim() : trimObj(obj[key]);
  //     return acc;
  //   },
  //   Array.isArray(obj) ? [] : {}
  // );
}

function trimPropertiesMutation(obj) {
  Object.keys(obj).map((k) => (obj[k] = obj[k].trim()));
  return obj;
}

function findLargestInteger(integers) {
  const largest = integers.reduce((acc, res) => {
    return acc.integer > res.integer ? acc : res;
  });
  return largest.integer;
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
  }
  countDown() {
    if (this.count > 0) {
      return this.count--;
    }
    return this.count;
  }
}

class Seasons {
  constructor() {
    this.seasons = ["summer", "fall", "winter", "spring"];
    this.currentSeason = 0;
  }
  next() {
    const result = this.seasons[this.currentSeason];
    this.currentSeason === 3 ? (this.currentSeason = 0) : this.currentSeason++;
    return result;
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0;
    this.tank = tankSize;
    this.name = name;
    this.mpg = mpg;
  }
  drive(distance) {
    let gallonsUsed = Math.round(distance / this.mpg);
    if (this.tank <= 0) {
      return `You ran out of fuel at ${this.odometer} miles`;
    } else if (this.tank < gallonsUsed) {
      const leftOver = gallonsUsed - this.tank;
      const milesDrove = distance - leftOver * this.mpg;
      this.odometer += milesDrove;
      this.tank = 0;
      return `You ran out of gas while driving ${distance} miles! You made it to mile ${milesDrove}. Odometer is at ${this.odometer}`;
    } else {
      this.odometer += distance;
      this.tank -= Math.round(gallonsUsed);
      return this.odometer;
    }
  }
  refuel(gallons) {
    if (this.tank + gallons > 20) {
      return "600 (tank only holds 20)";
    }
    this.tank += gallons;
    return this.tank * this.mpg;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  return number % 2 === 0 ? true : false;
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};

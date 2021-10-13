const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { name: "  jane  ", age: "21 ", status: "  married  " };
    const expected = { name: "jane", age: "21", status: "married" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
    expect(input).not.toEqual(actual);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  let user;
  beforeEach(() => {
    user = { name: "  jane  ", age: "21 ", status: "  married  " };
  });
  test("[3] returns an object with the properties trimmed", () => {
    const expected = { name: "jane", age: "21", status: "married" };
    const actual = utils.trimPropertiesMutation(user);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const result = utils.trimPropertiesMutation(user);
    expect(result).toBe(user);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(3);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3);
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons();
  });
  test("[9] the FIRST call of seasons.next returns 'summer'", () => {
    expect(seasons.next()).toBe("summer");
  });
  test("[10] the SECOND call of seasons.next returns 'fall'", () => {
    seasons.next();
    expect(seasons.next()).toBe("fall");
  });
  test("[11] the THIRD call of seasons.next returns 'winter'", () => {
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("winter");
  });
  test("[12] the FOURTH call of seasons.next returns 'spring'", () => {
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("spring");
  });
  test("[13] the FIFTH call of seasons.next returns 'summer'", () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("summer");
  });
  test("[14] the 40th call of seasons.next returns 'spring'", () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let acura;
  beforeEach(() => {
    acura = new utils.Car("acura", 20, 20);
  });
  test("[15] driving the car returns the updated odometer", () => {
    acura.drive(50);
    acura.drive(100);
    acura.drive(100);
    expect(acura.drive(50)).toBe(300);
  });
  test("[16] driving the car uses gas", () => {
    expect(acura.tank).toBe(20);
    acura.drive(100);
    expect(acura.tank).toBeLessThan(20);
  });
  test("[17] refueling allows to keep driving", () => {
    acura.drive(400);
    expect(acura.tank).toBe(0);
    expect(acura.drive(400)).toBe("You ran out of fuel at 400 miles");
    expect(acura.refuel(20)).toBe(400);
    expect(acura.drive(40)).toBe(440);
    expect(acura.drive(400)).toBe(
      "You ran out of gas while driving 400 miles! You made it to mile 360. Odometer is at 800"
    );
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    expect(acura.tank).toBe(20);
    expect(acura.refuel(1)).toBe("600 (tank only holds 20)");
    expect(acura.tank).toBe(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const result = await utils.isEvenNumberAsync(1);
    expect(result).toBe(false);
  });
});

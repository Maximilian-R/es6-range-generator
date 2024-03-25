import range from "./index";

const expect = (range, toEqual) => {
  try {
    const isEqual =
      JSON.stringify(Array.from(range)) === JSON.stringify(toEqual);

    if (!isEqual) {
      throw new Error("Testcase failed");
    }
  } catch (error) {
    console.error(error);
  }
};

const expectToThrow = (range) => {
  let didThrow = false;
  try {
    Array.from(range);
  } catch (error) {
    didThrow = true;
  }

  try {
    if (!didThrow) {
      throw new Error("Testcase failed");
    }
  } catch (error) {
    console.error(error);
  }
};

expect(range(), []);

expect(range(0), []);
expect(range(1), [0]);
expect(range(-1), [0]);
expect(range(2), [0, 1]);
expect(range(-2), [0, -1]);

expect(range(0, 0), [0]);
expect(range(1, 1), [1]);
expect(range(-1, -1), [-1]);

expect(range(-2, 2), [-2, -1, 0, 1, 2]);
expect(range(2, -2), [2, 1, 0, -1, -2]);

expect(range(0, 5), [0, 1, 2, 3, 4, 5]);
expect(range(5, 0), [5, 4, 3, 2, 1, 0]);
expect(range(1, 5), [1, 2, 3, 4, 5]);
expect(range(5, 1), [5, 4, 3, 2, 1]);

expect(range(0, -5), [0, -1, -2, -3, -4, -5]);
expect(range(-5, 0), [-5, -4, -3, -2, -1, 0]);
expect(range(-1, -5), [-1, -2, -3, -4, -5]);
expect(range(-5, -1), [-5, -4, -3, -2, -1]);

expectToThrow(range(""));
expectToThrow(range("", 0));
expectToThrow(range(0, ""));
expectToThrow(range("", ""));

// for...of | output: 5 6 7 8 9 10

for (let i of range(5, 10)) {
  console.log(i);
}

// forEach | output: 5 6 7 8 9 10
range(5, 10).forEach((i) => console.log(i));

// Convert to array | [5, 6, 7, 8, 9, 10];
Array.from(range(5, 10));

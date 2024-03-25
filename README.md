# es6-range-generator

Inclusive range generator for integers

## Installation

You can install es6-range-generator via npm:

```
npm install es6-range-generator
```

## API

`range(from, to)`
Generates a sequence of integers within a specified range.

- from (number): The starting value of the range.
- to (number): The ending value of the range (inclusive).
- Returns: An iterator that yields integers within the specified range.
- Throws an error if any of the arguments are not integers.

`range(length)`
Generates a zero-based sequence of integers.

- length (number): The amount of values in the range.
- Returns: An iterator that yields integers within the specified range.
- Throws an error if any of the arguments are not integers.

## Usage

### for...of

```js
import range from "es6-range-generator";

for (let i of range(5, 10)) {
  console.log(i); // Outputs: 5 6 7 8 9 10
}
```

### forEach

```js
import range from "es6-range-generator";

range(5, 10).forEach((i) => console.log(i)); // Outputs: 5 6 7 8 9 10
```

### Array.from

```js
import range from "es6-range-generator";

Array.from(range(5, 10)); // Outputs: [5, 6, 7, 8, 9, 10];
```

## Examples

```js
// Inlcusive range
range(1, 4); // [1, 2, 3, 4]
range(4, 1); // [4, 3, 2, 1]
range(-1, -4); // [-1, -2, -3, -4]
range(-4, -1); // [-4, -3, -2, -1]
range(-4, 4); // [-4, -3, -2, -1, 0, 1, 2, 3, 4]

// Zero-based range with length
range(0); // []
range(1); // [0]
range(2); // [0, 1]
range(-2); // [0, -1]
```

/**
 * Generates a sequence of integers within a specified range.
 *
 * @param {number} from - The starting value of the range.
 * @param {number} to - The ending value of the range (inclusive).
 * @returns {Iterator} An iterator that yields integers within the specified range.
 * @throws {Error} Throws an error if any of the arguments are not integers.
 * @example
 */
export default function* range(from, to) {
  validateArguments(arguments);
  if (arguments.length === 1) {
    to = from;
    from = 0;
    let reverse = from > to;
    for (let i = from; reverse ? i > to : i < to; reverse ? i-- : i++) yield i;
  } else {
    let reverse = from > to;
    for (let i = from; reverse ? i >= to : i <= to; reverse ? i-- : i++)
      yield i;
  }
}

const validateArguments = (args) => {
  if (![...args].every((value) => Number.isInteger(value))) {
    throw new Error("All the arguments must be integers");
  }
};

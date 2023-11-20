/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 *
 * @param {*} summand1
 * @param {*} summand2
 * @returns
 */

function isAdditionGreaterThanFifty(summand1, summand2) {
  if (typeof summand1 !== "number" || typeof summand2 !== "number") {
    throw new Error(
      "Invalid input: Both summand1 and summand2 must be numbers.",
    );
  }

  const sum = summand1 + summand2;

  return sum >= 50;
}

export default isAdditionGreaterThanFifty;

/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * generateRandomNumberInRange
 * @param {limit} limit
 * @returns number
 */

function generateRandomNumberInRange(limit) {
  if (typeof limit !== "number" || limit < 0) {
    throw new Error("Invalid input: Limit must be a non-negative number.");
  }

  const randomNumber = Math.floor(Math.random() * limit);

  return randomNumber;
}

export default generateRandomNumberInRange;

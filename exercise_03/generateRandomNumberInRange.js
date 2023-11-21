/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * generateRandomNumberInRange
 * @param {number} limit
 * @returns {number}
 */

function generateRandomNumberInRange(limit) {
  const randomNumber = Math.floor(Math.random() * limit);

  return randomNumber;
}

export default generateRandomNumberInRange;

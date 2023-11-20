/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 *
 * @param {*} value
 * @param {*} threshold
 * @returns
 */

function isGreaterThan(value, threshold) {
  if (typeof value !== "number" || typeof threshold !== "number") {
    throw new Error("Invalid input: Both value and threshold must be numbers.");
  }

  return value > threshold;
}

export default isGreaterThan;

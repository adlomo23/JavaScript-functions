import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * If the sumatory of the randoom number and value are more than 100 it indicate how many long, and if it's lower it indicate how lower from 100.
 * @param {number} value
 * @returns {string}
 */

const getDistanceMessageFromSumTo100 = function (value) {
  const limit = 100;
  const random = generateRandomNumberInRange(limit);

  if (value + random > 100) {
    return (
      "Sum with value " +
      (value + random) +
      " execeeds in " +
      (value + random - 100)
    );
  }

  return (
    "Sum with value " +
    (value + random) +
    " is left in " +
    (100 - (value + random))
  );
};

export default getDistanceMessageFromSumTo100;

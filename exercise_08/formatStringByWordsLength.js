import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";
/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * It transforms a string to upper case if it`s more than 5 words lenght.
 * @param {string} sentence
 * @returns {string}
 */

const formatStringByWordsLength = function (sentence) {
  const compareSentence = getTotalWordsFromString(sentence);

  if (compareSentence > 5) {
    return sentence.toUpperCase();
  }

  return sentence.toLowerCase();
};

export default formatStringByWordsLength;

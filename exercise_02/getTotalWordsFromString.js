/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * getTotalWordsFromString
 * @param {string} sentence
 * @returns number
 */

function getTotalWordsFromString(inputString) {
   
    inputString = inputString.trim();

    var words = inputString.split(/\s+/);

    return words.length;
}



export default getTotalWordsFromString;
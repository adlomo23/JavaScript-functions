import formatStringByWordsLength from "./formatStringByWordsLength.js";

const result1 = formatStringByWordsLength("Hi, this sentence is too long");
console.log(result1); // HI, THIS SENTENCE IS TOO LONG

const result2 = formatStringByWordsLength("Hello, this is small");
console.log(result2); // Hello, this is small

const result3 = formatStringByWordsLength("This sentence already have five");
console.log(result3); //This sentence already have five

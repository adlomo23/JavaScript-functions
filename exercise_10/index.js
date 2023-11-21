import transformCollectionToString from "./transformCollectionToString.js";

const result1 = transformCollectionToString(["apple", "grapes", "oranges"]);
console.log(result1); // "apple | grapes | oranges"

const result2 = transformCollectionToString([]);
console.log(result2); // ""

//import isTypeOf' and execute

import isTypeOf from "./isTypeOf.js"

const stringValue = 'Hello, world!';
const numberValue = 42;
const booleanValue = true;
const arrayValue = [1, 2, 3];

const resultString = isTypeOf(stringValue, 'string');
const resultNumber = isTypeOf(numberValue, 'number');
const resultBoolean = isTypeOf(booleanValue, 'boolean');
const resultArray = isTypeOf(arrayValue, 'array');
/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */

/**
 * 
 * @param {*} value 
 * @param {*} type 
 * @returns 
 */

function isTypeOf(value, type) {
    
    if (typeof type !== 'string') {
        throw new Error('Invalid input: Type must be a string.');
    }

    if (type === 'array') {
        return Array.isArray(value);
    }

    return typeof value === type;
}

export default isTypeOf;
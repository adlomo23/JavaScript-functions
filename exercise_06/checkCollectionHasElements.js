/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * 
 * @param {*} collection 
 * @returns 
 */


function checkCollectionHasElements(collection) {
    
    if (!Array.isArray(collection)) {
        throw new Error('Invalid input: Collection must be an array.');
    }

    return collection.length > 0;
}

export default checkCollectionHasElements;
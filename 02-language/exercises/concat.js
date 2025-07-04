const concat = (arr1,arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError('Both arguments must be arrays');
    }
     
    // we have multiple options here like
    // return arr1.concat(arr2);
    // return arr1.push(...arr2) && arr1; //-->  this fail with [] and [] because it returns 0 and it is tricky because && return the last operand :-(

    return [...arr1, ...arr2];
}

const multiconcat = (...arrays) => {
    if (arrays.some(arr => !Array.isArray(arr))) {
        throw new TypeError('All arguments must be arrays');
    }
    const initialValue = [];
    return arrays.reduce((previous, current) => [...previous, ...current], initialValue);
}

module.exports = {
    concat,
    multiconcat
}
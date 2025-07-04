const clone = (source) => {

    // create a shallow copy of the source object,
    //  ie if some property is an object, it will still reference the same object    

    if (typeof source !== 'object' || source === null) {
        throw new Error('Input must be a non-null object.');
    }

    if (Array.isArray(source)) {
        throw new Error('Input must be a non-null object, not an array.');
    }

    // we have multiple options here as Object.assign 
    // const target = {};
    // return Object.assign(target, source);
    // bat rest operator is more modern and cleaner

    return {
        ...source
    };
}

const deepClone = (source) => {
    // create a deep copy of the source object,
    //  ie if some property is an object, it will create a new object

    if (typeof source !== 'object' || source === null) {
        throw new Error('Input must be a non-null object');
    }

    if (Array.isArray(source)) {
        throw new Error('Input must be a non-null object, not an array');
    }

    // we have multiple options here like Window.structuredClone, lodash->cloneDeep, but we can use JSON.parse(JSON.stringify(source))
    // this will not work with functions, undefined, or circular references!!!

    return JSON.parse(JSON.stringify(source));
}

const merge = (source, target) => {
    if (typeof target !== 'object' || target === null) {
        throw new Error('Target must be a non-null object');
    }

    if (typeof source !== 'object' || source === null) {
        throw new Error('Source must be a non-null object');
    }

     // we can use also return Object.assign(target, source);
     // the order here matters, for properties that exist the source win
     return { ...target, ...source };
}

module.exports = {
    clone,
    deepClone,
    merge
}
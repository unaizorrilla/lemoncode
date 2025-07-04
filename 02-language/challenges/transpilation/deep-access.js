

const deepGet = (obj, ...keys) => {

    if (!obj || keys.length === 0) {
        return obj;
    }

    let current = obj;

    for (const key of keys) {
        if (current == null || !Object.prototype.hasOwnProperty.call(current, key)) {
            // object is (null | undefined) or key does not exist
            return undefined;
        }

        current = current[key];
    }

    return current;
}

const deepSet = (value, obj, ...keys) => {

    if (!obj || keys.length === 0) {
        return;
    }

    let current = obj;

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === keys.length - 1) {
            current[key] = value; // last one, set value
        } else {
            if (!Object.prototype.hasOwnProperty.call(current, key)
                || typeof current[key] !== "object" || current[key] === null) {
                current[key] = {};
            }
            // not the last one, ensure current[key] is an object
            current = current[key];
        }
    }
}

// test cases for deepget
console.log("");
console.log("###### DEEP GET TEST CASES ######");
console.log("");

let myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

// test cases for deepSet

console.log("");
console.log("###### DEEP SET TEST CASES ######");
console.log("");

myObject = {};

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject));  // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject));  // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}
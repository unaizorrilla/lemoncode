// just used to test the memoization function
// this is not a real test, just a demonstration of the memoization function
let count = 0;
const repeatedText = (repetitions, text) => (count++, `${text} `.repeat(repetitions).trim());
const memoize = (func) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        return cache[key] || (cache[key] = func(...args));
    };
};
const memoizedGreet = memoize(repeatedText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2 

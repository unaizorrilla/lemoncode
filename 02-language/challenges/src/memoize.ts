// just used to test the memoization function
// this is not a real test, just a demonstration of the memoization function

let count = 0;
const repeatedText = (repetitions: number, text: string): string => (count++, `${text} `.repeat(repetitions).trim())

const memoize = <TArgs,TResult>(func: Function): Function => {
  const cache: Record<string, TResult> = {};

  return (...args: TArgs[]): TResult => {
     const key = JSON.stringify(args);
     return cache[key] || (cache[key] = func(...args));
  } 
};


const memoizedGreet = memoize<Parameters<typeof repeatedText>, ReturnType<typeof repeatedText>>(repeatedText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2 
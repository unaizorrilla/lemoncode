const { concat, multiconcat } = require('./concat');

test('concat of [1,2] and [3,4] is [1,2,3,4]', () => {
    expect(concat([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
});

test('concat of [1,2] and [] is [1,2]', () => {
    expect(concat([1, 2], [])).toStrictEqual([1, 2]);
});

test('concat of [] and [3,4] is [3,4]', () => {
    expect(concat([], [3, 4])).toStrictEqual([3, 4]);
});

test('concat of [] and [] is []', () => {
    expect(concat([], [])).toStrictEqual([]);
});

test('concat throws TypeError if first argument is not an array', () => {
    expect(() => concat('not an array', [1, 2])).toThrow(TypeError);
});

test('concat throws TypeError if second argument is not an array', () => {
    expect(() => concat([1, 2], 'not an array')).toThrow(TypeError);
});

test('concat multiple throws TypeError if any argument is not an array', () => {
    expect(() => multiconcat([1, 2], 'not an array')).toThrow(TypeError);
    expect(() => multiconcat('not an array', [1, 2], [3, 4])).toThrow(TypeError);
});

test('concat [1,2] and [3,4] and [5,6] is [1,2,3,4,5,6]', () => {
    expect(() => multiconcat([1, 2], [3, 4], [5, 6]).toStrictEqual([1, 2, 3, 4, 5, 6]));
});
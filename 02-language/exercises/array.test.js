const { head, last, tail, init } = require('./arrays');

test('head of [1,2,3] is 1', () => {
    expect(head([1, 2, 3])).toBe(1);
});

test('head of [6] is 6', () => {
    expect(head([6])).toBe(6);
});

test('head of [] is undefined', () => {
    expect(head([])).toBe(undefined);
});

test('last of [1,2,3] is 3', () => {
    expect(last([1, 2, 3])).toBe(3);
});

test('last of [6] is 6', () => {
    expect(last([6])).toBe(6);
});

test('last of [] is undefined', () => {
    expect(last([])).toBe(undefined);
});

test('tail of [1,2,3] is [2,3]', () => {
    expect(tail([1, 2, 3])).toStrictEqual([2, 3]);
});

test('tail of [6] is []', () => {
    expect(tail([6])).toStrictEqual([]);
});

test('tail of [] is []', () => {
    expect(tail([])).toStrictEqual([]);
});

test('init of [1,2,3] is [2,3]', () => {
    expect(init([1, 2, 3])).toStrictEqual([1, 2]);
});

test('init of [6] is []', () => {
    expect(init([6])).toStrictEqual([]);
});

test('init of [] is []', () => {
    expect(init([])).toStrictEqual([]);
});
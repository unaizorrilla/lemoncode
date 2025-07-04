const { clone, deepClone, merge } = require('./clone');

// --- > Clone 

test('clone of {a:1, b:2} is {a:1, b:2}', () => {
    expect(clone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
});

test('clone of {a:1, b:2} is not the same object', () => {
    const original = { a: 1, b: 2 };
    const cloned = clone(original);
    expect(cloned).not.toBe(original);
});

test('clone of {a:1, b:2} is a shallow copy', () => {
    const original = { a: 1, b: { c: 3 } };
    const cloned = clone(original);

    expect(cloned.b).toBe(original.b);
});

test('clone of empty object is empty object', () => {
    expect(clone({})).toEqual({});
});

// --> Deep Clone

test('deep clone of {a:1, b:2} is {a:1, b:2}', () => {
    expect(deepClone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
});

test('deep clone of {a:1, b:{c:3}} is not a shallow copy', () => {
    const original = { a: 1, b: { c: 3 } };
    const cloned = deepClone(original);

    expect(cloned.b).not.toBe(original.b);
});

// --> Merge

test('merge two objects is a new object with combined properties', () => {
    const source = { name: "Maria", surname: "Ibañez", country: "SPA" };
    const target = { name: "Luisa", age: 31, married: true };

    const merged = merge(source, target);

    expect(merged).toEqual({ name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA" });
});


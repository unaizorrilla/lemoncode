const flatArray = <TData>(input : Array<TData>): Array<TData> => {

    return input.reduce<Array<TData>>((final,item)=>
    {
        if (Array.isArray(item)) {
            final.push(...flatArray(item));
        } else {
            final.push(item);
        }
        return final;
    }, []);
}

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flatSample = flatArray(sample);

console.log(flatSample); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
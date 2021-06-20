function filterRange(arr, a, b) {
    let rangeArr = [];
    //return arr.sort( (first, second) => first - second);

    arr.map(value => {
        if (value >= a && value <= b)
            rangeArr.push(value);
    });

    return rangeArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log ( filtered ); // 3, 1

console.log ( arr ); // 5, 3, 8, 1
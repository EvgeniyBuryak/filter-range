function filterRange(arr, a, b) {
    //return arr
      //  .map(value => { if (value >= a && value <= b) return value });
    //arr.splice()



    let elem = arr.pop();

    if (!elem)
        return [];

    if (elem >= a && elem <= b) {
        let rangeArr = filterRange(arr, a, b);
        rangeArr.push(elem);
        return rangeArr;
    }
    else
        return filterRange(arr, a, b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log ( filtered ); // 3, 1

console.log ( arr ); // 5, 3, 8, 1
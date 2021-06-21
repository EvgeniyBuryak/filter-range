function filterRange(arr, a, b) {
    return arr.filter(value => (value >= a && value <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(`filtered: ${filtered}`); // 3, 1

console.log(`arr: ${arr}`); // 5, 3, 8, 1

// ?????? ????? ????????? ??????? 
function filterRangeInPlace(arr, a, b) {
    /*
    let value;
    for (let i = 0; i < arr.length; i++) {
        value = arr[i];
        if (!(a <= value && value <= b))
            arr.splice(i, 1);
    }*/

    arr.forEach((value, index) => { (!(a <= value && value <= b)) ?
            arr.splice(index, 1) : '';
    });

    //let index = arr.findIndex(value => (!(a <= value && value <= b)));
    //arr.splice(index, 1);
}

filterRangeInPlace(arr, 1, 4);

console.log(`arr: ${arr}`); // 3, 1
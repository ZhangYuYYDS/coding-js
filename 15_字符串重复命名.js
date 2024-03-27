let arr = ['ab', 'c', 'ab', 'd', 'c'];

function getArr(arr) {
    let counts = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (!counts[str]) {
            counts[str] = 1;
            result.push(str);
        } else {
            counts[str]++;
            result.push(str + counts[str]);
        }
    }
    return result;
}

console.log(getArr(arr));

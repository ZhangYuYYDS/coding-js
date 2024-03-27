let n = 6;
let foods = [1, 4, 1, 2];
let imax = 0;
let lastKey;

const map = new Map();
foods.sort((a, b) => a - b);

foods.forEach((food) => {
    map.set(food, (map.get(food) || 0) + 1);
});

map.forEach((value, key) => {
    if (value > 1) {
        map.set(key, value - 1);
        lastKey = getLast(map);
        console.log('111', lastKey);
        map.set(key + lastKey, (map.get(key + lastKey) || 0) + 1);
        imax++;
    }
});

function getLast(map) {
    for (let key of map.keys()) {
        lastKey = key;
    }
    return lastKey;
}
console.log(map);
console.log(imax);

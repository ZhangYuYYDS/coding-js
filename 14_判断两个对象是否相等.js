let obj1 = {
    name: 'zy',
    age: 18,
    address: 'beijing',
    grade: {
        one: {
            math: 90,
            english: 85,
        },
        two: {
            math: 95,
            english: 80,
        },
    },
};

let obj2 = {
    name: 'zy',
    age: 18,
    address: 'beijing',
    grade: {
        one: {
            math: 90,
            english: 85,
        },
        two: {
            math: 95,
            english: 80,
        },
    },
};
// 两种：浅相等和深相等
// 1. 浅相等：只要二者的引用地址相等，就相等
// 2. 深相等：必须属性和值完全相等·
// Object.keys() 只会返回对象本身的属性，不包含对象中属性的属性值

// 如何实现？
// 一定注意要判断属性值是否为对象，如果是对象，则递归调用isEqual函数
function isEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (typeof obj1[key] == 'object' || typeof obj2[key] == 'object') {
            return isEqual(obj1[key], obj2[key]);
        } else if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(isEqual(obj1, obj2));

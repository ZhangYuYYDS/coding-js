// new可以通过构造函数生成一个对象
// 1. 创建一个对象
// 2. 让对象的原型指向构造函数的原型
// 3. 构造函数的this指向这个对象
// 4. 判断构造函数的返回值，如果是对象就返回那个新对象

function myNew(fn, ...args) {
    let newObj = {};
    // newObj.__proto__ = fn.prototype;
    newObj = Object.create(fn.prototype);

    let result = fn.apply(newObj, args);

    result = typeof result === 'object' ? result : newObj;

    return result;
}

function Parent(name) {
    this.name = name;
}
let son = myNew(Parent, 'dog');
console.log(son);

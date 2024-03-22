// 1. call 第一个参数是this指向，后面依次参数，传递到函数调用的参数
// 2. apply第一个参数是this指向，第二个参数是数组和类数组
// 3. bind不会立即调用函数，而是创建了一个新函数，并将指定的this值绑定到该函数，并可选的预先设置部分参数

Function.prototype.myCall = function (context, ...args) {
    context = context == null || context === undefined ? window : context;
    // this此时是调用函数，即greet函数
    // 将函数赋值给对象的一个_fn属性中，这样调用函数的时候，默认就会指向context了
    context._fn = this;
    const result = context._fn(...args);
    delete context._fn;
    return result;
};

Function.prototype.myApply = function (context, args) {
    context = context == null || context === undefined ? window : context;
    context._fn = this;
    const result = context._fn(...args);
    delete context._fn;
    return result;
};

Function.prototype.myBind = function (context, ...args) {
    context = context == null || context === undefined ? window : context;
    let _this = this;
    return function (...args2) {
        context._fn = _this;
        const result = context._fn(...args, ...args2);
        delete context._fn;
        return result;
    };
};

// 测试
function greet(name) {
    return `Hello, ${name}! I'm ${this.title}.`;
}

const person = { title: 'Mr' };

console.log(greet.myCall(person, 'John'));
console.log(greet.myApply(person, ['John']));
const greetPerson = greet.myBind(person);
console.log(greetPerson('John'));

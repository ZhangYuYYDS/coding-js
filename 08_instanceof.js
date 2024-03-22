// instanceof可以判断引用数据类型
// 原理：判断是否在引用对象的构造原型上出现过

function myInstanceof(left, right) {
    // 获取对象的原型
    let proto = Object.getPrototypeOf(left);

    // 获取构造函数的prototype属性
    let prototype = right.prototype;

    // 判断对象的构造函数的prototype属性是否在对象的原型链上
    while (true) {
        if (proto === null) return false;

        if (proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);
    }
}

function Parent() {}
var p = new Parent();
console.log(myInstanceof(p, Parent));

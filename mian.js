function greet(name) {
    return `Hello, ${name}! I'm ${this.title}.`;
}

const person = { title: 'Mr' };
console.log(greet.call(person, 'John')); // 调用 greet 函数，并指定 this 为 person，参数为 'John'

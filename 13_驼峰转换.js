// 1. 小驼峰转下划线
function camelCaseToUnderScore(str) {
    // 这个是匹配到一个小写字母后紧挨着一个大写字母的情况
    // 然后将匹配到的小写字母放到$1中，匹配到的大写字母放到$2中
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

// 2. 小驼峰转横线
function camelCaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// 3. 下划线转小驼峰
function underScoreToCamelCase(str) {
    return str.replace(/_(\w)/g, function (match, p1) {
        return p1.toUpperCase();
    });
}

// 4. 横线转小驼峰
function hyphenToCamelCase(str) {
    return str.replace(/-(\w)/g, function (match, p1) {
        return p1.toUpperCase();
    });
}

console.log(camelCaseToUnderScore('helloWorld')); // 输出 hello_world
console.log(camelCaseToUnderScore('fooBarBaz')); // 输出 foo_bar_baz

console.log(camelCaseToHyphen('helloWorld')); // 输出 hello-world
console.log(camelCaseToHyphen('fooBarBaz')); // 输出 foo-bar-baz

console.log(underScoreToCamelCase('hello_world')); // 输出 helloWorld
console.log(underScoreToCamelCase('foo_bar_baz')); // 输出 fooBarBaz

console.log(hyphenToCamelCase('hello-world')); // 输出 helloWorld
console.log(hyphenToCamelCase('foo-bar-baz')); // 输出 fooBarBaz

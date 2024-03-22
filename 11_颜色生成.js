// RGB的形式生成
function main() {
    return `#${rand(250)}${rand(250)}${rand(250)}`;
    function rand(n) {
        return (Math.floor(Math.random() * n) + 1).toString(16);
    }
}
// 16 进制的形式生成
function getRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}
console.log(main());
console.log(getRandomColor());

// RGB2HEX
function rgb2hex(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
}

// 测试
console.log(rgb2hex(255, 0, 0)); // 输出 #ff0000
console.log(rgb2hex(0, 255, 0)); // 输出 #00ff00
console.log(rgb2hex(0, 0, 255)); // 输出 #0000ff

// HEX2RGB
function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`;
}
// 测试
console.log(hex2rgb('#ff0000')); // 输出 rgb(255, 0, 0)
console.log(hex2rgb('#00ff00')); // 输出 rgb(0, 255, 0)
console.log(hex2rgb('#0000ff')); // 输出 rgb(0, 0, 255)

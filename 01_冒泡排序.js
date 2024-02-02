/**
 * 冒泡排序的思想：就是每趟排序冒泡出一个最小值或最大值。
 * 如果有n个数的话，只需要n-1趟排序
 */

const bubbleSort = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        // 可以优化冒泡排序的最好情况下的时间复杂度为O(n)
        let flag = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
        // 一次也没有交换过，说明数组有序，直接返回数组
        if (flag === false) return arr;
    }
    return arr;
};

let arr = [6, 3, 7, 1];
console.log(bubbleSort(arr));

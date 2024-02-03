/**
 * 归并排序的思想：将待排序数组分割成较小的数组，然后递归的对他们排序，并将结果合并起来
 */

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let len = arr.length;

    // 分割数组
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    // 合并两个数组
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // 如果其中一个子数组还有剩余
    // if (leftIndex < left.length) {
    //     // 说明左边有剩余
    //     return [...result, ...left.slice(leftIndex)];
    // } else {
    //     // 右边有剩余
    //     return [...result, ...right.slice(rightIndex)];
    // }

    // 换一种写法
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));

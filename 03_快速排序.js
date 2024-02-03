/**
 * 快速排序的思想：采用“分治”的策略，先将待排序的数据分成两部分，然后在对这两部分分别排序
 * 主要步骤就是选择一个 基准，比基准小的放左边，比基准大的放右边，在分别对两边数据快速排序
 */

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    let left = [];
    let right = [];
    let mid = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // 分别对left和right数组快速排序，并将mid和他俩连接起来
    // 为什么需要用mid连接起来，因为上面循环的时候都没包含mid
    return quickSort(left).concat(mid, quickSort(right));
};

console.log(quickSort([4, 65, 2, -31, 0, 99, 2, 83, 782, 1]));

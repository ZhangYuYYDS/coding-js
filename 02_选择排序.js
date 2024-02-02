/**
 * 选择排序的思想：从待排序的数组中选出一个最大值或者最小值，放到已排序序列的末尾
 */

const selectionSort = (arr) => {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
    }
};

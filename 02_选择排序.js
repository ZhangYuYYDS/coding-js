/**
 * 选择排序的思想：从待排序的数组中选出一个最大值或者最小值，放到已排序序列的末尾
 */

const selectionSort = (arr) => {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let indexMin = i;
        // 遍历数组找到最小的元素
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }

        // 如果最小的元素不是indexMin对应的元素，就将这个元素和indexMin对应的元素交换
        if (indexMin !== i) {
            [arr[indexMin], arr[i]] = [arr[i], arr[indexMin]];
        }
    }
    return arr;
};

console.log(selectionSort([5, 3, 8, 6, 2, 7, 1, 4]));

/**
 * 插入排序的思想：联想到打扑克，每次从未排序的里面拿一张插入到已经有序的正确位置
 */

const insertionSort = (arr) => {
    // 每次取出一张牌
    for (let i = 1; i < arr.length; i++) {
        // 记录当前要插入的牌
        let temp = arr[i];
        // 已排序的部分的最后一个元素下标
        let j = i - 1;

        // 如果已排序的最后一个元素比temp大，就将最后一个元素向后移动
        while (arr[j] > temp && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 将temp插入到正确位置
        arr[j + 1] = temp;
    }
    return arr;
};

console.log(insertionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));

/**
 * 堆排序的思想：将待排序的序列构建成一个大顶堆或小顶堆，然后将堆顶元素与堆的最后一个元素交换，这样最大或者最小的元素就被放到了序列的末尾
 * 基于完全二叉树的排序算法
 */

const heapipy = (arr, i, len) => {
    let max = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < len && arr[left] > arr[max]) {
        max = left;
    }

    if (right < len && arr[right] > arr[max]) {
        max = right;
    }

    if (max !== i) {
        [arr[max], arr[i]] = [arr[i], arr[max]];
        heapipy(arr, max, len); // 对被破坏的子堆递归进行调整
    }
};

// 建立最大堆，从最后一个非叶子节点开始
for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapipy(arr, i, arr.length); // 对每个非叶子节点进行最大堆调整
}

// 排序
for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // 将堆顶元素与当前未排序部分的最后一个元素交换
    heapipy(arr, 0, i); // 对剩余元素进行最大堆调整
}

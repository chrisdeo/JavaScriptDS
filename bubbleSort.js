/* 
    冒泡排序核心： n次(数组长度)遍历；每次冒泡底部都是一个最大的值，即内层遍历的范围递减；
*/
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let flag = 0;                       /* 通过外层标记位，跳过多余的已经排序完毕的循环 */
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                flag++;
            }
        }
        if (!flag)
            return;
        console.log(arr);
    }
}
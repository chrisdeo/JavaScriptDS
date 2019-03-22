function binSearch(arr, data) {
    let increaseArr = arr.sort((x, y) => x - y);
    let len = arr.length;
    let lower = 0;
    let upper = len - 1;
    while (lower <= upper) {
        let mid = Math.floor((upper + lower) / 2);
        if (data === increaseArr[mid])
            return mid;
        else if (data < increaseArr[mid]) {
            upper = mid - 1;
        }
        else {
            lower = mid + 1;
        }
    }
    return -1;
}
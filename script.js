function mergeSort(array) {
    const temp = new Array(array.length);
    return _mergeSort(array, temp, 0, array.length - 1);
}

function _mergeSort(array, temp, left, right) {
    let inv_count = 0;
    if (right > left) {
        const mid = Math.floor((left + right) / 2);
        inv_count += _mergeSort(array, temp, left, mid);
        inv_count += _mergeSort(array, temp, mid + 1, right);
        inv_count += merge(array, temp, left, mid, right);
    }
    return inv_count;
}

function merge(array, temp, left, mid, right) {
    let inv_count = 0;
    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            temp[k++] = array[i++];
        } else {
            temp[k++] = array[j++];
            inv_count += mid - i + 1;
        }
    }

    while (i <= mid) {
        temp[k++] = array[i++];
    }

    while (j <= right) {
        temp[k++] = array[j++];
    }

    for (i = left; i <= right; i++) {
        array[i] = temp[i];
    }

    return inv_count;
}

const array = [5,1,4,2,3,6,7,9,8];
const result = mergeSort(array);
console.log("Number of inversions:", result);

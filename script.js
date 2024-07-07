// Generates an array of unique random numbers from 0 to 8

function generateTab() {
  let tab = [];

  while (tab.length < 9) {
    let random = Math.floor(Math.random() * 9);

    if (!tab.includes(random)) {
      tab.push(random);
    }
  }
  return tab;
}
// Performs merge sort on the given array

function mergeSort(tab) {
  const array = [...tab];
  const temp = new Array(array.length);
  return _mergeSort(array, temp, 0, array.length - 1);
}
// Recursive helper function for merge sort

function _mergeSort(tab, temp, left, right) {
  const array = [...tab];
  let inv_count = 0;
  if (right > left) {
    const mid = Math.floor((left + right) / 2);
    inv_count += _mergeSort(array, temp, left, mid);
    inv_count += _mergeSort(array, temp, mid + 1, right);
    inv_count += merge(array, temp, left, mid, right);
  }
  return inv_count;
}
// Merges two sorted subarrays during merge sort

function merge(tab, temp, left, mid, right) {
  const array = [...tab];
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
// Checks if the inversion count is even

function isEvenInversionCount(tab) {
  if (mergeSort(tab) % 2 === 0) {
    console.log("is even");
    return true;
  } else {
    return false;
  }
}
// Creates a one/two-dimensional array based on inversion count

function createTwoDimensionalArray(tab) {
  let TwoDimensionalArray = new Array();
  if (isEvenInversionCount(tab)) {
    TwoDimensionalArray.push(tab);
    return TwoDimensionalArray;
  } else {
    return tab;
  }
}

let array = generateTab();

console.log("Generated array: " + array);

console.log("Number of inversions:", mergeSort(array));

console.log(createTwoDimensionalArray(array));

console.log("One/two dimensional array: " + createTwoDimensionalArray(array));

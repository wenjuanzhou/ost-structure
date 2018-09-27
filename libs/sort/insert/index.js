/* 插入排序 */
function insertSort(array) {
  let a = array.slice(0);
  for(let i = 1; i < a.length; i++) {
    let temp = a[i];
    let j = i;
    while(j > 0 && a[j - 1] > temp) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = temp;
  }
  return a;
}

module.exports = insertSort;
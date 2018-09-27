/** 快速排序 */
function quickSort(a) {
  let left = 0;
  let right = a.length - 1;
  executive(a, left, right);
  function executive(a, left, right) {
      let middle = a[left];
      let i = left;
      let j = right + 1;
      // console.log(middle);
      if(left < right) {
        while(i < j) {
          do { i++; } while(a[i] < middle);
          do { j--; } while(a[j] > middle);
          if(i < j) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
          }
        }
        let temp = a[left];
        a[left] = a[j];
        a[j] = temp;
        executive(a, left, j - 1);
        executive(a, j + 1, right);
      }
  }
  return a;
}

module.exports = quickSort;
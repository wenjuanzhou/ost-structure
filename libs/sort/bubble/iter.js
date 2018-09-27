/**迭代 */
function bubbleSortIter(a) {
  let i, j, last;
  j = a.length - 1;
  while(j > 0) {
    last = 0; // 说明这一趟无需排序
    for(i = 0; i < j; i++) {
      if(a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        last = i;
      }
    }
    j = last;
  }
  return a;
}

module.exports = bubbleSortIter;
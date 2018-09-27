/* 递归 */
function bubbleSortRec(a) {
  if(a.length === 0) {
    return false;
  }
  let small = 0;
  for(let i = 1; i < a.length; i++) {
    if(a[i] >= a[i - 1]) {
      let temp = a[i];
      a[i] = a[i - 1];
      a[i - 1] = temp;
    }
    small = i;
  }
  if(a.length === 1) {
    return a[a.length - 1];
  }
  return [a[small]].concat(bubbleSortRec(a.slice(0, -1)));
}

module.exports = bubbleSortRec;
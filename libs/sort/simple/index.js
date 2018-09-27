function simpleSort(array) {
  let a = array.slice(0);
  let small = 0; 
  for(let i = 0; i < a.length - 1; i++) {
    for(let j = i + 1; j < a.length; j++) {
      if(a[j] <= a[i]) {
      	small = j;
      	swap(j, i);
      }
  	}
  }

  function swap(first, last) {
    let tmp = a[first];
    a[first] = a[last];
    a[last] = tmp;
  }
  return a;
}

module.exports = simpleSort;
const simpleSort = require('../index').simpleSort;
const quickSort = require('../index').quickSort;
const insertSort = require('../index').insertSort;
const bubbleSortRec = require('../index').bubbleSortRec
const bubbleSortIter = require('../index').bubbleSortIter

const demo = [5, 6, 34, 89, 34, 2, 1, 7];
const simpleRes = simpleSort(demo.slice(0));
const quickRes = quickSort(demo.slice(0));
const insertRes = insertSort(demo.slice(0));
const bubbleSortRecRes = bubbleSortRec(demo.slice(0));
const bubbleSortIterRes = bubbleSortIter(demo.slice(0));
/** 测试结果  */
console.log(simpleRes);
console.log(quickRes);
console.log(insertRes);
console.log(bubbleSortRecRes);
console.log(bubbleSortIterRes);
console.log(demo);
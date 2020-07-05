// 練習：有一個陣列，其中包括10 個元素，例如這個列表是 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]。


// 1. 要求將列表中的每個元素一次向前移動一個位置，第一個元素到列表的最後，然後輸出這個列表。最終樣式是 [2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
// 2. 相反動作，最終樣式是 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);

a = arr.shift();
arr.push(a);
console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9, 0, 1]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);

a = arr.pop();
arr.unshift(a);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
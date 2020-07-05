// #練習：亂數字串產生器，請產生一組亂數字串並且存放在一個變數，且該字串需要滿足：

// 1.長度為六個字符
// 2.前兩個字符為大寫英文字母
// 3.後四個字符為數字


var x = ['A','B','C','D','E','F','G','H'];
var y = parseInt(Math.random()*1000000);
var z = parseInt(Math.random()*5);
var s = parseInt(Math.random()*5);
console.log(x[s] + x[z] + y)
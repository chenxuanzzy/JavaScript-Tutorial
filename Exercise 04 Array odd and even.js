// 練習：假設我有一個 [0,1,2,3,4,5,6,7,8,9] 的 Array，如果要把偶數放前面，奇數放後面該怎麼做？結果會變成 [0, 2, 4, 6, 8, 1, 3, 5, 7, 9] 這樣。




var arr  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// index =   0    1    2
//                     arr.length - 1
var evens = [];
var odds = [];

for(var i=0; i<arr.length; i++){
  if(arr[i] % 2 == 0){
    // console.log(arr[i] + ' => 偶數')
    evens.push(arr[i]);
  } else {
    // console.log(arr[i] + ' => 奇數')
    odds.push(arr[i]);
  }
}

console.log(evens.concat(odds));
// concat 合併多個陣列
console.log(typeof (evens + odds));
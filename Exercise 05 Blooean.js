// 練習：請問下方比較的結果分別會印出什麼？


12.5 == '12.5'  

true


12.5 === '12.5' 

false


12.5 === +'12.5'

false


parseInt(12.5) == parseFloat(12.5) 

false


Number('') == parseFloat('') 

false


typeof NaN === 'number' 

true


null == undefined 

true


null === undefined 

false


undefined == false 

false


NaN == NaN
false
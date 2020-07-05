// 練習： 完成下列操作：
// 1. 指定一種資料結構，用來存放學生的資料，包含「身高」、「體重」，並且建立兩筆資料
// 2. 指定一種資料結構，用來存放所有學生，並且將兩筆資料加入
// 3. 將第二筆資料的身高值，轉換成公尺為單位
// 4. 計算第一筆資料的 BMI 值，並且存回去


1.
var student1 = {
  name:'Nacy',
  tall:165,
  weight:50,
}

var student2= {
  name:'Kevin',
  tall:144,
  weight:60,
}

console.log(student2)
console.log(student1)

2.
var allstudent = {
  'a':student1,
  'b':student2
}
console.log(allstudent)

2-1.
var allstudent = [student1, student2]
console.log(allstudent)

3.
var student2= {
  name:'Kevin',
  tall:144,
  weight:60,
  //method
  changetall : function()
  {
    return this.tall / 100;
  }
}
console.log(student2.changetall());

4.
var student1 = {
  name:'Nacy',
  tall:165,
  weight:77,
  changetall : function()
  {
    return this.weight / (Math.pow((this.tall / 100), 2))
    //Math.pow(數字, 平方數)
  }
}
console.log(student1.changetall());
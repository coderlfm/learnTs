/* 
  声明外部枚举
  外部枚举需要在 .d.ts 中声明  
*/

function work(day: Day) {
  if (day === Day.SUNDAY) {
    console.log('今天是周日~');
  }
}

work(0);

// console.log(Day.SUNDAY);

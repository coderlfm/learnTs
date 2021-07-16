let zh: 'china'; // 类型为 china
let en: 'america'; // 类型为 america

// zh = 'britain';     //报错，只支持输入 china

// 字面量类型可以支持 数字和布尔值

let code: 200 | 201 | 400 | 500;
let flag: false | true;

// code=700;   // 报错
// flag = '123';   // 报错

// 字面量类型在 函数中的使用，可以限制使用的时候可输入的值
type Direction = 'top' | 'bottom' | 'left' | 'right'; // 只允许输入范围内的值
function toDirection(direction: Direction) {
  console.log(direction);
}
toDirection('left');
// toDirection('100');   // 报错

export {};

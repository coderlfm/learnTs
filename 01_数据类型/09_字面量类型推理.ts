type Direction = 'top' | 'bottom' | 'left' | 'right'; // 只允许输入范围内的值
function toDirection(direction: Direction) {
  console.log(direction);
}
toDirection('left');

const a = 'top'; // 类型为 'top'
// let b = 'top'; // 类型为 string
let b = 'top' as const; // 类型为 'top'

toDirection(a); // 正常

// toDirection(b); // 报错， ts 不确定a具体是什么值，因为a有可能被修改 a = 'abc'
// toDirection(b as Direction); // 正常，手动指定类型，但如果a被修改过，则运行时会报错
toDirection(b); // 正常，手动指定类型，但如果a被修改过，则运行时会报错

export {};

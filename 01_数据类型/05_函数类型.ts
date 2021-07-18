// 函数的返回值

// 显式声明返回值
function foo(): number {
  return 123;
}

// 类型推到返回值
function foo2() {
  return 123;
}

// 函数无返回值则返回值类型为 void，一般可不写，不写会推导为 void
// 如果手动返回则会出现报错
function foo3(): void {
  // return 123; // 报错
}

function foo4() {}

// 函数表达式

/* 
返回类型为void的上下文类型 **并不强制函数不返回某些内容**。
另一种说法是，一个带有void返回类型的上下文函数类型(type vf = () => void)，当实现时，可以返回任何其他值，但它返回的类型将被忽略。 

需要注意的是，这个 => 与 es6 的箭头函数 => 有所不同，
TypeScript 中的 => 为函数类型的声明，其左侧是参数类型，右侧是返回值
*/

type voidFunc = () => void;
const foo5: voidFunc = () => {
  return 123;   // 语法不对，但是ts会忽略该返回值类型
};

// type voidFunc = () => void;
const foo6: () => void = () => {
  return 123;
};

const v1 = foo5(); // 类型为 void
console.log('v1:', v1); // v1: 123


type TotalFunc = (a1) => number;
const foo7: voidFunc = () => {
  return 123;   // 语法不对，但是ts会忽略该返回值类型
};

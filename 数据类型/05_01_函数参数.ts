// 定义方式一 使用 function 关键字定义的函数必须使用这种形式显示声明类型注解
function foo1(value: number): void {}

// 定义方式二 函数表达式
const foo2: (value: number) => void = (value) => {};

// 定义方式三 函数表达式 给参数和返回值起别名
type foo3Type = (value: number) => void;
const foo3: foo3Type = (value) => {};

// TODO: type 关键字只是给类型起别名，没有其它作用

function foo4(name: string, age?: number) {
  console.log(name);
  console.log(age);
}
foo4('ts');
foo4('ts', 18);

export {};

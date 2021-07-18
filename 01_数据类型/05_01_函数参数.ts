// 定义方式一 使用 function 关键字定义的函数必须使用这种形式显示声明类型注解
function foo1(value: number): void {}

// 定义方式二 函数表达式
const foo2: (value: number) => void = (value) => {};

// 定义方式三 函数表达式 给参数和返回值起别名
type foo3Type = (value: number) => void;
const foo3: foo3Type = (value) => {};

// TODO: type 关键字只是给类型起别名，没有其它作用

// 函数的可选参数
function foo4(name: string, age?: number) {
  console.log(name);
  console.log(age);
}
foo4('ts');
foo4('ts', 18);

// 函数的默认参数
// 写了默认参数就不需要把 age写成 可选参数了
function foo5(name: string, age: number = 18) {
  console.log(name);
  console.log(age);
}
foo5('ts');
foo5('ts', 18);

// 函数的剩余参数
// 写了默认参数就不需要把 age写成 可选参数了
function printNum(initNum: number, ...nums: number[]) {
  console.log(initNum);
  let totalNum = initNum;
  for (const num of nums) {
    totalNum += num;
  }
  console.log('totalNum:', totalNum);
}
printNum(10);
printNum(10, 20, 30);

export {};

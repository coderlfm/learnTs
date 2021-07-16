
// 可以赋值为 任意类型
let a:any ;

// 12314
let obj = {
  a:123
}

// unknown 类型 表示不确定的类型
// unknown 类型只能赋值为 unknown 类型和 any 类型
// 这个类型可以避免我们使用 unknown 到处乱用

let result: unknown;
let age: number;

function foo() {
  return 'hello';
}

function bar() {
  return 123;
}

result = foo();
result = bar();

// age = name;
// dsaf 


export  {}

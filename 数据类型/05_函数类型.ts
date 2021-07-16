// 函数的返回值

// 显式声明返回值
function foo(): number {
  return 123;
}

// 类型推到返回值
function foo2() {
  return 123;
}

// 函数无返回值则返回值类型为 void，一般可不写，不写会推到为 void
function foo3(): void {}

function foo4() {}

export {};

// 必须以 #开头
function foo(color: `#${string}`) {
  return color;
}

// 中间必须以 / 进行分割
function bar(color: `${string}/${string}`) {
  return color;
}

// foo('111');  错误
foo('#fff');  // 正确

bar('user/detail')
// bar('user')

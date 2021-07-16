// 可选类型

// 可选类型在对象中的使用
type infoType = {
  name: string;
  age: 18;
  like?: string; // 为可选类型
};

let info1: infoType = {
  name: '小明',
  age: 18,
};

let info2: infoType = {
  name: '小明',
  age: 18,
  like: '唱歌',
};

// 可选类型在函数中的使用
function foo(name: string, mobile?: number) {}

foo('小明');
foo('小红', 13366668888);

export {};

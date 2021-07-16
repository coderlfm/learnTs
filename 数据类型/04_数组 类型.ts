// 数组类型
// 注解方式1
const arr: string[] = ['a', 'b', 'c'];

// 注解方式2 // 不推荐该方式，因为该方式在 react 的jsx 的语法会有冲突
const arr2: Array<string> = ['a'];

const info: {
  name: string;
  age: number;
} = {
  name: 'lfm',
  age: 18,
};

// info.sex

export = { };

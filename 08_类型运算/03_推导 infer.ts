export {};

// infer 可以用来提取类型中的变量

// 提取泛型中的第一个元素, 因为不确定是什么类型，所以写 unkonwn，这里需要注意 第二个 extends 是条件判断，且 第二个 infer 需要使用扩展运算符展开

type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? T : never;

type res1 = First<['a', 6, 7]>; // type res1 = "a"
type res2 = First<[true, 'aaa', 111]>; // type res2 = true

export {};

// 递归字符串替换
// 依次进行替换
type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = T extends `${infer First}${From}${infer Right}` ? `${First}${To}${ReplaceAll<Right, From, To>}` : T;

// 将 bbb 替换成 xxx
type res1 = ReplaceAll<'aaa bbb ccc', 'bbb', 'xxx'>; // type res1 = "aaa xxx ccc"

// 把字符串的每个字符组合成一个联合类型 abc a | b |   c
// 这里 最后不能把 never 换成 T，如果换成T 则会在头部新增一个空串
type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;

type res2 = StringToUnion<'abcd'>; // type res2 = "a" | "b" | "c" | "d"

// 字符串反转
// 和之前的思路一致，先将第一个取出来，然后放到后面，再把剩下的字符串继续递归反转
// first 是每次遍历的第一个， result是之前拼接的字母，所有需要 first 在前面， result 在后面，才能够实现反转
type StringReverse<T extends string, Result extends string = ''> = T extends `${infer First}${infer Right}`
  ? StringReverse<Right, `${First}${Result}`>
  : Result;

type res3 = StringReverse<'abc'>; // type res3 = "cba"

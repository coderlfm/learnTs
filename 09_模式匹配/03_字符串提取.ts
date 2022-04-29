export {}

//  是否某个开头
// 替换

type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false;

type res1 = StartsWith<'#fff', '#'>; // type res1 = true

type res2 = StartsWith<'fff', '#'>; // type res2 = false

// 字符串替换
type Replace<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : '';

type res3 = Replace<'aaabbbccc', 'bbb', 'kkk'>; // type res3 = "aaakkkccc"

// 当不匹配时
type res4 = Replace<'aaabbbccc', 'tttt', 'kkk'>; // type res4 = ""

// 去除右边空格
type TrimRight<T extends string> = T extends `${infer Rest}${' ' | '\n' | '\t'}` ? TrimRight<Rest> : T;

type res5 = TrimRight<'abcd    '>; // type res5 = "abcd"

// 去除左边空格
type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimLeft<Rest> : T;

type res6 = TrimLeft<'   abc'>; // type res6 = "abc"

// 去除左右空格，将 TrimRight 和 TrimLeft 进行结合
type TrimStr<T extends string> = TrimRight<TrimLeft<T>>;

type res7 = TrimStr<'   abc    '>; // type res7 = "abc"


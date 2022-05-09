export {};

// 作为泛型参数传入，将每一个都转换为大写

// 只要条件类型的左边是联合类型，那么就会当成是一个单独的元素传入

type UppercaseA<Item extends string> = Item extends 'a' ? Uppercase<Item> : Item;

//
type res1 = UppercaseA<'a' | 'b' | 'c'>; // type res1 = "b" | "c" | "A"

// 将_去除，并且将末尾的转为大写
type Camelcase<T extends string> = T extends `${infer Left}_${infer Right}${infer Rest}`
  ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
  : T;

type CamelcaseResult = Camelcase<'aa_bb_cc'>; // type CamelcaseResult = "aaBbCc"

// 判断是否联合类型
// Union

// [B] extends [A] ->     'a' | 'b' | 'c' extends 'a'
// [B] extends [A] ->     'a' | 'b' | 'c' extends 'b'
// [B] extends [A] ->     'a' | 'b' | 'c' extends 'c'
// 必须 [B] extends [A] 不一致才表示是联合类型，否则就不是联合类型
type Union<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

type res2 = Union<'a' | 'b' | 'c'>;
type res3 = Union<number>;

// 如果条件类型的左边是联合类型，则会将联合类型的每一个元素传入进行单独计算

// 数组转联合类型的方式
type union = ['aaa', 'bbb'][number]; // type union = "aaa" | "bbb"

// 生成 css 类名
type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`;

// type res4 = "home__main--success" | "home__main--error" | "home__footer--success" | "home__footer--error"
type res4 = BEM<'home', ['main', 'footer'], ['success', 'error']>;

// 全组合类型

type AllCombination<A extends string, B extends string> = A | B | `${A}${B}` | `${B}${A}`;

type AllCombinations<A extends string, B extends string = A> = A extends A
  ? AllCombination<A, AllCombinations<Exclude<B, A>>>
  : never;

// type res5 = "a" | "b" | "c" | "bc" | "cb" | "ab" | "ac" | "abc" | "acb" | "ba" | "ca" | "bca" | "cba" | "bac" | "cab"
type res5 = AllCombinations<'a' | 'b' | 'c'>;

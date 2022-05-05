export {};

// 递归提取 promise 的返回值
type GetPromiseVal<T extends Promise<unknown>> = T extends Promise<infer Val>
  ? Val extends Promise<unknown>
    ? GetPromiseVal<Val>
    : Val
  : T;

type promise1 = Promise<string>;
type promise2 = Promise<promise1>;

type res1 = GetPromiseVal<promise1>; // type res1 = string
type res2 = GetPromiseVal<promise2>; // type res2 = string

// 将数组的类型反转
// 提取最后一个，和其它前面的所有，然后再把前面所有的再递归反转
type ReverseArray<T extends unknown[]> = T extends [...infer Rest, infer Last] ? [Last, ...ReverseArray<Rest>] : T;

type res3 = ReverseArray<[string, boolean, number]>; // type res3 = [number, boolean, string]

// 判断数组中是否存在某种类型

type IsEqual<A, B> = (A extends B ? true : false) | (B extends A ? true : false); // 判断 A，B 是否相等

// 遍历数组，依次进行对比是否存在相同类型
type Includes<T extends unknown[], Val> = T extends [infer First, ...infer Rest]
  ? IsEqual<First, Val> extends true
    ? true
    : Includes<Rest, Val>
  : false;

type res4 = Includes<[string, boolean], number>; // type res4 = false
type res5 = Includes<[string, boolean, number], number>; // type res5 = true

// 删除数组中的某个类型，如果理解有些困难，可以尝试一步一步将结果写出来，模拟进行调试
// 遍历数组，每次取出第一个判断是否需要删除的类型，如果是，则将其删除，否则，依旧将其保留

type RemoveArrayByType<T extends unknown[], Type, Result extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
] // 例如：[1,2,2,3], 2，倒数第二次次遍历会得到 3 和 []，那么最后一次就不会进入这个条件，直接返回 Result 了
  ? IsEqual<First, Type> extends true
    ? RemoveArrayByType<Rest, Type, Result> // 如果该类型需要删除，则将其放到 Result
    : RemoveArrayByType<Rest, Type, [...Result, First]> // 如果不需要删除，则依旧按照原有顺序，将其排在之前的后面
  : Result;

type res6 = RemoveArrayByType<[1, 2, 2, 3], 2>;

// 传入一个长度，构造出长度为指定长度的数组
// 如果长度不够，则每次都新增一个需要填充的类型 如果长度足够，则直接将其返回
type BuildArray<Length extends number, Ele, Result extends unknown[] = []> = Result['length'] extends Length
  ? Result
  : BuildArray<Length, Ele, [Ele, ...Result]>;

type res7 = BuildArray<4, number>; // type res7 = [number, number, number, number]

// 其实学习到这里，会发现，对于数组而言，如果要返回新数组，很多情况下需要把返回的数组定义在最后一个泛型，然后给一个默认值，这算是一个小tip

// interface test {
//   name: string;
// }

// type res7 = test & { name: number; age: number };

// const a: res7 = { name: 'aa', age: 19 };

// interface testb {
//   name: number;
// }

// interface HeaderMenuItemProps
//   extends testb,
//     Partial<{
//       isHovering: boolean;
//       disabled: boolean;
//       current: boolean;
//       index: number;
//       one: boolean;
//       setOne: (value: boolean) => void;
//     }> {}

// const b: HeaderMenuItemProps = {
//   name: 111,
//   current: true,
// };

// interface HeaderMenuItemProps extends BoxProps {
//   isHovering?: boolean,
//   disabled?: boolean,
//   current?: boolean,
//   index?: number,
//   one?: boolean,
//   setOne?: (value:boolean) => void
// }

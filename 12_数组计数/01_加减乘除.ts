export {};

// 传入长度，构造出指定长度的数组
type BuildArray<Length extends number, Result extends unknown[] = []> = Result['length'] extends Length
  ? Result
  : BuildArray<Length, [unknown, ...Result]>;

// 加法
// 虽然 ts 中没有加减乘除运算，但是可以通过生成数组，然后返回数组的长度来模拟加法
type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length'];

type res2 = Add<10, 20>; // type res2 = 30

type res1 = BuildArray<6>;

// 减法
// 先构建出 减数 长度的数组， 然后再构建出 被减数的数组，那么剩下的就是结果了
type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest]
  ? Rest['length']
  : never;

type res3 = Subtract<100, 50>; // type res3 = 50

// 乘法
// 转换成 多个 数字相加，例如 3x5  -> 3+3+3+3+3
// 思路为：先用一个 Result 作为存储计算结果的值 每次都 构造出一个 Num1 长度的数组，每次构造后， Num2 就减1，当它等于0的时候，相当于全部加完了，就把Result的长度返回就ok
type Mutiply<Num1 extends number, Num2 extends number, Result extends unknown[] = []> = Num2 extends 0
  ? Result['length']
  : Mutiply<Num1, Subtract<Num2, 1>, [...Result, ...BuildArray<Num1>]>;

type res4 = Mutiply<3, 5>; // type res4 = 15

// 除法
// 15/3
// 递归的相减，每次减完，Result就+1,当减完的时候， Result就是结果了
type Divide<Num1 extends number, Num2 extends number, Result extends unknown[] = []> = Num1 extends 0
  ? Result['length']
  : Divide<Subtract<Num1, Num2>, Num2, [...Result, unknown]>;

// 类型实例化过深，且可能无限。ts(2589)

type res5 = Divide<15, 3>; // type res5 = 5

// 加法转换成了数组构造
// 减法转换成了数组提取
// 乘法转换成了递归相加
// 除法转换成了递归相减

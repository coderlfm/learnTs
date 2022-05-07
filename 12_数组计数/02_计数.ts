// 计算字符串长度
// 字符串的判断需要通过 `${xxx}` 的方式来判断，而不是类似数组的方式，判断某个数字是否等于0
type GetStrLen<T extends string, Result extends unknown[] = []> = T extends `${infer First}${infer Rest}`
  ? GetStrLen<Rest, [...Result, First]>
  : Result['length'];

type res1 = GetStrLen<'hello'>; // type res1 = 5

// 判断 A 是否大于 B
// 用 一个结果数组来进行计数， 如果先到达
type GreaterThan<Num1 extends number, Num2 extends number, Result extends unknown[] = []> = Num1 extends Num2
  ? false
  : Result['length'] extends Num2
  ? true
  : Result['length'] extends Num1
  ? false
  : GreaterThan<Num1, Num2, [...Result, unknown]>;

type res2 = GreaterThan<5, 2>; // type res2 = true


// 计算斐波那契数列 Fibonacci
// 思路：IndexArr 是用来做叠加累计的，每次叠加的时候都会把 Peev和Current 累加
// 如果 IndexArr 累加的次数到了需要求的数字，则将所有累加(CurrentArr)的结果返回
type FibonacciLoop<
  PrevArr extends unknown[],
  CurrentArr extends unknown[],
  IndexArr extends unknown[] = [],
  Num extends number = 1
> = IndexArr['length'] extends Num
  ? CurrentArr['length']
  : FibonacciLoop<CurrentArr, [...PrevArr, ...CurrentArr], [...IndexArr, unknown], Num>;

type Fibonacci<Num extends number> = FibonacciLoop<[1], [], [], Num>;


type res3 = Fibonacci<8>; // type res3 = 21

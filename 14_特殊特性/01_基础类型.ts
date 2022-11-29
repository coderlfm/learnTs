export {};

// isAny，判断是否any

// 需要过滤 any
// isEqual
type IsEqual2<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

// IsUnion

// IsNever
// never 也比较特殊，如果条件类型的左边是 never，则会直接返回never
// any 类型也比较特殊，如果条件类型左边是 any，则会将 true 和 false 作为联合类型返回 T extends number ? 1 : 2; 返回  1 | 2;

// type RemoveAtIndex<T extends unknown[], RemoveIndex extends number, I extends number = 0, Result extends unknown[] =[] > = T extends [infer First, ...infer Rest] ? I extends RemoveIndex ? [...Result, ...Rest]: RemoveAtIndex<Rest, RemoveIndex, I,[...Rest,First] >

type BuildInt<Num extends number, Result extends unknown[] = []> = Num extends Result['length']
  ? Result['length']
  : BuildInt<Num, [Result, unknown]>;

type Subtract<Num1 extends number, Num2 extends number, Result extends unknown[] = []> = Num1


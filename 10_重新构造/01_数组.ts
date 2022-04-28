export {};
// 往元祖后新增类型
type Push<T extends unknown[], V> = [...T, V];

type res1 = Push<[string, boolean], string>;

// 往前新增类型
type Unshirft<T extends unknown[], V> = [V, ...T];
type res2 = Unshirft<[string, boolean], string>;

// 扩展元祖
type Zip<One extends unknown[], Two extends unknown[]> = One extends [infer OneFirst, ...infer OneRest]
  ? Two extends [infer TwoFirst, ...infer TwoRest]
    ? [[OneFirst, TwoFirst], ...Zip<OneRest, TwoRest>]
    : []
  : [];

type res3 = Zip<['a', 'b', 'c'], [1, 2, 3]>; // type res3 = [["a", 1], ["b", 2], ["c", 3]]

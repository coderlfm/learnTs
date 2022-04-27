export {};

// 提取数组首尾类型, 需要掌握  extends ? :  和 infer 局部变量的使用

// 提取首部
type GetArrFirst<T extends unknown[]> = T extends [infer first, ...unknown[]] ? first : never;

type first = GetArrFirst<[string, boolean, 3, 4]>; // type first = string

// 提取尾部
type GetArrLast<T extends unknown[]> = T extends [...unknown[], infer last] ? last : never;

type last = GetArrLast<[string, boolean, 3, 4]>; // type last = 4

// 提取中间数组
type GetArrRest<T extends unknown[]> = T extends [infer fast, ...infer rest, infer last] ? rest : never;

type rest = GetArrRest<[boolean, 1, 2, 3, string]>; // type rest = [1, 2, 3]


export {};

// ts 中的条件判断需要使用 extends ? : ，用它可以实现类似 if，else 的逻辑

// 是否等于2
type isTwo<T> = T extends 2 ? true : false;

type res1 = isTwo<1>; // type res1 = false
type res2 = isTwo<2>; // type res2 = true

// 是否错误
type isError<T> = T extends '502' ? true: false;

type errorRes1 = isError<'200'>; // type errorRes1 = false
type errorRes2 = isError<'502'>; // type errorRes2 = true



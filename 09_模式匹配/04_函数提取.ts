export {};

// 提取函数的参数
// 需要注意函数的参数声明写法 (...params: infer args) => unknown
type GetFuncParams<Func extends Function> = Func extends (...params: infer args) => unknown ? args : never;

type res1 = GetFuncParams<(a: number, b: string) => void>; // type res1 = [a: number, b: string]

// 提取函数的返回值
type GetFuncReturnVal<Func extends Function> = Func extends (...args) => infer val ? val : never;

type res2 = GetFuncReturnVal<(a: string) => string>; // type res2 = string


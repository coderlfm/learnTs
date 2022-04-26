export {};
type Response = Promise<'abc'>;

// 通过声明局部变量 infer val 来提取局部变量
type GetResponseValue<T> = T extends Promise<infer val> ? val : never;

type ResponseValue = GetResponseValue<Response>; // type ResponseValue = "abc"

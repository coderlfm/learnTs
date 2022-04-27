export {};

interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

// 获取构造函数返回值类型
type GetConstructorParams<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer RuturnType
  ? RuturnType
  : never;

type res1 = GetConstructorParams<PersonConstructor>; // type res1 = Person

// 提取 ref 的值
type PropsWithRef<T> = 'ref' extends keyof T ? (T extends { ref: infer Val | undefined } ? Val : undefined) : T;

type res2 = PropsWithRef<{ ref: 123; name: '小明' }>; // type res2 = 123
type res3 = PropsWithRef<{ ref: undefined; name: '小明' }>; // type res3 = undefined

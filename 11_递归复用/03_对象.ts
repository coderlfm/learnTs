export {};

// 递归将对象的所有属性都转为只读属性
type DeepReadonly<T extends object> = {
  readonly [Key in keyof T]: T[Key] extends object ? DeepReadonly<T[Key]> : T[Key];
};

// 递归将对象的所有属性都变成 readonly
type res1 = DeepReadonly<{ a: { b: { c: string } } }>;

const obj: res1 = { a: { b: { c: 'aaa' } } };

// obj.a.b.c = 'ccc'; // 无法分配到 "c" ，因为它是只读属性。ts(2540)

// 以下思路和上述一致

// 将对象所有属性都 转为可选
// 将对象所有属性都 去除只读
// 将对象所有属性都 去除可选

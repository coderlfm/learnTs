// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
interface Person {
  name: string;
  age?: number;
  weight?: number;
}
type PartialPerson = Partial<Person>;

// 相当于
// interface PartialPerson {
//   name?: string;
//   age?: number;
//   weight?: number;
// }

// Partial<> 将所有属性变成可选
// Required<> 将所有属性变成必填
// Readonly<> 将所有属性变成只读
// Pick<Target, 'a', 'b'> 提取目标类型中的某些类型，返回一个新类型
// Omit<Target, 'a', 'b'> 剔除目标类型中的某些类型，返回一个新类型

// 传入联合类型
// Extract<'a' | 'b' | 'c', 'a'> 提取目标类型中的某些类型，返回一个新类型
// Exclude<'a' | 'b' | 'c', 'a'> 剔除目标类型中的某些类型，返回一个新类型
// NonNullable<> 剔除 null 和 undefined 类型，返回一个新类型
// Record<key, val> 生成接口类型， key和val 可以为一种类型，也可以为联合类型 用于给对象生成类型比较方便

// 字符串类型 这种一般比较少用，可能会用于 字符串的联合类型 进行二次转换，不过对于业务开发，这种不太常见，对于组件库之类可能会需要用到
// Uppercase<> 将字符串转为大写
// Lowercase<> 将字符串转为小写
// Capitalize<> 将字符串第一位转为大写
// Uncapitalize<> 将字符串第一位转为小写

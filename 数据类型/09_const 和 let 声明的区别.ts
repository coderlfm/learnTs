let name = '小明'; // 类型为 string
const name2 = '小红'; // 类型为 '小红'

let name3 = name2; // 类型为 string

// 使用 let (为显示声明注解)声明的类型会扩宽
// 使用 const 声明的类型会收窄

// 显示声明注解(字面量类型)则也会确定类型

// 这种声明方式在 TpyeScript 中被称为 字面量类型
let name4: 'kkk' = 'kkk'; // 类型为 'kkk'

let name5 = name4; // 类型为 'kkk'

export {};

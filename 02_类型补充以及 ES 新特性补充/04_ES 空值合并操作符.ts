// 在 ES2020 中新增空值合并操作符
//  `null` 或 `undefined` 时会使用右边的值，否则返回左边的值

/* 
 `??` 和 `||` 的区别
 `||` 会先将左边的值转换成布尔值再判断左边是否为 true，当左边为 true，则返回左边的值，否则返回右边的值
    所以 `||` 会判断 `0`, `''`, `null`, `undefined`
 `??` 只判断 `null` 或 `undefined`，

 */

function sayName(name: string | undefined | null) {
  console.log(name ?? '请输入姓名'); // 编译正常, 运行正常
}

sayName(undefined); // '请输入姓名'
sayName(null); // '请输入姓名'
sayName(''); // ''
sayName('小明'); // '小明'

export {};

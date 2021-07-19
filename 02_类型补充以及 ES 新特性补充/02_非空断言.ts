// 非空断言运算符
// 在 ts 中，如果明确一个值不会是 `null` 和 `undefined` 时，可以使用非空断言来避免 ts的语法检查

// 练习阶段如果没有 `tsconfig.json` 的情况不会出现报错，
// 使用 `tsc --init` 命令生成 `tsconfig.json` 后，默认会开启严格模式，严格模式下会出现ts的报错

/* 
  ?. optional chaining 是 es 规范支持的一个操作符
  ! non-null assertion operator 是 ts 类型支持的一个操作符
  !不一定要和.连在一起
  但是?.一定是连在一起的
 */

type Info = {
  name: string;
  age: number;
  like?: string;
};

let info: Info = {
  name: '小明',
  age: 18,
};

function sayLike(info: Info | undefined) {
  // console.log(info.name);    // 严格模式下报错
  console.log(info!.like); // 编译正常,运行时报错
}

sayLike(undefined); // 运行时报错
sayLike(info); // 运行时正常

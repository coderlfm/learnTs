/* 
  `declare` 也可以用来声明类型，使用 `declare` 声明的类型只是在编译阶段用作检查，在运行阶段会被删除
  需要注意以下几点
  `declare` 只能在 `.d.ts` 结尾的声明文件中使用
    `d` 是 `definition/定义` 的简写
   使用 `declare` 声明的所有类型都是全局类型
    所以有些值可能会冲突，例如枚举类型可能会重复声明

*/

declare let $: (select: string) => any;

declare const type: number;

declare const enum Day {
  SUNDAY,
  MONDAY,
}

// declare let $: any;
// $('#id').addClass('show'); // ok

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

// 声明命名空间
/**
  在早期还没有 `es6` 的时候，`TypeScript` 使用 `module` 来声明一个模块，后来 es6 也使用了 module 关键字，TypeScript 就把 module 改成了 namespace

  现在 TypeScript 和 es6 一样，只要包含了顶级 import 或者 export，则会将这个文件生成一个模块，随着es6的广泛使用，致使 namespace 基本被淘汰了，但是我们在给第三方库声明 namespace 的时候就显得非常有用了
 */
declare namespace loaddash {
  export function join(list: string[]): string[];
}

// declare let $: any;
// $('#id').addClass('show'); // ok

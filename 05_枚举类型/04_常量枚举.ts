/* 
 TypeScript 中也支持常量枚举，使用常量枚举，使用常量枚举不允许 成员有计算值()，以下为计算值得简单示例
*/

{
  enum Direction {
    TOP,
    LENGTH = 'abc'.length,
  }
}

/* 常量类型可以在 enum 前通过 const 关键字来修饰 */
{
  const enum Direction {
    TOP,
    LEFT,
    RIGHT,
    BOTTOM,
    // LENGTH = 'abc'.length,  // 常量枚举成员初始值设定项只能包含文字值和其他计算的枚举值。ts(2474)
  }
  console.log(Direction.TOP);
  console.log(Direction.LEFT);

  // 使用常量枚举时，在编译阶段会将该枚举删除，这可以避免生成一些额外的代码，在代码体积方面，会比常规的枚举类型性能稍好
  // 转换成 js 时，
  {
    ('use strict');
    console.log(0 /* TOP */);
    console.log(1 /* LEFT */);
  }
}

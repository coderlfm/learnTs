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
}

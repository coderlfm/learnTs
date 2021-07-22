/* 
  枚举类型是 Typescript 中特有的类型
  TypeScript 提供了数字枚举和 字符串枚举
  枚举类型使用 `enum` 来声明
  枚举类型如果未付值，则默认从数字 0 递增
*/

// 数字枚举
enum Direction {
  TOP, // 0
  LEFT, // 1
  RIGHT, // 2
  BOTTOM,
}

function toDirection(direction: Direction) {
  switch (direction) {
    case Direction.TOP:
      console.log('top');
      break;

    case Direction.LEFT:
      console.log('left');
      break;

    case Direction.RIGHT:
      console.log('right');
      break;

    case Direction.BOTTOM:
      console.log('bottom');
      break;

    default:
      const check: never = direction;
  }
}

toDirection(Direction.BOTTOM);

console.log(Direction.TOP); // 0

console.log(Direction.TOP === 0);

/* 

这个值最终转换成 js 是这样
*/
/* 
var Direction;
(function (Direction) {
  Direction[(Direction['TOP'] = 0)] = 'TOP';
  Direction[(Direction['LEFT'] = 1)] = 'LEFT';
  Direction[(Direction['RIGHT'] = 2)] = 'RIGHT';
  Direction[(Direction['BOTTOM'] = 3)] = 'BOTTOM';
})(Direction || (Direction = {}));
 */

/* 
  也可以显式的指定值，后续的值也会自动递增
*/
{
  enum Direction {
    TOP = 100, // 100
    LEFT, // 101
    RIGHT, // 102
    BOTTOM,
  }
}

/* 
  但是如果我们不是给第一个成员赋值，而是给其它成员赋值的时候，就可能会出现意想不到的问题了，所以一般我们不会手动的给枚举类型赋值
*/
{
  enum Direction {
    TOP,
    LEFT,
    RIGHT = 1,
    BOTTOM,
  }

  /* 
    var Direction;
    (function (Direction) {
        Direction[Direction["TOP"] = 0] = "TOP";
        Direction[Direction["LEFT"] = 1] = "LEFT";
        Direction[Direction["RIGHT"] = 1] = "RIGHT";
        Direction[Direction["BOTTOM"] = 2] = "BOTTOM";
    })(Direction || (Direction = {}))
  */
  
}

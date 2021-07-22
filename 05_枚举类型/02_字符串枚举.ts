/* 
  相对于 数字枚举，在运行和调试阶段 字符串枚举 更具有明确的含义和可读性，
*/

{
  enum Direction {
    TOP = 'TOP',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    BOTTOM = 'BOTTOM',
  }
  /* 
  var Direction;
  (function (Direction) {
      Direction["TOP"] = "TOP";
      Direction["LEFT"] = "LEFT";
      Direction["RIGHT"] = "RIGHT";
      Direction["BOTTOM"] = "BOTTOM";
  })(Direction || (Direction = {}));
  */
}

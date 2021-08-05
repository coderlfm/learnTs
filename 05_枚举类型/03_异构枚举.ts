/* 
 从技术上讲，`TypeScript` 支持异构枚举，异构枚举就是字符串枚举和数字枚举可以同时存在
 但是连`TypeScript` 官方也不知道在什么场景可用到这种枚举🤣
*/

{
  enum Flag {
    YES = 1,
    NO = 'NO',
  }
}

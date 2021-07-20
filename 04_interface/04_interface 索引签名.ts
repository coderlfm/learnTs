/* 
  索引签名一般用于，我们不知道对象中具体的属性名，但是我们知道对象中的具体结构

*/

{
  interface IInfo {
    [name: string]: string;
  }

  const info: IInfo = {
    name: '小明',
    like: '唱歌',
    // age: 18,    // ts 语法报错，不能将类型“number”分配给类型“string”。ts(2322)
  };
}

/* 
  索引签名支持 字符串和 数字类型，但是 数字类型为索引时，实际上在索引对象的时候还是将其转换为 字符串类型，所以如果同时使用了两种类型，则两种索引类型的值需要一致
*/
{
  interface IInfo {
    [name: string]: string;
    // [age:number]: number;      // ts 语法报错 数字索引类型“number”不能赋给字符串索引类型“string”。ts(2413)
  }

  const info: IInfo = {
    name: '小明',
    like: '唱歌',
    // age: 18,    // ts 语法报错，不能将类型“number”分配给类型“string”。ts(2322)
  };
}

{
  interface IInfo {
    [age: number]: string;
  }

  const info: IInfo = {
    1001: '小明',
    // like: '唱歌', //   对象文字可以只指定已知属性，并且“like”不在类型“IInfo”中。
  };
}

/* 
  那如果我们需要让对象中的值支持多种类型，我们可以使用联合类型
*/
{
  interface IInfo {
    [name: string]: string | boolean; // 同时支持字符串和布尔值类型
    man: boolean;
    name: string;
    // age: number;  // 类型“number”的属性“age”不能赋给字符串索引类型“string | boolean”。ts(2411)
  }

  const info: IInfo = {
    man: true,
    name: '小明',
    // age:18,  // 不能将类型“number”分配给类型“string | boolean”。ts(2322)
  };
}

/* 
只读索引类型
当我们 使用 readonly 来修饰索引类型的时候，可以防止这个对象被修改
*/

{
  interface IInfo {
    readonly [name: string]: string; // 同时支持字符串和布尔值类型
  }

  function getInfo(): IInfo {
    return {
      name: '小明',
    };
  }

  const info: IInfo = getInfo();

  // info.name = '小红';   // ts 语法报错 类型“IInfo”中的索引签名仅允许读取。ts(2542)
}

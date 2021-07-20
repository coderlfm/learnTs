{
  interface Iinfo {
    readonly name: string;
    age: number;
  }

  const info: Iinfo = {
    name: 'ts',
    age: 18,
  };

  // info.name = 'java'   // 只读属性被赋值后不允许再次修改
  
  
}

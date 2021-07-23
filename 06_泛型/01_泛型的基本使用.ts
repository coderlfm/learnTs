/* 
  泛型是 TypeScript 中较为强大的一种类型
  泛型可以将 **类型参数化**，将原来预先写好的类型变成由使用者使用的时候作为参数传入，
  泛型的基本语法为 <> ，中间为泛型的形参
*/
{
  function reflect<P>(param: P) {
    console.log(param);
  }

  /* 
  这里可以看到，<> 中间为泛型的定义，param的类型表示为泛型P，返回值也为泛型 P
  */

  /* 
  当我们调用这个方法的时候，在方法名的后面加上一个 <> 将此次的具体类型传入进去
  */

  reflect<number>(123); // 类型为：function reflect<number>(param: number): void
  reflect<string>('123'); // 类型为：function reflect<string>(param: string): void

  /* 
  当然，也可以不显式传入泛型的类型，TypeScript 会帮助我们做类型推导
  */

  reflect(123); // 类型为：function reflect<number>(param: number): void
  reflect('123'); // 类型为：function reflect<string>(param: string): void
}

{
  /* 
  泛型还可以用来约束数组，对象等类型
  */
  function reflect2<P>(param: P[]) {
    console.log(param);
  }

  reflect2([1, 2, 3]); // 类型为：function reflect2<number>(param: number[]): void
  reflect2([1, 2, '3']); // 类型为：function reflect2<string | number>(param: (string | number)[]): void
}

{
  /* 
  多个泛型形参，多个泛型可以用逗号隔开
*/
  function reflect3<P, T>(param: P, type: T): [P, T] {
    return [param, type];
  }

  reflect3(123, 'abc');
  // 类型为 function reflect3<number, string>(param: number, type: string): [number, string]
}

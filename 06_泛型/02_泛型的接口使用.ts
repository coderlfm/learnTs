/* 
  除了可以在函数上使用泛型，我们还可以在接口中使用泛型
*/
{
  interface IInfo<N, A> {
    name: N;
    age: A;
  }

  const info: IInfo<string, number> = {
    name: '小明',
    age: 18,
  };
}

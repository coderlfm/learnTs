/* 
  可以看到，在接口类型中，我们需要显式的给泛型指定类型，当属性多的话，这种方式会较为低效，那有没有什么方式可以帮助我们设置默认值呢，答案是有的
  我们可以省声明泛型的时候 在 = 号的右边设置泛型的默认值
*/
{
  interface IInfo<N = string, A = number> {
    name: N;
    age: A;
  }

  const info: IInfo = {
    name: '小明',
    age: 18,
  };
}

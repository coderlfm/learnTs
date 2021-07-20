/* 
interface 一般用来声明对象类型
 */

/* 
 在 `TypeScript` 中可缺省的属性相当于是 `age: number | undefined` 的联合类型
 那么我们为什么把它写成可缺省的呢，因为写成 可缺省的表示属性名可以不写，如果写成  `age: number | undefined` 则属性名必须写
 */
{
  interface Iinfo {
    name: string;
    age?: number; // 可缺省的
  }

  const info1: Iinfo = {
    name: 'ts',
    age: 18,
  };

  const info2: Iinfo = {
    name: 'ts',
  };
}

/* 
interface 也可以用来声明函数类型，但是多数情况下我们会使用 type 类型别名来声明函数类型
*/

{
  interface ISum {
    (num1: number, num2: number): number;
  }

  const sum: ISum = (num1, num2) => {
    return num1 + num2;
  };
}
{
  interface ISum1 {
    (num1: number): number;
  }
  interface ISum2 {
    (num1: string): string;
  }

  const sum: ISum1 | ISum2 = (num1) => {
    return num1 ;
  };

  sum(1)
}

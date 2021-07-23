/* 
  我们在使用泛型的时候，可以给泛型添加一些约束，使调用者调用的时候必须符合这些约束
  在声明泛型的时候 后面跟上 `extends` 关键字，表示这个泛型需要符合 这个类型
*/

{
  // 基本约束
  function reflect<P extends string | number>(param: P) {
    console.log(param);
  }
  reflect('123');
  reflect(123);
  // reflect(true); // 类型“boolean”的参数不能赋给类型“string | number”的参数。ts(2345)
}

{
  // 进阶约束
  function reflect2<P extends { name: string; age: number }>(param: P) {
    console.log(param);
  }
  reflect2({ name: '小明', age: 18 });
  reflect2({ name: '小红', age: 18, like: '唱歌' });
  // reflect2({ name: '小东' });   //  缺少属性 "age"

  interface IPerson {
    name: string;
  }

  function reflect3<P extends IPerson>(param: P) {
    console.log(param);
  }

  const p: IPerson = { name: '小明' };

  reflect3(p);
  reflect3({ name: '小红', age: 18 });
  // reflect3(123);  // 类型“number”的参数不能赋给类型“IPerson”的参数。ts(2345)
}

{
  /* 
    泛型间互相约束
  */

  function setVal<O extends {}, K extends keyof O, V extends O[K]>(obj: O, key: K, val: V) {
    obj[key] = val;
  }

  const info = {
    name: '小明',
    age: 18,
  };

  // setVal(info,);
  /* 
  当我们写了第一个对象的时候，ide 自动给了我们提示
  setVal(obj: { name: string; age: number; }, key: "name" | "age", val: string | number): void
  */
  setVal(info, 'name', '小红');
  setVal(info, 'age', 19);
  // setVal(info, 'name', true); // 类型“boolean”的参数不能赋给类型“string”的参数。ts(2345)
}

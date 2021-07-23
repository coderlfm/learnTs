/* 
  泛型在类中也是可以使用
*/

class Person<N> {
  name: N;
  constructor(name: N) {
    this.name = name;
  }

  getName(): N {
    return this.name;
  }
}

// const p = new Person<string>('小明');
const p = new Person('小明'); // 也可以类型推导

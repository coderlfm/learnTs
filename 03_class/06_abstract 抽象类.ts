/* 
  抽象类
  抽象类中的属性或者方法可以不包含具体的实现，交给子类来实现
  抽象方法或者抽象属性都是没有具体的实现，且抽象类不能 new

  由于抽象类不能 new，所有一般 抽象类是用来做一些基础逻辑的封装
  
*/

{
  abstract class Info {
    abstract name: string;    // 使用 abstract 修饰，子类必须实现
    abstract sayName(): void; // 抽象类声明 函数和普通函数声明不太一致

    sayHell() {
      console.log('hello');
    }
  }

  class Person extends Info {
    name;

    constructor(name: string) {
      super();
      this.name = name;
    }

    sayName() {
      console.log(this.name);
    }
  }
  // new Info();      // 语法报错，不允许 new 抽象类

  const person = new Person('小明');
  person.sayName();
  person.sayHell();

}

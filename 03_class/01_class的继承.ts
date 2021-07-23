/* 
TypeScript 中也有类的概念，
TODO: 基本类的使用
*/

class Person {
  name: string;
  age: number; // 需要初始化值，否则 ts 检查报错

  constructor(name: string, age: number) {
    this.name = name; // 对于这种情况 Dart 中可以简写
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }
}

const xiaomin = new Person('小明', 18);
xiaomin.name = '小东';
// xiaomin.age = 18;

xiaomin.sayName();

/**
TODO: 类的继承
一个类可以继承另外一个类，
继承的类叫做 子类/派生类
被继承的类叫做 父类/基类
 */

// Man 类中 没有 构造函数，原因是如果写了构造函数，就需要手动调用 super();
class Man extends Person {
  // constructor(name: string, age: number){
  //   super(name, age)  // 如果写了构造函数，就需要手动调用 super();
  // }

  printSex() {
    console.log('男人');
  }
}

const man = new Man('小明', 18); //当子类没有构造函数的时，会自动调用父类的构造函数
man.printSex();



export {};

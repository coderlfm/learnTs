interface IPerson {
  name: string;
  age: number;
  sayHello: () => void;
}

// 定义类的构造函数及其静态属性
interface IPersonClass {
  new (name: string, age: number): IPerson;
  ClassName: string;
}

// 通过双重约束来限制类的静态类型和类的实例类型
const PersonClass: IPersonClass = class Person implements IPerson {
  name: string;
  age: number;

  static ClassName = 'person';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("I' m " + this.name + ', hello');
  }
};

// class Person implements IPerson {
//   constructor(public name: string, public age: number) {}

//   sayHello() {
//     console.log("I' m " + this.name + ', hello');
//   }
// }

const p = new PersonClass('小明', 18);
p.sayHello();


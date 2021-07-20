/* 
 在 Typescript 中，接口可以用交给类来实现

*/

interface IInfo {
  name: string;
  age: number;
  sayName: () => void;
}

class Info implements IInfo {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log('my name is', this.name);
  }
}

const info: Info = new Info('小明', 18);
info.sayName(); //my name is 小明

export {};
